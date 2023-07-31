const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:1303/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 1303,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "Login",
      filename: "remoteEntry.js",
      remotes: {
        // SearchPage: "SearchPage@http://localhost:1304/remoteEntry.js",
        RegisterComponent: "RegisterComponent@http://localhost:1901/remoteEntry.js",
        POD7: "POD7@http://localhost:1111/remoteEntry.js",
        Droplist: "Droplist@http://localhost:7098/remoteEntry.js",
        SearchBox: "SearchBox@http://localhost:1305/remoteEntry.js",


      },
        
        
      exposes: {
        "./LoginComponent": "./src/LoginComponent.jsx",
        
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
});
