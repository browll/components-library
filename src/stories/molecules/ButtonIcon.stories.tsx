import { ButtonIcon } from '../../components/molecules/ButtonIcon'
import * as React from 'react'

export default {
  title: 'Molecules/ButtonIcon',
  component: ButtonIcon,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
  },
}

export const Default = () => (
  <ButtonIcon type="primary" icon="angleDown">
    Primary
  </ButtonIcon>
)
