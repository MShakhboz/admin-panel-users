import clsx from "clsx";
import { Props } from "./type";

const Title = ({ title, className }: Props) => {
    return (
        <h1
            className={clsx(
                "text-[26px] font-medium leading-[44px] text-cs-black-500",
                className
            )}
        >
            {title}
        </h1>
    );
};

export default Title;
