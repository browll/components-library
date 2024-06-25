import ButtonIcon from '../../../lib/components/molecules/ButtonIcon'
import type { Meta, StoryObj } from '@storybook/react'

const options = ['primary', 'secondary', 'tertiary']

const meta: Meta<typeof ButtonIcon> = {
  title: 'Molecules/ButtonIcon',
  component: ButtonIcon,
  tags: ['stable', 'autodocs'],
  argTypes: {
    type: {
      control: 'inline-radio',
      options: options,
      description: options.join(' | '),
    },
  },
}

export default meta
type Story = StoryObj<typeof ButtonIcon>

export const Primary: Story = {
  args: {
    type: 'primary',
    children: 'Primary',
    icon: 'angleDown',
  },
}

export const Secondary: Story = {
  args: {
    type: 'secondary',
    children: 'Secondary',
    icon: 'angleDown',
  },
}

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    children: 'Tertiary',
    icon: 'angleDown',
  },
}
