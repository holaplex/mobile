module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@type': './src/type',
          '@enum': './src/enum',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@graphql': './src/graphql',
          '@screens': './src/screens',
          '@context': './src/context',
          '@constants': './src/constants',
          '@navigator': './src/navigator',
          '@configure': './src/configure',
          '@components': './src/components',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: 'react-native-dotenv',
        path: '.env',
        blacklist: null,
        whitelist: ['API_URL'],
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
