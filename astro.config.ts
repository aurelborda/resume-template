import type { AstroUserConfig } from 'astro'
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
} satisfies AstroUserConfig)
