import Label from "./Label"
import Input from "./Input"
const inputForm = (props) => {
    const {htmlfor, name, label, classname, type, placeholder } = props;
    return (
        <div className="mb-6">
            <Label htmlfor={htmlfor}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} classname={classname}/>
        </div>
    )
}

export default inputForm;