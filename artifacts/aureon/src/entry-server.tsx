/**
 * SSR entry used by prerender.mjs (via `vite build --ssr`).
 *
 * react-helmet-async v3 renders <Helmet> children inline into the HTML string
 * so the returned `html` starts with route-specific head tags (title, meta,
 * link, …) followed by the actual page markup.
 *
 * prerender.mjs splits the html on the first non-head-level element and
 * injects each portion into the right place in the index.html template.
 *
 * Routing quirks fixed here:
 *
 *   1. wouter's memoryLocation uses useSyncExternalStore (reactive subscription)
 *      which throws in React 19 renderToString when getServerSnapshot is absent.
 *      We supply a plain static location hook — no subscription, no hooks at all
 *      inside it — that simply returns the fixed URL.
 *
 *   2. wouter's useSearch() reads router.searchHook which defaults to the
 *      browser `location` global (undefined in Node.js → "location is not
 *      defined").  We attach a static searchHook to the location hook function
 *      (wouter picks it up via `props.hook?.searchHook`), returning an empty
 *      search string — safe for SSR where query params are irrelevant.
 */
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./App";

/** Build a zero-subscription, zero-browser-API location hook for SSR. */
function makeStaticHook(url: string) {
  function useStaticLocation(): [string, (to: string) => void] {
    // No React hooks called here — just returns the fixed URL.
    return [url, () => {}];
  }

  // wouter reads `hook.searchHook` to resolve useSearch().
  // Without this, it falls back to use-browser-location which reads the
  // browser `location` global — absent in Node.js.
  (useStaticLocation as unknown as Record<string, unknown>).searchHook =
    function useStaticSearch() {
      return "";
    };

  return useStaticLocation;
}

export async function render(url: string) {
  const helmetContext = {};
  const queryClient = new QueryClient();

  const html = renderToString(
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <Router hook={makeStaticHook(url)}>
          <AppRoutes />
        </Router>
      </HelmetProvider>
    </QueryClientProvider>,
  );

  return { html };
}
