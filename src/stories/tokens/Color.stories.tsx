import { Token } from '../../../lib/components/tokens'
import type { Meta, StoryObj } from '@storybook/react'
import { choices } from '../../../lib/tokens'
import { toKebabCase } from '../../utils/strings.util'
import * as React from 'react'

const Metacolor: Meta<typeof Token.Color> = {
  title: 'Tokens/Color',
  component: Token.Color,
  tags: ['stable', 'autodocs'],
  argTypes: {},
}

const buildColor = (colorKey: string) => {
  const entries = Object.entries(choices.color[colorKey])
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {entries.map(([key, value]) => (
        <Token.Color
          key={key}
          label={`var(--color-${colorKey}-${toKebabCase(key)})`}
          value={value}
        ></Token.Color>
      ))}
    </div>
  )
}

export default Metacolor

type Story = StoryObj<typeof Token.Color>

export const Colors: Story = {
  render: () => (
    <>
      {Object.entries(choices.color)
        .filter(([key]) => key !== 'brand')
        .map(([key]) => {
          return (
            <div
              key={key}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                paddingBottom: '5rem',
              }}
            >
              <h2>{key.toUpperCase()}</h2>
              {buildColor(key)}
            </div>
          )
        })}
    </>
  ),
}
