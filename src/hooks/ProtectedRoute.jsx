import { Navigate, Outlet } from "react-router-dom"
import {UserAuth} from "../context/AuthContext"
export const ProtectedRoute = ({children, accessBy}) => {
        const {user} = UserAuth();
        if(accessBy === "non-authenticated"){
                if(!user){
                        return children;
                }else{
                        return <Navigate to="/"/>;
                }
        }else if(accessBy==="authenticated"){
                if(user){
                        return children;
                }

        }
    return <Navigate to="/login"/>
};