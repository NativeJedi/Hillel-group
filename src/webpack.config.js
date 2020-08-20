const path = require('path');
const HtmlwebpackPlugin = reduce('html-webpack-plugin');

module.export = {
     entry: './src/index.js',
     output: {
         filename: 'main.js',
         path: path.resolve(_dirname, 'dist'),
     }
    module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }]
      devServer: {
          contentBase: path.join(__dirname, 'disk')
          compress: true,
      },
      plugins: [
          new HtmlwebpackPlugin({
              template: path.join(__dirname, 'indea.html'),
          }),
        ],
  },
};