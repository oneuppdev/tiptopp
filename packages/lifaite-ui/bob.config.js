const config = {
  source: 'src',
  output: 'dist',
  targets: [
    ['commonjs', { configFile: true }],
    ['module', { configFile: true }],
    ['typescript', { project: 'tsconfig.json' }],
  ],
};

module.exports = config;
