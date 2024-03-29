import clsx from "clsx";
import { ReactNode, useEffect, useRef, useState } from "react";

const BottomTooltip = ({
    content,
    className,
    children,
    key,
}: {
    content: ReactNode | string | number;
    children: ReactNode;
    className?: string;
    key?: string | number;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                contentRef.current &&
                !contentRef.current.contains(event.target as Node)
            ) {
                handleClose();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [setIsOpen]);

    //

    useEffect(() => {
        const handleResize = () => {
            if (isOpen) {
                setIsOpen(false); // Close tooltip on resize to recalculate position
                setIsOpen(true);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [isOpen]);

    return (
        <>
            <span
                ref={tooltipRef}
                onClick={handleOpen}
                className="cursor-pointer"
            >
                {children}
            </span>
            {isOpen && (
                <div
                    key={key}
                    ref={contentRef}
                    className={clsx(
                        `absolute min-w-[238px] min-h-max transform -translate-y-full -translate-x-1/2 p-5 rounded-md bg-white text-cs-black-500 text-sm shadow-md transition duration-300 ease-in-out`,
                        className
                    )}
                    style={{
                        left: `${tooltipRef.current?.offsetLeft}px`,
                        top: `${tooltipRef.current?.offsetTop}px`,
                    }}
                >
                    {content}
                </div>
            )}
        </>
    );
};

export default BottomTooltip;
