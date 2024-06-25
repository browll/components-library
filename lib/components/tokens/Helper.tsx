import React from 'react'

export interface HelperProps {
  label: string
  value: string | number | Array<string | number>
  children: React.ReactNode
}

import styles from './Token.module.css'

const Helper = ({ label, value, children }: HelperProps) => {
  return (
    <div className={styles.container}>
      {children}
      <div className={styles.description}>
        <span className={styles.label}>{label}</span>
        <span className={styles.label}>
          {Array.isArray(value) ? value.join(', ') : value}
        </span>
      </div>
    </div>
  )
}

export default Helper
