import React, {useContext, useState} from "react";
import Axios from "axios";

export const AuthContext = React.createContext(undefined)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider( {children} ) {

    const [user, setUser] = useState(null)
    const role = undefined

    function logIn(username, password) {
        const requestURL = process.env.REACT_APP_MAIN_HOST + '/users/login';

        const credentials = {
            username: username,
            password: password
        }

        Axios.post(requestURL, credentials)
            .then(res => {
                console.log(res)
                if (res.data.valid) {
                    console.log('you are in')
                    auth.setUser(credentials.username)
                    auth.role = res.data.role
                } else {
                    console.log('Wrong credential')
                }
            });
    }

    const auth = {
        user,
        setUser,
        role,
        logIn
    }

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}
