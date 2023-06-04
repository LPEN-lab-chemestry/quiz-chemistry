import React from 'react'

import styles from './simpleHeader.module.css'
import Button from '../button/Button'

import { useNavigate } from "react-router-dom";

const SimpleHeader = ({labelButton, urlButton, themeButton, ...props}) => {

    const navigate = useNavigate();
    const handleAbout = () => {
        navigate(urlButton);
    }

    return (
        <div className={styles['simple-header-container']}>
            <h1 className={styles['simple-header-title']}>{props.children}</h1>
            <div className={styles['simple-header-button-area']}>
                <Button
                    size='small'
                    padding='small'
                    theme={themeButton}
                    radius='small'
                    fontSize='medium'
                    opacity='none'
                    onClick={handleAbout}
                >
                    {labelButton}
                </Button>
            </div>
        </div>
    )
}

export default SimpleHeader