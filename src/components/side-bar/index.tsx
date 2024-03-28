import clsx from "clsx";
import { useState } from "react";

const SideBar = () => {
    const [bigger, setBigger] = useState(false);
    return (
        <div
            className={clsx(
                "h-full left-[-100px] absolute bg-white rounded-tr-2xl pl-5 pt-6 flex items-start justify-start z-10 transition-all duration-300 ease-in-out overflow-y-auto sm:w-[100px] sm:left-0",
                bigger && "sm:w-[250px]"
            )}
            onMouseEnter={() => setBigger(true)}
            onMouseLeave={() => setBigger(false)}
            onMouseOver={() => setBigger(true)}
        >
            <div className="flex flex-col gap-10 items-center justify-center">
                <div className="w-[23px] h-[34px] border"></div>
                <div className="w-[60px] h-[60px] border rounded-full"></div>
                {[...new Array(20)].map((_, index: number) => (
                    <div key={index} className="border w-6 h-6" />
                ))}
            </div>
        </div>
    );
};

export default SideBar;
