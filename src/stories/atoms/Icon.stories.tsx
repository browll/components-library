import Icon from '../../../lib/components/atoms/Icon'
import type { Meta, StoryObj } from '@storybook/react'

const options = ['xs', 'sm', 'md', 'lg', 'xl']

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['stable', 'autodocs'],
  argTypes: {
    size: {
      control: 'inline-radio',
      options: options,
      description: options.join(' | '),
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

export const AngleDown: Story = {
  args: {
    name: 'angleDown',
  },
}
