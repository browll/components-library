import Button from '../../components/atoms/Button'
import * as React from 'react'

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
  },
}

export const Primary = () => <Button> Primary </Button>
export const Secondary = () => <Button type="secondary"> Secondary </Button>
export const Tertiary = () => <Button type="tertiary"> Button Tertiary </Button>
