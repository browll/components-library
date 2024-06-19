/* eslint-disable no-unused-vars */

import createHandlerClick from '../../../utils/createHandlerClicks.util'
import './Button.css'
import clasNames from 'classnames'

export interface ButtonProps {
  children: React.ReactNode
  type?: "primary" | 'secondary' | 'tertiary'
  onClick?: (e: any) => void,
  isBlock?: boolean
}

const Button = ({ children, onClick, type = 'primary', isBlock = true }: ButtonProps) => {
  return (
    <button
      className={clasNames('button', {
        [`type-${type}`]: type,
        'is-block': isBlock && type !== 'tertiary',
      })}
      onClick={onClick && createHandlerClick({ onClick })}
    >
      {children}
    </button>
  )
}

export default Button
