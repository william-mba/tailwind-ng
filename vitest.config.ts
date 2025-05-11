/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    reporters: ['default', 'junit'],
    outputFile: 'reports/junit.xml',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'cobertura'],
    },
  },
})
