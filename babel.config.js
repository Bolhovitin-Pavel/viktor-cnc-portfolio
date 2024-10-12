module.exports = {
  presets: ['next/babel'],
  plugins: [
    // babel-plugin-react-native-web setup:
    ['react-native-web', {commonjs: true}],
  ],
};
