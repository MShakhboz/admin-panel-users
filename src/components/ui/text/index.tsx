import clsx from "clsx";
import { Props } from "./type";

const Text = ({ text, className }: Props) => {
    return (
        <span className={clsx("text-cs-black-500 text-base", className)}>
            {text}
        </span>
    );
};

export default Text;
