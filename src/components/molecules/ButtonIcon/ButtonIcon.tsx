/* eslint-disable no-unused-vars */

import { Button } from '../../atoms/Button'
import { Icon } from '../../atoms/Icon'
import { iconsMap } from '../../atoms/Icon/constants'

export interface IconProps {
  children?: React.ReactNode
  type?: 'primary' | 'secondary' | 'tertiary'
  icon?: keyof typeof iconsMap
  onClick?: (e: any) => void
}

const ButtonIcon = ({
  type = 'secondary',
  icon,
  onClick,
  children,
}: IconProps) => {
  return (
    <Button onClick={onClick} type={type}>
      {children}
      <Icon size="xs" name={icon} />
    </Button>
  )
}

export default ButtonIcon
