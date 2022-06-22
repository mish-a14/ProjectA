const path = require('path')

module.exports = {
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index.bundle.js',
    },
    target: "web",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    }
}