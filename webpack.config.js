const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  // __dirname - отвечает за путь к папке
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};