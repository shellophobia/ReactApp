require('webpack');

module.exports = {
  entry: "./src/javascripts/Main.js",
  output: {
    filename: "build/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      
      {
        test: /\.sass$/,
        loader: "style!css!sass?indentedSyntax=true&outputStyle=expanded"
      },
      
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2)(\?.+)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
};
