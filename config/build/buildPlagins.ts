import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { DefinePlugin } from "webpack";
import { BuildOptions } from "../types/types";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin"
export function buildPlagins({isDev,paths,platform}:BuildOptions):webpack.Configuration['plugins']{
    const plugins:webpack.Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new DefinePlugin({
            PLATFORM:platform
        }),
    ]
    if(isDev){
        plugins.push(
            new webpack.ProgressPlugin(),
            new ForkTsCheckerWebpackPlugin()
        )
    }else{
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        )
        plugins.push(
            new BundleAnalyzerPlugin()
        )
    }
    return plugins
}