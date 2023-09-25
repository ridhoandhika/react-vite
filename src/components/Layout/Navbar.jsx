import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/Darkmode";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0)
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)
  const cart = useSelector((state) => state.cart.data)

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
        return acc + item.qty;
    }, 0)
    setTotalCart(sum)
  }, [cart])
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {username}
      <Button classname="ml-5 bg-black" onClick={handleLogout}>
        Logout
      </Button>
      
      {/* <button className="bg-black px-2 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
          
        </button> */}
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        <div className="">{totalCart}</div>
      </div>
      <Button classname="bg-black px-2 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
