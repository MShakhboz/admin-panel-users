import clsx from "clsx";
import { ReactNode, useEffect, useRef, useState } from "react";

const BottomTooltip = ({
    content,
    className,
    children,
}: {
    content: ReactNode | string | number;
    children: ReactNode;
    className?: string;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const handleOpen = () => {
        setIsOpen(true);
        positionTooltip();
    };
    const handleClose = () => setIsOpen(false);

    const positionTooltip = () => {
        if (tooltipRef.current && contentRef.current) {
            const viewport = {
                width: window.innerWidth,
                height: window.innerHeight,
            };

            const tooltipSize = contentRef.current.getBoundingClientRect();
            const triggerPosition = tooltipRef.current.getBoundingClientRect();

            // Check for horizontal overflow
            let left = triggerPosition.left;
            if (left + tooltipSize.width > viewport.width) {
                left = viewport.width - tooltipSize.width;
            }

            let top = triggerPosition.bottom + 5;
            if (top + tooltipSize.height > viewport.height) {
                top = triggerPosition.top - tooltipSize.height - 5;
            }

            contentRef.current.style.left = `${left}px`;
            contentRef.current.style.top = `${top}px`;
        }
    };

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

    useEffect(() => {
        const handleResize = () => {
            if (isOpen) {
                positionTooltip();
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleResize);
        };
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
                    ref={contentRef}
                    className={clsx(
                        `absolute min-w-[238px] min-h-max transform -translate-x-2 p-5 rounded-md bg-white text-cs-black-500 text-sm shadow-md transition duration-300 ease-in-out`,
                        className
                    )}
                >
                    {content}
                </div>
            )}
        </>
    );
};

export default BottomTooltip;
