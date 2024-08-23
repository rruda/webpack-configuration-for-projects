import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildOptions, BulidMode, BulidPlatform } from './config/types/types';

interface IEnv{
    mode: BulidMode;
    port: number;
    platform: BulidPlatform;
}
export default (env:IEnv) => {
    const BuildOptions:BuildOptions = {
        port:env.port ?? 8080,
        mode:env.mode ?? 'development',
        platform:env.platform ?? 'desktop',
        paths:{
            entry:path.resolve(__dirname,'src', 'index.tsx'),
            html:path.resolve(__dirname,'public', 'index.html'),
            output:path.resolve(__dirname,'build'),
            src:path.resolve(__dirname,'src'),
        },
        isDev:env.mode == 'development'
    }

    const config:webpack.Configuration = buildWebpack(BuildOptions);

    return config
};