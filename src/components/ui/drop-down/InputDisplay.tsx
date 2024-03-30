import { InputDisplayProps, TagProps } from "./type";

const Tag = ({ item }: TagProps) => {
    return (
        <div className="flex items-center rounded-full border px-2 py-0.5">
            <span className="text-cs-white">{item}</span>
        </div>
    );
};

const InputDisplay = ({ value, onClick, placeholder }: InputDisplayProps) => {
    console.log("value", value);
    return (
        <div
            onClick={onClick}
            className="w-full border flex flex-wrap gap-1 rounded-[15px] min-h-[61px] border-cs-gray-350 p-[17.5px] text-left focus:outline-none text-cs-black-500"
        >
            {value ? (
                value?.map((item) =>
                    item === "all" ? null : <Tag item={item} />
                )
            ) : (
                <span className="text-cs-gray-400">{placeholder}</span>
            )}
        </div>
    );
};

export default InputDisplay;
