import { merge } from 'webpack-merge';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import baseConfig from './rollup.config.base';

const config = merge(baseConfig, {
    output: {
        file: './lib/index.js',
        format: 'umd',
        name: 'Test'
    },
    plugins: [
        serve({
            open: true,
            openPage: '/examples/index.html',
            port: 9999
        }),
        livereload()
    ]
});

export default config;
