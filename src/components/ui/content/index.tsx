import clsx from "clsx";
import { Props } from "./type";

const Content = ({ children, className }: Props) => {
    return (
        <div
            className={clsx(
                "w-full h-full overflow-y-auto md:max-h-[80vh] min-h-max p-7 md:rounded-2xl bg-cs-white-100 ",
                className
            )}
            id={"content"}
        >
            {children}
        </div>
    );
};

export default Content;
