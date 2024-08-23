import { BuildOptions } from "config/types/types";

export function buildBabelLoader(options:BuildOptions){
    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
                '@babel/preset-env',
                "@babel/preset-typescript",
                ["@babel/preset-react", {"runtime": "automatic"}]
            ]
          }
        }
    }
}