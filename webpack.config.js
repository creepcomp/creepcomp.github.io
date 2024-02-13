module.exports = {
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff2|jpeg|png)/,
                type: 'asset/resource'
            }
        ]
    },
    output: {
        path: __dirname + "/docs"
    }
}
