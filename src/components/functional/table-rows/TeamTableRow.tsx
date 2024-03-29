import clsx from "clsx";
import { FlexBox } from "../..";
import { UserType } from "../../../store/slices/usersSlice";
import Image from "../../image";
import { ThreeDots } from "../../svgs";
import Text from "../../text";

type Props = {
    item: UserType;
};

const TeamTableRow = ({ item }: Props) => {
    const onThreeDotsClick = () => {};
    return (
        <FlexBox className="px-6 py-5 !items-start cursor-pointer hover:bg-cs-gray-300 transition-all">
            <div className="mr-2">
                <Image src={item?.image} alt={item?.name} />
            </div>
            <div className="mt-1 flex-1">
                <FlexBox className="gap-3">
                    <Text
                        text={item?.name}
                        className="text-lg font-semibold leading-5"
                    />
                    <Text
                        className="text-lg font-[450] leading-5 text-cs-gray-400"
                        text={item?.email}
                    />
                </FlexBox>
                <FlexBox className="flex-wrap mt-2">
                    {item?.permissions?.map((permission, index) => (
                        <div
                            key={`permission_${index}`}
                            className={clsx(
                                "py-0.5 px-3 rounded-[10px] border",
                                {
                                    "border-cs-vivid-blue-300":
                                        permission === "Администратор",
                                }
                            )}
                        >
                            <Text
                                className={clsx(
                                    "text-base font-normal leading-5 text-cs-gray-400",
                                    {
                                        "text-cs-vivid-blue-300":
                                            permission === "Администратор",
                                    }
                                )}
                                text={permission}
                            />
                        </div>
                    ))}
                </FlexBox>
            </div>
            <div onClick={onThreeDotsClick} className="cursor-pointer">
                <ThreeDots />
            </div>
        </FlexBox>
    );
};

export default TeamTableRow;
