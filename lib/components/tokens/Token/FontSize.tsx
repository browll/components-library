import React from 'react'

import Helper from '../Helper'

import styles from '../Token.module.css'

const FontSize = ({ label, value, children }: any) => {
  return (
    <Helper label={label} value={value}>
      <div className={styles['font-size']} style={{ fontSize: value }}>
        {children}
      </div>
    </Helper>
  )
}

export default FontSize
