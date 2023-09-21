import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  const { type, name, classname, placeholder } = props;
  return (
    <input
      name={name}
      type={type}
      className={classname}
      placeholder={placeholder}
      id={name}
      ref={ref}
    />
  );
});
export default Input;

// tex-sm border rounded w-full py-2 px-3 text-slate-700 placeholder: opacity-50
