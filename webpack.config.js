const path = require('path');

module.exports = {
    mode: 'production',
    entry: `${path.join(__dirname, 'src/index')}`,
    output: {
        filename: 'code-by-alex-ds.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        usedExports: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css|\.s(c|a)ss$/,
                use: [{
                    loader: 'lit-scss-loader',
                    options: {
                        minify: true, // defaults to false
                    },
                }, 'extract-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
};