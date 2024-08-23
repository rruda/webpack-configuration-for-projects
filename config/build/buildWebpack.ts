import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlagins } from './buildPlagins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from '../types/types';
export function buildWebpack(options:BuildOptions):webpack.Configuration{
    const {mode,paths} = options;
    const isDev = (mode =='development');
    return{
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.output,
            clean: true,
        },
        plugins:buildPlagins(options),
        module: {
            rules:buildLoaders(options),
        },
        resolve:buildResolvers(options),
        // devtool:'inline-source-map', //хз почему оно так много весит в бандле, но я решил его убрать
        devServer: buildDevServer(options),
    }
}