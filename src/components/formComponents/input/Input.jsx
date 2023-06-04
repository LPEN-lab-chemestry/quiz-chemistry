import React from 'react'

import styles from './input.module.css'

const Input = ({ type, placeholder, onChange, value, theme, size, margin, radius, fontSize}) => {

    const classNames = {
        input: styles.input,
        theme: styles[`input-theme--${theme}`],
        size: styles[`input-size--${size}`],
        margin: styles[`input-margin--${margin}`],
        radius: styles[`input-radius--${radius}`],
        fontSize: styles[`input-font-size--${fontSize}`]
    }

    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                onChange={(e) => { onChange && onChange(e.target.value) }}
                value={value}
                className={Object.values(classNames).join(' ')}
            />
        </>
    )
}

export default Input