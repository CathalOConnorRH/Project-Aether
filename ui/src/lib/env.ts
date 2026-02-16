/**
 * Runtime + build-time environment configuration.
 *
 * Resolution order for API_URL:
 *   1. window.__ENV__?.API_URL  (injected at runtime by nginx/docker)
 *   2. import.meta.env.VITE_API_URL  (Vite build-time .env)
 *   3. "/api"  (safe default for proxied dev server)
 */
export const env = {
  API_URL:
    (typeof window !== "undefined" && window.__ENV__?.API_URL) ||
    import.meta.env.VITE_API_URL ||
    "/api",
} as const;
