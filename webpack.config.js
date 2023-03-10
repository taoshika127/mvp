// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const SOU_DIR = path.join(__dirname, './src');
const DIS_DIR = path.join(__dirname, './dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = 'style-loader';



const config = {
    entry: `${SOU_DIR}/index.jsx`,
    output: {
        filename: "main.js",
        path: DIS_DIR,
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: './dist/index.html',
    //     }),

    //     // Add your plugins here
    //     // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    // ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
                    options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
            },
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';


    } else {
        config.mode = 'development';
    }
    return config;
};
