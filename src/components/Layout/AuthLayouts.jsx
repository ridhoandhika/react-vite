// import FormLogin from "../Fragments/FormLogin";
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500">
          Welcome, please enter your detail
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login" ? "Dont have an account?" : "Have an account?"}

          {type === "login" && (
            <Link to="/register" className="font-bold text-blue-600">
              Sign up
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="font-bold text-blue-600">
              Sign in
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
