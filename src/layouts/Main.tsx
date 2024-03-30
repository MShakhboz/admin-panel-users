import { Outlet } from "react-router-dom";
import { SideBar } from "../components/functional";

const Main = () => {
    return (
        <div className="flex h-screen">
            <div className="fixed h-full">
                <SideBar />
            </div>
            <div className="flex-1 md:ml-28 flex items-start justify-center">
                <Outlet />
            </div>
        </div>
    );
};

export default Main;
