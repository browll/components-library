import Button from '../../../lib/components/atoms/Button'
import type { Meta, StoryObj } from '@storybook/react'

const options = ['primary', 'secondary', 'tertiary']

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['stable', 'autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
      options: options,
      description: options.join(' | '),
    },
    isBlock: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary',
  },
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Secondary',
  },
}

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    children: 'Tertiary',
  },
}
