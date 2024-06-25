import React from 'react'

import Helper from '../Helper'

import styles from '../Token.module.css'

const Color = ({ label, value }: any) => {
  return (
    <Helper label={label} value={value}>
      <div className={styles.color} style={{ backgroundColor: value }}></div>
    </Helper>
  )
}

export default Color
