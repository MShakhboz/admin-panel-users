import clsx from "clsx";
import { SearchIcon } from "../svgs";
import { Props } from "./type";

const SearchInput = ({ placeholder, className, onChange }: Props) => {
    return (
        <div className={clsx("w-full", className)}>
            <div className="flex">
                <input
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}
                    className="w-full px-3 py-[5px] border bg-transparent border-gray-300 text-cs-black-500 font-normal rounded-[10px] outline-none focus:border-cs-green-400 transition-all duration-300 ease-in-out"
                />
                <SearchIcon className="ml-[-25px] mt-2" />
            </div>
        </div>
    );
};

export default SearchInput;
