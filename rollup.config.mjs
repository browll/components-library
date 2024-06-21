import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import copy from 'rollup-plugin-copy'
import packageJson from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
      },
      {
        file: packageJson.module,
        format: 'esm',
      },
    ],
    plugins: [
      copy({
        targets: [
          {
            src: './src/styles/tokens.css',
            dest: 'dist/cjs',
          },
          {
            src: './src/styles/tokens.css',
            dest: 'dist/esm',
          },
          {
            src: './src/styles/main.css',
            dest: 'dist/cjs',
          },
          {
            src: './src/styles/main.css',
            dest: 'dist/esm',
          },
        ],
      }),
      postcss({
        modules: true,
        minimize: true,
        extensions: ['.css'],
        extract: 'style.css',
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
  },
]
