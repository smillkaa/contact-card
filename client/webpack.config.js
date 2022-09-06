const webpack = require("webpack")
const path = require("path")

module.exports = {
    mode: "development",
    entry: "./src/js/script.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    }
  
}