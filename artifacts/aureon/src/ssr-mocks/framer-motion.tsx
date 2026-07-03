/**
 * SSR-safe framer-motion stub.
 *
 * framer-motion calls useSyncExternalStore (for useReducedMotion, animation
 * context, etc.) without providing getServerSnapshot, which throws in React 19
 * server rendering. This stub replaces every motion.X with a plain HTML element
 * and AnimatePresence with a transparent passthrough — safe for renderToString.
 *
 * Only imported during the Vite SSR build (aliased in prerender.mjs build call).
 * The real framer-motion is used in the browser bundle.
 */

import { createElement, forwardRef, Fragment } from "react";
import type { ReactNode } from "react";

type AnyProps = Record<string, unknown>;

const MOTION_FILTER = new Set([
  "initial",
  "animate",
  "exit",
  "transition",
  "variants",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView",
  "layout",
  "layoutId",
  "drag",
  "dragConstraints",
  "dragElastic",
  "dragMomentum",
  "onAnimationComplete",
  "onAnimationStart",
  "onHoverStart",
  "onHoverEnd",
  "onDragStart",
  "onDragEnd",
  "viewport",
  "custom",
  "transformTemplate",
  "style",
]);

function makeMotionComponent(tag: string) {
  const MotionEl = forwardRef<Element, AnyProps>((props, ref) => {
    const filtered: AnyProps = {};
    for (const key of Object.keys(props)) {
      if (key === "style") {
        filtered[key] = props[key];
      } else if (!MOTION_FILTER.has(key)) {
        filtered[key] = props[key];
      }
    }
    if (ref) filtered["ref"] = ref;
    return createElement(tag, filtered);
  });
  MotionEl.displayName = `motion.${tag}`;
  return MotionEl;
}

const HTML_TAGS = [
  "a","article","aside","blockquote","button","circle","details",
  "div","dl","dt","fieldset","figcaption","figure","footer","form",
  "h1","h2","h3","h4","h5","h6","header","hr","img","input","label",
  "li","main","nav","ol","p","path","rect","section","select","span",
  "strong","summary","svg","table","tbody","td","textarea","th","thead",
  "tr","ul",
];

type MotionProxy = Record<string, ReturnType<typeof makeMotionComponent>>;

export const motion: MotionProxy = HTML_TAGS.reduce<MotionProxy>((acc, tag) => {
  acc[tag] = makeMotionComponent(tag);
  return acc;
}, {});

export function AnimatePresence({ children }: { children?: ReactNode }) {
  return createElement(Fragment, null, children);
}

export function useAnimation() {
  return { start: () => Promise.resolve(), stop: () => {}, set: () => {} };
}

export function useMotionValue(initial: unknown) {
  return { get: () => initial, set: () => {}, onChange: () => () => {} };
}

export function useReducedMotion() {
  return false;
}

export function useInView() {
  return false;
}

export function useScroll() {
  return { scrollY: { get: () => 0 }, scrollYProgress: { get: () => 0 } };
}

export function useTransform() {
  return { get: () => 0 };
}

export function useCycle<T>(initial: T): [T, () => void] {
  return [initial, () => {}];
}

export type Variants = Record<string, unknown>;
export type Transition = Record<string, unknown>;
export type MotionValue<T = unknown> = { get: () => T };
