// const { theme } = require('@oneuppdev/lifaite-ui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/features/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    '../../packages/lifaite-ui/src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
