import { createContext ,useContext, useState, useEffect  } from "react";
import {signinRequest, verifyTokenRequest} from '../api/auth'
import Cookies from 'js-cookie'


export const AuthContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("No auth context");
    }
    return context
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null)
    const [loginErrors, setLoginErrors] = useState([])
    const [isAuthenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)

    
    const signin = async (user) => {
        try {
            const res = await signinRequest(user);
            setAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            setLoginErrors(error.response.data);
        }
    }

    useEffect(()=>{
        if(loginErrors.length > 0) {
            const timer = setTimeout(() => {
                setLoginErrors([])
            }, 2000);
            return () => { clearTimeout(timer);}
        }
    },[loginErrors])

    useEffect(()=>{
        async function checkLogin(){
            const cookies = Cookies.get()

            if(!cookies.token){
                setAuthenticated(false)
                setUser(null)
                return
            }

            try {
                const res = await verifyTokenRequest(cookies.token)
                if(!res.data){
                    setAuthenticated(false)
                    setLoading(false)
                    return
                } 
                setAuthenticated(true)
                setUser(res.data)
                } catch (error) {
                    setAuthenticated(false)
                    setUser(null)
                    setLoading(false)
                }
            }
        checkLogin()
    },[])


    return (
        <AuthContext.Provider value={
            {signin,
            user,
            isAuthenticated,
            loginErrors,
            loading
            }}>
            {children}
        </AuthContext.Provider>
    )
}