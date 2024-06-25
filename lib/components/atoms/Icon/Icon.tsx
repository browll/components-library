/* eslint-disable no-unused-vars */

import { iconsMap, mapSize, iconSize } from './constants'
import './Icon.css'
import * as React from 'react'

export interface IconProps {
  id?: string
  name?: keyof typeof iconsMap
  size?: keyof typeof iconSize
  onClick?: (e: any) => void
}

const Icon = ({ id, size = 'md', name }: IconProps) => {
  const icon = name ? iconsMap[name] : ({} as any)
  const mappedSize = mapSize(size)

  return (
    <div id={id} style={{ width: mappedSize, height: mappedSize }}>
      <svg
        viewBox={icon.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        width={mappedSize}
        height={mappedSize}
      >
        {icon.svg}
      </svg>
    </div>
  )
}

export default Icon
