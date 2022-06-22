// const path = require('path')

// module.exports = {
//     output: {
//         path: path.join(__dirname, '/dist'),
//         filename: 'index.bundle.js',
//     },
//     target: "web",
//     devServer: {
//         port: 3010,
//         compress: true,
//         historyApiFallback: true,
//         open: true,
//         hot: true,
//         liveReload: true
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             },
//             {
//                 test: /\.scss$/,
//                 use: [
//                     'style-loader',
//                     'css-loader',
//                     'sass-loader'
//                 ],
//             }
//         ]
//     }
// }