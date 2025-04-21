module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          // Alias tanımları
          'components': './src/components',
          'container': './src/container',
          'screens': './src/screens',
          'assets': './src/assets',
          'navigation': './src/navigation',
          'utils': './src/utils',
          'localization': './src/localization',
          'store': './src/store',
          'hooks': './src/hooks',
          'theme': './src/theme'
        },
      },
    ],
  ],
};