
// module.exports = {
//   plugins: [require.resolve("prettier-plugin-astro")],
//   overrides: [
//     {
//       files: "*.astro",
//       options: {
//         parser: "astro",
//       },
//     },
//   ],
//   bracketSameLine: false,
//   singleAttributePerLine: true,
//   // documentSelectors: ["**/*.astro"],
//   // "[astro]": {
//   //   "editor.defaultFormatter": "esbenp.prettier-vscode"
//   // }
// };


/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
