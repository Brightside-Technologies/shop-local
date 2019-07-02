const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");

module.exports = {
    optimization: { minimize: false },
    plugins: [
        new webpack.DefinePlugin({ "global.GENTLY": false }),
        new Dotenv()
    ],
    node: {
        __dirname: true
    }
};
