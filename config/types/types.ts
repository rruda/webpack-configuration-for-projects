export interface BuildPath{
    entry:string;
    html:string;
    output:string;
    src:string;
}

export type BulidMode = 'development' | 'production';
export type BulidPlatform = 'mobile' | 'desktop';

export interface BuildOptions {
    port: number;
    paths: BuildPath;
    mode: BulidMode;
    isDev: boolean;
    platform: BulidPlatform
}