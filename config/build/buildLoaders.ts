import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { ModuleOptions } from "webpack";
import { BuildOptions } from "../types/types";
import { buildBabelLoader } from "config/babel/buildBabelLoader";

export function buildLoaders(options:BuildOptions):ModuleOptions['rules']{
    const {isDev} = options
    return[
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
        },

        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        icon: true,
                        svgoConfig:{
                            plugins:[
                                {
                                    name:'convertColors',
                                    params:{
                                        currentColor: true,
                                    }
                                }
                            ]
                        }
                    }
                    
                }  
            ],
        },

        buildBabelLoader(options),

        // {
        //     test: /\.tsx?$/,
        //     use: [
        //         {
        //             loader: 'ts-loader',
        //             options: {
        //                 transpileOnly:true
        //             },
        //         }
        //     ],
        //     exclude: /node_modules/,
        // },

        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                isDev ? 'style-loader' : MiniCssExtractPlugin.loader ,
                // Translates CSS into CommonJS
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                        }
                    }
                },
                // Compiles Sass to CSS
                "sass-loader",
            ]
        },
    ]
    
}