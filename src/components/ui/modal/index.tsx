import clsx from "clsx";
import { Props } from "./type";

const Modal = ({ children, className }: Props) => {
    return (
        <div
            className={`fixed min-h-screen inset-0 z-40 bg-cs-gray-300 bg-opacity-50 transition duration-300 ease-in-out top-7`}
        >
            <div className="mx-auto rounded-3xl shadow-md bg-cs-white-100 max-w-[526px]">
                <div className={clsx("p-4", className)}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
