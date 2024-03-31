import clsx from "clsx";
import { ReactNode } from "react";
import logo from "../../../assets/images/logo.png";
import user from "../../../assets/images/user.png";
import { SIDEBAR_MENU } from "../../../global/constant";
import { FlexBox, Text } from "../../ui";
import {
    AnalyticIcon,
    BannersIcon,
    BlogIcon,
    ChatIcon,
    CrossIcon,
    CurrencyIcon,
    LogoutIcon,
    ModerationIcon,
    TeamIcon,
    UserIcon,
} from "../../ui/svgs";
import { NavLink } from "react-router-dom";
import { MenuOpenProps } from "./type";
// import MobileMenu from "./MobileMenu";

const icons: Record<string, ReactNode> = {
    analytics: <AnalyticIcon />,
    moderation: <ModerationIcon />,
    profile: <UserIcon />,
    chat: <ChatIcon />,
    banners: <BannersIcon />,
    team: <TeamIcon />,
    blog: <BlogIcon />,
    currency: <CurrencyIcon />,
    logout: <LogoutIcon />,
};

const SideBar = ({ bigger, openSideBar, closeSideBar }: MenuOpenProps) => {
    const logOut = ({ id }: { id: string }) => {
        if (id === "logout") {
            console.log("logout");
        }
    };

    return (
        <div>
            <div
                className={clsx(
                    "h-full left-[-100px] absolute bg-cs-white-100 rounded-tr-2xl pl-5 pt-6 flex items-start justify-start z-50 transition-all duration-300 ease-in-out overflow-y-auto md:w-[100px] md:left-0",
                    bigger && "left-[0] w-[250px] md:w-[250px]"
                )}
                onMouseEnter={openSideBar}
                onMouseLeave={closeSideBar}
                onMouseOver={openSideBar}
            >
                <div className="flex flex-col gap-10 items-center justify-center">
                    <div className="w-[23px] h-[34px]">
                        <img
                            src={logo}
                            alt={"company logo"}
                            className="hidden md:block"
                        />
                    </div>
                    <div
                        onClick={closeSideBar}
                        className={clsx(
                            "block absolute top-9 left-7 z-50 md:hidden",
                            !bigger && "hidden"
                        )}
                    >
                        <CrossIcon fill={"#9494A0"} onClick={closeSideBar} />
                    </div>
                    <FlexBox className="!w-[60px] !h-[60px] gap-3">
                        <img src={user} alt={"company logo"} />
                        <FlexBox
                            className={clsx(
                                "flex-col !items-start !gap-0.5 opacity-0 transition-opacity duration-300 ease-in-out",
                                bigger && "opacity-100"
                            )}
                        >
                            <Text
                                text={"Артем Иванов"}
                                className="font-extrabold whitespace-nowrap"
                            />
                            <Text
                                text={"Собственник"}
                                className=" text-sm text-cs-gray-400 whitespace-nowrap"
                            />
                        </FlexBox>
                    </FlexBox>
                    <ul className="inline-flex gap-10 w-full flex-col items-center justify-center">
                        {SIDEBAR_MENU.map(
                            (menu: {
                                title: string;
                                id: string;
                                path: string;
                            }) => (
                                <li
                                    key={menu.id}
                                    className="h-6 flex cursor-pointer "
                                >
                                    <NavLink
                                        to={menu.path}
                                        onClick={() => logOut({ id: menu.id })}
                                        className={"inline-flex relative"}
                                    >
                                        {icons[menu.id]}
                                        <Text
                                            text={menu.title}
                                            className={clsx(
                                                `opacity-0 absolute transition-opacity duration-300 ease-in-out whitespace-nowrap left-10 font-[450] leading-5 top-0.5`,
                                                bigger && "opacity-100",
                                                menu.id === "logout" &&
                                                    "text-cs-pink-400"
                                            )}
                                        />
                                    </NavLink>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
