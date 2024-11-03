import { Navigate } from "react-router-dom";
import useAuthStore from "../stores/use-auth-store";

const PublicRoute=({children})=>{
    const{user}=useAuthStore()
    if (user){
        return <Navigate to="/home"/>
    }
    return children;
}

export default PublicRoute;