import { useEffect, useRef, useState } from "react";
import InputDisplay from "./InputDisplay";
import Menu from "./Menu";
import { RootProps } from "./type";

const Dropdown = ({ options, onChange, placeholder, value }: RootProps) => {
    const dorpDownRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => setIsOpen(true);

    const handleChange = (option: string) => {
        if (option === "all") {
            if (value && value.length === options.length) {
                onChange([]);
            } else {
                onChange(
                    options.map(
                        (item: { label: string; value: string }) => item.value
                    )
                );
            }
        } else {
            const newSelected: string[] =
                value && value.includes(option)
                    ? value.filter((item: string) => item !== option)
                    : [...(value || []), option];

            onChange(newSelected);
        }
    };

    const dropdownClasses = `absolute ${
        isOpen ? "flex" : "hidden"
    } overflow-y-auto max-h-[249px] flex-col rounded-md shadow-sm w-full bg-white p-4 text-left transition duration-150 ease-in-out gap-4 shadow-[-30px_30px_50px_0px_#1C1C1E1A]`;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dorpDownRef.current &&
                !dorpDownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [setIsOpen]);

    options = [{ label: "Все", value: "all" }, ...options];

    console.log("value", value);

    return (
        <div
            className="inline-block relative w-full max-w-[404px]"
            ref={dorpDownRef}
        >
            <InputDisplay
                value={value}
                onClick={handleOpen}
                placeholder={placeholder}
            />
            {isOpen && (
                <Menu
                    options={options}
                    dropdownClasses={dropdownClasses}
                    handleChange={handleChange}
                    value={value}
                />
            )}
        </div>
    );
};

export default Dropdown;
