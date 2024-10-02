module.exports = {
  // Lint & Prettier TS and JS files
  '*.{ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' ')}`,
    `pnpm run lint --fix . ${filenames.join(' --file')}`,
  ]
}
