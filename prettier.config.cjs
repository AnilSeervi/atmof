
/** @type {import('prettier').Options}*/
module.exports = {
  "jsxSingleQuote": true,
  "singleQuote": true,
  "semi": false,
  "plugins": [require("prettier-plugin-tailwindcss")],
  "tailwindConfig": './tailwind.config.js',
  "tailwindFunctions": ['cn', 'cva'],
}
