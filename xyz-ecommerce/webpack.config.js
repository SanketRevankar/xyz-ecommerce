var path = require('path');

module.exports = {
    entry: './src/main/resources/static/js/cart/src/index.tsx',
    devtool: 'sourcemaps',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'ts-loader',
                    options: {}
                }]
            }
        ]
    },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
};