import type { StorybookConfig } from '@storybook/react-vite'
import react from "@vitejs/plugin-react"

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../lib/styles'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  typescript: {
    reactDocgen: false,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite')
    if (configType === 'PRODUCTION') {
      // do something
    }

    return mergeConfig(config, {
      copyPublicDir: false,
      plugins: [react],
      build: {
        outDir: 'dist',
        lib: {
          entry: '../src/index.ts',
          formats: ['esm'],
        },
      },
    })
  },
}
export default config
