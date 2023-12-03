const { theme } = require('./src/theme/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx.ts.tsx}'],
  theme: {
    ...theme,
  },
};
