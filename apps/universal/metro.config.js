const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const PROJECT_DIRECTORY = __dirname;

const config = getDefaultConfig(PROJECT_DIRECTORY, { isCSSEnabled: true });

module.exports = withNativeWind(config, { input: './global.css' });
