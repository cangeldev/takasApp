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
          'pages': './src/pages',
          'assets': './src/assets',
          'navigation': './src/navigation'
        },
      },
    ],
  ],
};