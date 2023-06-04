import React from 'react'

import styles from './button.module.css';

const Button = ({size, padding, theme, radius, fontSize, onClick, opacity, ...props}) => {

    const classNames = {
        button: styles.button,
        opacity: styles[`button-opacity--${opacity}`],
        size: styles[`button-size--${size}`],
        padding: styles[`button-padding--${padding}`],
        radius: styles[`button-radius--${radius}`],
        theme: styles[`button-theme--${theme}`],
        font: styles[`button-font-size--${fontSize}`]
    }

  return (
    <button onClick={()=> onClick()} className={Object.values(classNames).join(' ')}>
        {props.children}
    </button>
  )
}


export default Button