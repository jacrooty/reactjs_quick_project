//import html webpack plugin
const HtmlWebPackPlugin = require("html-webpack-plugin");

// create HtmlWebPackPlugin plugin passing attributes
const htmlPlugin = new HtmlWebPackPlugin ({
  //look for the html file then...
  template: "./src/index.html",
  //minified html generated in the dist folder
  filename: "./index.html"
});


module.exports = {
   module: {
     rules: [
       {
         //resolve filetype js use appropriate loader to translate it
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
           loader: 'babel-loader'
         }
       },
       {
         //resolve filetype use appropriate loader to parse it
         test: /\.css$/,
         //load css-loader first then style loader in loader array
         use: ["style-loader", "css-loader"]
       }
     ]
   },
   plugins: [htmlPlugin]
};
