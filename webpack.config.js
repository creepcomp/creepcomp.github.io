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
                test: /\.json$/,
                type: 'javascript/auto',
                use: 'json-loader',
            },
            {
                test: /\.(woff2|jpg|png)/,
                type: 'asset/resource'
            },
        ]
    },
    output: {
        path: __dirname + "/docs"
    }
}
