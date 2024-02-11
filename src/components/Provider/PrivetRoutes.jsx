import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivetRoutes = ({children}) => {
    const location = useLocation();

    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div className="text-center"> <span className="loading text-primary loading-ring loading-lg"></span></div>
    }

    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRoutes;