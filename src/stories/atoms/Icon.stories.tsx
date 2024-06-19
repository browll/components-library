import { Icon } from '../../components/atoms/Icon'
import * as React from 'react'

export default {
  title: 'Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
  },
}

export const AngleDown = () => <Icon id="1" name="angleDown" />
