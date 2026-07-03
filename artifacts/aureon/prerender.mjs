/**
 * Prerender script — runs after `vite build` to generate per-route static HTML.
 *
 * Pipeline:
 *   1. Vite SSR build  — compiles entry-server.tsx into dist/server/entry-server.js
 *      (with framer-motion aliased to an SSR-safe stub so renderToString works)
 *   2. Per-route render — calls render(url) for each route; react-helmet-async v3
 *      renders <Helmet> children inline into the HTML string so the output begins
 *      with the route-specific head tags followed by the page body markup
 *   3. Inject          — head tags → <!--app-head-->; body → <div id="root">
 *   4. Write           — dist/public/<route>/index.html
 *
 * Exits non-zero if any route fails so broken output cannot ship silently.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

process.env.PORT = process.env.PORT ?? "5173";
process.env.BASE_PATH = process.env.BASE_PATH ?? "/";
process.env.NODE_ENV = "production";

const ROUTES = [
  { url: "/",                 out: "index.html"                    },
  { url: "/about",            out: "about/index.html"              },
  { url: "/contact",          out: "contact/index.html"            },
  { url: "/lp/ghosted",       out: "lp/ghosted/index.html"         },
  { url: "/lp/price",         out: "lp/price/index.html"           },
  { url: "/start",            out: "start/index.html"              },
  { url: "/quiz",             out: "quiz/index.html"               },
  { url: "/select-medication",out: "select-medication/index.html"  },
  { url: "/select-plan",      out: "select-plan/index.html"        },
  { url: "/intake",           out: "intake/index.html"             },
  { url: "/terms",            out: "terms/index.html"              },
];

/**
 * Split the raw renderToString output into head tags and body markup.
 *
 * react-helmet-async v3 renders <Helmet> children inline, so the HTML string
 * begins with the route-specific head elements (title, meta, link) followed by
 * the actual page content. We scan until we hit the first element that is NOT
 * a head-level element.
 */
function splitHeadBody(rawHtml) {
  // Match the first tag that is NOT a head-level element (title/meta/link) or
  // their closing counterparts (only </title> appears in practice since meta
  // and link are void/self-closing). The \/ in \/?  makes </title> also skipped.
  const bodyStart = rawHtml.search(/<(?!\/?(?:title|meta|link)[\s\/>])/i);
  if (bodyStart === -1) {
    // Entire output is head tags (shouldn't happen for full-app render)
    return { headHtml: rawHtml, bodyHtml: "" };
  }
  return {
    headHtml: rawHtml.slice(0, bodyStart).trim(),
    bodyHtml: rawHtml.slice(bodyStart),
  };
}

async function buildSsrBundle() {
  console.log("Building SSR bundle…");
  await build({
    root: __dirname,
    base: "/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        // Replace framer-motion with a server-safe stub that avoids
        // useSyncExternalStore (which throws in React 19 renderToString
        // when getServerSnapshot is missing).
        "framer-motion": path.resolve(
          __dirname,
          "src/ssr-mocks/framer-motion.tsx",
        ),
      },
      dedupe: ["react", "react-dom"],
    },
    ssr: {
      // Force framer-motion to be bundled (not externalized) so the alias
      // above replaces it with the SSR-safe stub instead of loading the real
      // package from node_modules at runtime.
      noExternal: ["framer-motion"],
    },
    build: {
      ssr: "src/entry-server.tsx",
      outDir: "dist/server",
      emptyOutDir: true,
      rollupOptions: { output: { format: "esm" } },
    },
    logLevel: "warn",
  });
  console.log("SSR bundle ready.\n");
}

async function prerender() {
  // 1 — Build SSR bundle
  await buildSsrBundle();

  // 2 — Load render function from bundle (cache-bust so Node doesn't reuse a
  //     stale import from a previous run in the same process)
  const bundlePath =
    path.resolve(__dirname, "dist/server/entry-server.js") +
    `?t=${Date.now()}`;
  const { render } = await import(bundlePath);

  // 3 — Load client-side template
  const templatePath = path.resolve(__dirname, "dist/public/index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(
      "dist/public/index.html not found — run `vite build` before prerendering.",
    );
  }
  const template = fs.readFileSync(templatePath, "utf-8");
  if (!template.includes("<!--app-head-->")) {
    throw new Error(
      "dist/public/index.html is missing <!--app-head--> marker. " +
        "Vite should preserve this comment — check vite.config.ts.",
    );
  }
  if (!template.includes('<div id="root"></div>')) {
    throw new Error('dist/public/index.html is missing <div id="root"></div>.');
  }

  // 4 — Render each route
  const failures = [];
  for (const route of ROUTES) {
    try {
      const { html: rawHtml } = await render(route.url);
      if (!rawHtml) throw new Error("render() returned empty HTML");

      const { headHtml, bodyHtml } = splitHeadBody(rawHtml);

      if (!headHtml) throw new Error("No head tags found in rendered output");
      if (!bodyHtml) throw new Error("No body HTML found in rendered output");

      // Replace the <!--app-head--> marker with route-specific head tags and
      // hydrate the root div with the server-rendered page body.
      const finalHtml = template
        .replace("<!--app-head-->", headHtml)
        .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);

      const outPath = path.resolve(__dirname, "dist/public", route.out);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, finalHtml, "utf-8");
      console.log(`  ✓ ${route.url}  (head: ${headHtml.length}b, body: ${bodyHtml.length}b)`);
    } catch (err) {
      console.error(`  ✗ ${route.url}: ${err.message}`);
      failures.push(route.url);
    }
  }

  if (failures.length > 0) {
    throw new Error(
      `Prerender failed for ${failures.length} route(s): ${failures.join(", ")}`,
    );
  }

  console.log(`\nPrerender complete — ${ROUTES.length} routes rendered.`);
}

prerender().catch((err) => {
  console.error("\nPrerender failed:", err.message);
  process.exit(1);
});
