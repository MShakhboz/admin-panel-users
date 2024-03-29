import clsx from "clsx";
import { Props } from "./type";

const Content = ({ children, className }: Props) => {
    return (
        <div
            className={clsx(
                "w-full overflow-y-auto max-h-[80vh] min-h-max p-7 rounded-2xl bg-cs-white-100",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Content;
