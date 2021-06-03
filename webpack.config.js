const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const {TsconfigPathsPlugin} = require("tsconfig-paths-webpack-plugin")
const {fetchData} = require("./fetch-data")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

const webpackConfig = async (env, argv) => {
    const config = {
        entry: "./src/index.tsx",
        resolve: {
            alias: {
                react: "preact/compat",
                "react-dom": "preact/compat"
            },
            extensions: [".ts", ".tsx", ".js"],
            plugins: [new TsconfigPathsPlugin()]
        },
        output: {
            path: path.join(__dirname, "/dist"),
            filename: "main.bundle.js"
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
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {from: "./public/_redirects", to: path.join(__dirname, "/dist")},
                    {from: "./public/robots.txt", to: path.join(__dirname, "/dist")},
                    {from: "./public/sitemap.xml", to: path.join(__dirname, "/dist")}
                ]
            }),
            new HtmlWebpackPlugin({
                template: "./public/index.html",
                siteData: JSON.stringify(await fetchData())
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
            // new BundleAnalyzerPlugin()
        ],
        devServer: {
            historyApiFallback: true
        }
    }

    return config
}

exports.default = webpackConfig
