import { Outlet } from "react-router-dom";
import { SideBar } from "../components/functional";
import { useState } from "react";
import MobileMenu from "../components/functional/side-bar/MobileMenu";

const Main = () => {
    const [bigger, setBigger] = useState(false);
    const openSideBar = () => setBigger(true);

    const closeSideBar = () => setBigger(false);

    return (
        <div className="bg-cs-white-100 flex h-screen md:bg-[inherit]">
            <MobileMenu
                bigger={bigger}
                openSideBar={openSideBar}
                closeSideBar={closeSideBar}
            />
            <div className="fixed h-full">
                <SideBar
                    bigger={bigger}
                    openSideBar={openSideBar}
                    closeSideBar={closeSideBar}
                />
            </div>
            <div className="flex-1 md:ml-28 flex items-start justify-center">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;
