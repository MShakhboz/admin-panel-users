// import { useEffect, useRef } from "react";
import { MenuProps } from "./type";

const Menu = ({ options, dropdownClasses, handleChange, value }: MenuProps) => {
    return (
        <ul className={dropdownClasses}>
            {options.map((option: { label: string; value: string }) => (
                <li className="flex items-center">
                    <label
                        htmlFor={option?.value}
                        className="inline-flex items-center cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            id={option?.value}
                            value={option?.value}
                            className="hidden peer"
                            checked={value?.includes(option?.value)}
                            onChange={() => handleChange(option?.value)}
                        />
                        <span
                            className={`relative w-4 h-4 border border-gray-400 rounded mr-2 flex items-center justify-center peer-checked:bg-cs-vivid-blue-300 peer-checked:border-cs-vivid-blue-300 after:content-[""] after:w-1 after:h-2 after:absolute after:rotate-45 after:border-r-[1.5px] after:border-b-[1.5px] after:border-white after:bottom-1`}
                        />
                        <span className="select-none text-cs-black-500">
                            {option?.label}
                        </span>
                    </label>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
