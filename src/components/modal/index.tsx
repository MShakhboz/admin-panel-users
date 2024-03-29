import { Props } from "./type";

const backdropClasses = `fixed inset-0 z-40 bg-cs-gray-300 bg-opacity-50 transition duration-300 ease-in-out`;

const Modal = ({ isOpen, children }: Props) => {
    // Hide modal if isOpen is false
    if (!isOpen) return null;

    const modalClasses = `fixed inset-0 z-50 overflow-y-auto px-4 md:p-8 ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
    }`;

    return (
        isOpen && (
            <>
                <div className={backdropClasses} />
                <div className={modalClasses}>
                    <div className="mx-auto rounded-3xl shadow-md bg-white max-w-md">
                        <div className="p-4">{children}</div>
                    </div>
                </div>
            </>
        )
    );
};

export default Modal;
