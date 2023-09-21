import InputForm from "../Elements/Input";
import Button from "../Elements/Button";
import { useEffect, useRef } from "react";

const FormLogin = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("email", e.target.email.value);
    localStorage.setItem("password", e.target.password.value);
    window.location.href = "/product"
  };

  //cursor auto focus pada input email
  const emailRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus()
  }, [])
  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        classname="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-100"
        name="email"
        type="text"
        placeholder="example@mail.com"
        ref={emailRef}
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
    </form>
  );
};

export default FormLogin;
