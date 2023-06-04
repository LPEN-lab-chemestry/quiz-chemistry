import React from 'react'

import styles from './startPage.module.css'
import Logo from '../../components/logo/Logo'
import Button from '../../components/button/Button'
import SimpleHeader from '../../components/simpleHeader/SimpleHeader'

import { useNavigate } from 'react-router-dom'

const StartPage = () => {

    const navigate = useNavigate();
    const handleRegister = () => {
        navigate("/register");
    }

    return (
        <div className={styles['start-page-container']}>
            <div className={styles['start-page-panel']}>
                <SimpleHeader labelButton='Sobre' urlButton='/about' themeButton="orange">QUIZ DE QUÍMICA</SimpleHeader>

                <div className={styles['start-container-cases']}>
                <div className={styles['start-page-logo-area']}>
                    <Logo size='large'/>
                </div>
                <div className={styles['start-page-button-area']}>
                    <Button opacity='none' size='large' padding='small' theme='green' radius='small' fontSize='medium'>Começar agora</Button>
                    <Button opacity='none' size='large' padding='small' theme='orange' radius='small' fontSize='medium' onClick={handleRegister}>Criar uma conta</Button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default StartPage