import { merge } from 'webpack-merge';
import baseConfig from './rollup.config.base';
import pkg from './package.json';

const config = merge(baseConfig, {
    output: {
        file: './lib/index.js',
        format: 'cjs',
        exports: 'default'
    },
    // 当format: cjs | es的时候，声明@babel/runtime系列包为external, 采用import 引入corejs提供的helper函数
    external: Object.keys(pkg.dependencies).map(item => new RegExp(item)) // 不打包指定的依赖包， 可以使用String | String[] |  RegExp | (id) => boolean
});

export default config;
