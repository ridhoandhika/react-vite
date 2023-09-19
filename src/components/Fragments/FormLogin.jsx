import InputForm from "../Elements/Input";
import Button from "../Elements/Button"

const FormLogin = () => {
  return (
    <form action="">
      <InputForm
        label="Email"
        classname="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-100"
        name="email"
        type="text"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        classname="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-100"
        name="password"
        type="password"
        placeholder="*****"
      />
      {/* <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-slate-700 text-sm font-bold mb-2"
        >
          Password
        </label>
        <input
          type="password"
          className="tex-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50"
          placeholder="******"
        />
      </div> */}
      <Button classname="bg-blue-600 w-full">Sign In</Button>
    </form>
  );
};

export default FormLogin
