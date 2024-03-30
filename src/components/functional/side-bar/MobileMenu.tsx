import clsx from "clsx";
import { CrossIcon, MenuIcon } from "../../ui/svgs";
import { MenuOpenProps } from "./type";

const MobileMenu = ({ bigger, openSideBar, closeSideBar }: MenuOpenProps) => {
    return (
        <>
            <MenuIcon
                className={clsx(
                    "block absolute top-9 left-5 z-50 md:hidden",
                    bigger && "hidden"
                )}
                onClick={openSideBar}
            />
            <div
                onClick={closeSideBar}
                className={clsx(
                    "block absolute top-9 left-7 z-50 md:hidden",
                    !bigger && "hidden"
                )}
            >
                <CrossIcon fill={"#9494A0"} onClick={closeSideBar} />
            </div>
        </>
    );
};

export default MobileMenu;
