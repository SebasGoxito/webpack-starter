const HtmlWebPack = require('html-webpack-plugin');
const MiniCssExtrac = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
   mode: 'development',

   output: {
      clean: true,
   },

   module: {
      rules: [
         {
            test: /\.html$/,
            loader: 'html-loader',
            options: {
               sources: false,
            },
         },
         {
            test: /\.css$/,
            exclude: /styles.css$/,
            use: ['style-loader', 'css-loader'],
         },
         {
            test: /styles.css$/,
            use: [MiniCssExtrac.loader, 'css-loader'],
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
         },
      ],
   },
   plugins: [
      new HtmlWebPack({
         title: 'Mi webpack app',
         // filename: 'index.html',
         template: './src/index.html',
      }),
      new MiniCssExtrac({
         filename: '[name].css',
         ignoreOrder: false,
      }),

      new CopyPlugin({
         patterns: [{ from: 'src/assets/', to: 'assets/' }],
      }),
   ],
};
