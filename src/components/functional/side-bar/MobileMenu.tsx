import clsx from "clsx";
import { MenuIcon } from "../../ui/svgs";
import { MenuOpenProps } from "./type";
import { useEffect, useState } from "react";

const MobileMenu = ({ bigger, openSideBar }: MenuOpenProps) => {
    const [isMenuIconVisible, setIsMenuIconVisible] = useState(true);

    useEffect(() => {
        const content = document?.getElementById(
            "content"
        ) as HTMLDivElement | null;

        const handleScroll = () => {
            const scrollTop = content?.scrollTop || 0;
            setIsMenuIconVisible(scrollTop < 20);
        };

        content?.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <MenuIcon
            className={clsx(
                `block absolute z-50 md:hidden top-9 left-5`,
                (bigger || !isMenuIconVisible) && "hidden"
            )}
            onClick={openSideBar}
        />
    );
};

export default MobileMenu;
