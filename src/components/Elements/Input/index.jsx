import Label from "./Label"
import Input from "./Input"
import { forwardRef } from "react";

const inputForm = forwardRef((props, ref) => {
    const {htmlfor, name, label, classname, type, placeholder } = props;
    return (
        <div className="mb-6">
            <Label htmlfor={htmlfor}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} ref={ref} classname={classname}/>
        </div>
    )
});

export default inputForm;