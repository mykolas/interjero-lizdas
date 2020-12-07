const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const {TsconfigPathsPlugin} = require("tsconfig-paths-webpack-plugin")
const RelayCompilerWebpackPlugin = require("relay-compiler-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin");

const webpackConfig = async (env, argv) => {
    
    const config = {
        entry: "./src/index.tsx",
        resolve: {
            extensions: [".ts", ".tsx", ".js"],
            plugins: [new TsconfigPathsPlugin()]
        },
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "[name].bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.s?[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader"
                    ]
                },
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true
                    },
                    exclude: /dist/
                },
                {
                    test: /\.tsx?$/,
                    exclude: path.join(__dirname, "node_modules"),
                    use: [{loader: "babel-loader"}]
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [{from: "./public/_redirects", to: path.join(__dirname, "/dist")}]
            }),
            new RelayCompilerWebpackPlugin({
                schema: path.resolve(__dirname, "./graphql/schema.graphql"), // or schema.json
                src: "./src",
                extensions: ["js", "jsx", "ts", "tsx"],
                artifactDirectory: "./src/__generated__"
            }),
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new webpack.DefinePlugin({
                "process.env.PRODUCTION": env.production || !env.development,
                "process.env.NAME": JSON.stringify(require("./package.json").name),
                "process.env.VERSION": JSON.stringify(require("./package.json").version)
            }),
            new ForkTsCheckerWebpackPlugin({
                eslint: {
                    files: "./src/**/*.{ts,tsx,js,jsx}" // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
                }
            })
        ],
        devServer: {
            historyApiFallback: true
        }
    }


    if (argv.mode === "production") {
        config.mode = "production";
        config.optimization = {
            splitChunks: {
                chunks: "all"
            },
            minimize: true,
            usedExports: true,
            minimizer: [
                new TerserPlugin()
            ]
        };
    }

    return config;
}


exports.default = webpackConfig
