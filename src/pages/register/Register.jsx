import React from 'react'

import SimpleHeader from '../../components/simpleHeader/SimpleHeader'

import styles from './register.module.css'
import Input from '../../components/formComponents/input/Input'
import Label from '../../components/formComponents/label/Label'

const Register = () => {

    return (
        <div className={styles['register-container']}>
            <SimpleHeader labelButton='Voltar' urlButton='/' themeButton="orange">NOVA CONTA</SimpleHeader>
            <div className={styles['register-form-container']}>
                <Label>Nome</Label>
                <Input theme='white' radius='small' size='small' fontSize={'large'} margin='medium'/>
            </div>
        </div>
    )
}

export default Register