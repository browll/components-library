/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */

import clasNames from 'classnames'
import * as React from 'react'

export interface HeadingProps {
  children: React.ReactNode
  type?: 'primary' | 'secondary' | 'tertiary'
  onClick?: (e: any) => void
}

const Heading = ({ children, type = 'primary' }: HeadingProps) => {
  return (
    <button
      className={clasNames('button', {
        [`type-${type}`]: type,
      })}
    >
      {children}
    </button>
  )
}

export default Heading
