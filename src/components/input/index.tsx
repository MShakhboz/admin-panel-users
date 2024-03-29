import { Props } from "./type";

const Input = ({ id, name, value, onChange, type, placeholder }: Props) => {
    return (
        <input
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            className="border rounded-[15px] w-full max-w-[404px] p-[17.5px] border-cs-gray-350 text-cs-black-500 outline-none placeholder:text-cs-gray-400"
        />
    );
};

export default Input;
