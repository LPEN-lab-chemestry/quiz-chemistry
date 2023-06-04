import React from 'react'

import styles from './label.module.css'

const Label = ({fontSize, theme, margin, ...props}) => {

    const classNames = {
        label: styles.label,
        fontSize: styles[`input-font-size--${fontSize}`],
        theme: styles[`input-theme--${theme}`],
        margin: styles[`input-margin--${margin}`]
    }

  return (
    <label className={Object.values(classNames).join(' ')}>
        {props.children}
    </label>
  )
}

export default Label