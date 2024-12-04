const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                    },
                },
            },
            {
                test: /\.(png|svg|avif|mp4|jpg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/media/[name][hash][ext]',
                },
            },
            {
                test: /\.(ttf)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/fonts/[name][hash][ext]'
                }
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            // favicon: path.resolve(__dirname, './src/assets/favicon.ico')     
        }),
    ],
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        clean: true
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
        compress: true,
        open: false,
        historyApiFallback: true,
        setupMiddlewares: (middlewares, devServer) => {
            devServer.app.use((req, res, next) => {
                const timeString = (new Date()).toTimeString().split(' ')[0]
                const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress
                const methodUsed = req.method
                // console.log(`[${timeString}] Request made to: ${req.url}`) 
                console.log(`[${timeString}] ${clientIp}//${methodUsed} -- ${req.url}`) 
                next()
            })
            return middlewares;
        },
        host: '0.0.0.0',
        allowedHosts: 'all',
    },
}