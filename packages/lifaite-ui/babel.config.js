module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['nativewind/babel', { tailwindConfig: './src/tailwind.config.ts' }],
  ],
};
