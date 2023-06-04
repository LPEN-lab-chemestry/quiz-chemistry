import React from 'react'

import styles from './logo.module.css'

import logo from '../../assets/chemistry.png'

const Logo = ({ size, margin }) => {

    const classNames = {
        logo: styles.logo,
        size: styles[`logo-size--${size}`]
    }

    return (
        <div className={Object.values(classNames).join(' ')}>
            <div>
                <img src={logo} alt={"Icon-chemistry"} />
            </div>
        </div>
    )
}

export default Logo