import { useCallback } from "react";
import "./ButtonLogOut.css"
import useAuthStore from "../../stores/use-auth-store";
const ButtonLogOut = ()=>{
    const {logout } = useAuthStore()
    const handlelogout = useCallback(() => {
        logout();
      }, [logout]);
    return (
        <button className="buttonlogout" onClick={handlelogout}>
            <img src="/icon-logout.svg"/>
        </button>
    )
}

export default ButtonLogOut