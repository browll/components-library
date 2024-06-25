import type { Preview } from '@storybook/react'
import * as React from 'react'

import '../lib/styles'
import '../lib/styles/global.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
