import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    mode: "development",
    entry: {
        about: "./src/about.js",
        gallery: "./src/gallery.js",
        edits: "./src/edits.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        devMiddleware: {
            writeToDisk: true,
        },
        port: 9000,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: '[name][ext]'  // keeps original filename
                }
            }
        ]
    }
};