import clsx from "clsx";
import { Props } from "./type";

const Button = ({ title, onClick, className, type }: Props) => {
    return (
        <button
            type={type}
            className={clsx(
                `bg-cs-green-400 text-white text-lg font-[450] leading-5 text-center rounded-[10px] w-full py-2 active:bg-opacity-70 transition-all duration-300 ease-in-out`,
                className
            )}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;
