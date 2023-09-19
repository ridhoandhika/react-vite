import { Link } from "react-router-dom";
import FormRegister from "../components/Fragments/FormRegister";
import AuthLayout from "../components/Layout/AuthLayouts";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister />
      {/* <p className="text-sm mt-5 text-center">
        have an account?
        <Link to="/login" className="font-bold text-blue-600">
          Sign in
        </Link>
      </p> */}
    </AuthLayout>
  );
};

export default RegisterPage;
