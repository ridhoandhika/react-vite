import InputForm from "../Elements/Input";
import Button from "../Elements/Button"

const FormRegister = () => {
  return (
    <form action="">
        <InputForm
        label="Fullname"
        classname="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-100"
        name="fullname"
        type="text"
        placeholder="Jhonny Iskandar"
      />
      <InputForm
        label="Email"
        classname="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-100"
        name="email"
        type="email"
        placeholder="example@mail.com"
      />
      <InputForm
        label="Password"
        classname="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-100"
        name="password"
        type="password"
        placeholder="*****"
      />
      <InputForm
        label="Confirm Password"
        classname="text-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-100"
        name="confirmPassword"
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
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister
