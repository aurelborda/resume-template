/** @type {import("prettier").Config} */
export default {
  useTabs: false,
  tabWidth: 2,
  endOfLine: 'lf',
  printWidth: 80,
  proseWrap: 'preserve',
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        trailingComma: 'es5',
        semi: false,
        singleQuote: true,
      },
    },
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.js', '*.mjs', '*.cjs'],
      options: {
        parser: 'typescript',
        trailingComma: 'es5',
        semi: false,
        singleQuote: true,
      },
    },
    {
      files: '*.json',
      options: {
        parser: 'json',
      },
    },
  ],
}
