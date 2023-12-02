const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const PROJECT_DIRECTORY = __dirname;
const WORKSPACE_ROOT = path.resolve(PROJECT_DIRECTORY, '../..');

const config = getDefaultConfig(PROJECT_DIRECTORY, { isCSSEnabled: true });

config.watchFolders = [WORKSPACE_ROOT];

config.resolver.nodeModulesPaths = [
  path.resolve(PROJECT_DIRECTORY, 'node_modules'),
  path.resolve(WORKSPACE_ROOT, 'node_modules'),
];

config.resolver.disableHierarchicalLookup = true;

module.exports = withNativeWind(config, { input: './global.css' });
