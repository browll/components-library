/* eslint-disable no-unused-vars */

import styles from './Button.module.css'
import clasNames from 'classnames'
import * as React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  type?: 'primary' | 'secondary' | 'tertiary'
  onClick?: (e: any) => void
  isBlock?: boolean
}

const Button = ({
  children,
  type = 'primary',
  isBlock = true,
}: ButtonProps) => {
  return (
    <button
      className={clasNames(styles.button, {
        [styles[`type-${type}`]]: type,
        [styles['is-block']]: isBlock && type !== 'tertiary',
      })}
    >
      {children}
    </button>
  )
}

export default Button
