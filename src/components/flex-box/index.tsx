import clsx from "clsx";
import { Props } from "./type";

const FlexBox = ({ children, className }: Props) => {
    return (
        <div
            className={clsx(
                "w-full flex flex-row items-center justify-start gap-2",
                className
            )}
        >
            {children}
        </div>
    );
};

export default FlexBox;
