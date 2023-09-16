import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

export const useAuthContext = () => {
    const auth = useContext(AuthContext);
    if (!auth) {
        console.log("Usuário não está logado!");
    }
    return auth;
}