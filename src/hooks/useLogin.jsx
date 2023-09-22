import { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

export const useLogin = () => {
    const [username, setUsername] = useState("")
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
          window.location.href = "/login"
        }else{ 
          const data = getUsername(token)
          // console.log(data);
          setUsername(data.user)
        }
      },[])

    return username
}
