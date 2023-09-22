import Button from "../components/Elements/Button";
import { useLogin } from "../hooks/useLogin";
// import { useEffect, useState } from "react";
//set value variable dari hooks login


const ProfilePage = () => {
    const username = useLogin()  
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      };

      
    return (
        <>
        <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
            {username}
            <Button classname="ml-5 bg-black" onClick={handleLogout}>
            Logout
            </Button>
        </div>
        </>
    )
}

export default ProfilePage