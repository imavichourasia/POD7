const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: "http://localhost:1901/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 1901,
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
      name: "RegisterComponent",
      filename: "remoteEntry.js",
      remotes: {

        ButtonComponent: "ButtonComponent@http://localhost:1802/remoteEntry.js",
        UserComponent: "UserComponent@http://localhost:1903/remoteEntry.js",
        NameComponent: "NameComponent@http://localhost:1906/remoteEntry.js",
        StateComponent: "StateComponent@http://localhost:1907/remoteEntry.js",
        EmailComponent: "EmailComponent@http://localhost:1908/remoteEntry.js",
        PasswordComponent: "PasswordComponent@http://localhost:1904/remoteEntry.js",
        ConfirmPasswordComponent: "ConfirmPasswordComponent@http://localhost:1905/remoteEntry.js",
        Login: "Login@http://localhost:1303/remoteEntry.js",
        POD7: "POD7@http://localhost:1111/remoteEntry.js",
        Droplist: "Droplist@http://localhost:7098/remoteEntry.js",
        SearchBox: "SearchBox@http://localhost:1305/remoteEntry.js",




        



      },
      exposes: {
        "./RegisterComponent": "./src/RegisterComponent.jsx",
        "./AuthProvider": "./src/authcontext/AuthProvider.jsx",
        "./useAuth" : "./src/hooks/useAuth.jsx",
        "./EmployeeService" : "./src/services/EmployeeService.jsx"

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
