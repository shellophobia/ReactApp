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
      }
    ]
  }
};
