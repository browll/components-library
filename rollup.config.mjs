import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import { fileURLToPath } from 'node:url'
import copy from 'rollup-plugin-copy'
// import styles from './src/styles/tokens.module.css'
const externalId = fileURLToPath(
  new URL('src/styles/tokens.module.css', import.meta.url),
)

console.log('>>>' + import.meta.url)

import packageJson from './package.json' assert { type: 'json' }

export default [
  {
    input: 'src/index.ts',
    external: ['./src/styles/tokens.module.css'],
    output: [
      {
        footer: '/* follow me on Twitter! @rich_harris */',
        file: packageJson.main,
        format: 'cjs',
        globals: {
          globalCSS: externalId,
        },
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
            src: './src/styles/tokens.module.css',
            dest: 'dist/cjs',
          },
          {
            src: './src/styles/tokens.module.css',
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
