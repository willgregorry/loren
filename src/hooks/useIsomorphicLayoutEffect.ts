import { useEffect, useLayoutEffect } from "react";

/**
 * useIsomorphicLayoutEffect
 * 
 * In Next.js (SSR), useLayoutEffect throws a warning because it cannot run on the server.
 * This hook safely falls back to useEffect on the server and useLayoutEffect on the client,
 * which is a common best practice when building complex UI animations.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
