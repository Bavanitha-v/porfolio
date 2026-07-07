// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig as lovableDefineConfig } from "@lovable.dev/vite-tanstack-config";

const baseConfigFn = lovableDefineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});

function filterPlugin(plugins: any): any {
  if (!plugins) return plugins;
  if (Array.isArray(plugins)) {
    return plugins
      .map(filterPlugin)
      .filter((p) => p !== null && p !== undefined && (!Array.isArray(p) || p.length > 0));
  }
  const name = typeof plugins === "object" && "name" in plugins ? plugins.name : "";
  if (name === "vite-tsconfig-paths") {
    return null;
  }
  return plugins;
}

export default async (env: any) => {
  const config = await baseConfigFn(env);

  // Enable native tsconfig paths resolution in Vite 8+
  config.resolve = {
    ...config.resolve,
    tsconfigPaths: true,
  };

  // Filter out the vite-tsconfig-paths plugin loaded by lovable config wrapper
  if (config.plugins) {
    config.plugins = filterPlugin(config.plugins);
  }

  return config;
};


