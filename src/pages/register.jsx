import FormRegister from "../components/Fragments/FormRegister"
import AuthLayout from "../components/Layout/AuthLayouts"

const RegisterPage = () => {
    return (
        <AuthLayout title="Register">
            <FormRegister/>
        </AuthLayout>
    )
}

export default RegisterPage