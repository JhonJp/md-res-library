import { terser } from 'rollup-plugin-terser';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss'
import images from '@rollup/plugin-image'
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import tsPlugin from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
// import typescript from 'rollup-plugin-typescript2';

export default [
    {
        input: './index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
                exports: 'named',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                presets: ['@babel/preset-react', '@babel/preset-env','@babel/preset-flow']
            }),
            tsPlugin(),
            resolve(),
            images(),
            postcss({
                plugins: [autoprefixer()],
                sourceMap: true,
                extract: true,
                minimize: true
            }),
            scss({
                includePaths: [/src/, /node_modules/]
            }),
            commonjs({ include: /node_modules/ }),
            external(),
            terser(),
        ],
        external: ['react', 'react-dom', 'prop-types'],
    }
]