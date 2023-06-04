import React from 'react'

import styles from './loremipsum.module.css'

const Loremipsum = ({tag, color, fontSize, ...props}) => {

    const classNames = {
        tag: {tag},
        color: styles[`loremipsum-color--${color}`],
        font: styles[`loremipsum-font-size--${fontSize}`]
    }

    return (
        <div className={Object.values(classNames).join(' ')}>
            <div>
                <tag>{props.children}</tag>
            </div>
        </div>
    )
}

export default Loremipsum