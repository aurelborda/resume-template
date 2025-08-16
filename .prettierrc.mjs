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
        trailingComma: 'all',
        semi: false,
        singleQuote: true,
      },
    },
  ],
}
