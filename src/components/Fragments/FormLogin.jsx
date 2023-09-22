import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef, useState } from "react";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState('') 
  const handleLogin = (e) => {
    e.preventDefault();
    // localStorage.setItem("email", e.target.email.value);
    // localStorage.setItem("password", e.target.password.value);
    
    const data = {
      username: e.target.username.value,
      password: e.target.password.value
    }
    //panggil post data login pada service
    //fetching data login user
    login(data, (status, response) => {
      if(status){
        localStorage.setItem("token", response.token)
        window.location.href = "/product"
      }else{
        setLoginFailed(response.response.data)
        console.log(response.response.data);
      }
    })
  };

  //cursor auto focus pada input email
  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus()
  }, [])
  return (
    <form onSubmit={handleLogin}>
      
      <InputForm
        label="Username"
        classname="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-100"
        name="username"
        type="text"
        placeholder="jhonkenedy12"
        ref={usernameRef}
      />
      <InputForm
        label="Password"
        classname="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-100"
        name="password"
        type="password"
        placeholder="*****"
      />
      <Button classname="bg-blue-600 w-full" type="submit">
        Sign In
      </Button>
      {loginFailed && <p className="text-red-500 text-center mt-5">{loginFailed}</p>}
    </form>
  );
};

export default FormLogin;
