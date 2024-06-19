/* eslint-disable no-unused-vars */

import createHandlerClick from '../../../utils/createHandlerClicks.util'
import './Heading.css'
import clasNames from 'classnames'

export interface HeadingProps {
  children: React.ReactNode
  type?: 'primary' | 'secondary' | 'tertiary'
  onClick?: (e: any) => void
}

const Heading = ({ children, onClick, type = 'primary' }: HeadingProps) => {
  return (
    <button
      className={clasNames('button', {
        [`type-${type}`]: type,
      })}
      onClick={onClick && createHandlerClick({ onClick })}
    >
      {children}
    </button>
  )
}

export default Heading
