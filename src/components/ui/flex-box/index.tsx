import clsx from "clsx";
import { Props } from "./type";

const FlexBox = ({ children, className, onClick }: Props) => {
    return (
        <div
            className={clsx(
                "w-full flex flex-row items-center justify-start gap-2",
                className
            )}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default FlexBox;
