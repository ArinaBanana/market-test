const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: "development",
    entry: "./source/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build"),
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(vue)$/,
                exclude: /node_modules/,
                use: {
                    loader: "vue-loader",
                },
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
