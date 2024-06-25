import { Token } from '../../../lib/components/tokens'
import type { Meta, StoryObj } from '@storybook/react'
import { choices } from '../../../lib/tokens'
import { toKebabCase } from '../../utils/strings.util'
import * as React from 'react'

const MetaFontSize: Meta<typeof Token.FontSize> = {
  title: 'Tokens/FontSize',
  component: Token.FontSize,
  tags: ['stable', 'autodocs'],
  argTypes: {},
}

const buildFontSize = () => {
  const entries = Object.entries(choices.fontSize)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {entries.map(([key, value]) => (
        <Token.FontSize
          key={key}
          label={`var(--font-size-${toKebabCase(key)})`}
          value={value}
        >
          Woodland lasted crowned holiday pirate brother wrath.
        </Token.FontSize>
      ))}
    </div>
  )
}

export default MetaFontSize

type Story = StoryObj<typeof Token.FontSize>

export const FontSize: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        paddingBottom: '5rem',
      }}
    >
      {buildFontSize()}
    </div>
  ),
}
