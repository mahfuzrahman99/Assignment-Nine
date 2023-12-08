/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const SecretRout = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()

    if(user){
        return <>{children}</>
    }
    return <Navigate state={location.pathname} to={`/login`}/>
};

export default SecretRout;