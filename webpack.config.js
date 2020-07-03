const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    mode: "development",
    entry: {
        app: "./src/scripts/app.jsx",
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /(node_modules|bower_components)/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.m?jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                        plugins:[ "@babel/plugin-proposal-class-properties"]
                    }
                },
            },
        ]
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "src/dist"),
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "axios": "axios",
    }
};