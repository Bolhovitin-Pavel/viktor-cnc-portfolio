module.exports = {
  presets: ['next/babel'],
  plugins: [
    // Setup babel-plugin-react-native-web:
    ['react-native-web', {commonjs: true}],
  ],
};
