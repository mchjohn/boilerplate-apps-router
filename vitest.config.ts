import react from '@vitejs/plugin-react';
import {
  coverageConfigDefaults,
  defaultExclude,
  defineConfig,
} from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
    exclude: ['**/*.config.*', ...defaultExclude],
    coverage: {
      exclude: ['**/*.config.*', ...coverageConfigDefaults.exclude],
    },
  },
});
