import clsx from "clsx";
import { Tooltip, FlexBox } from "../../ui";
import { UserType, deleteUser } from "../../../store/slices/usersSlice";
import Image from "../../ui/image";
import { ThreeDots } from "../../ui/svgs";
import Text from "../../ui/text";
import { useAppDispatch } from "../../../store/hooks";
import { useModals } from "../../../layouts/Modal";

type Props = {
    item: UserType;
};

const Content = ({ user }: { user: Props["item"] }) => {
    const dispatch = useAppDispatch();
    const { push } = useModals();

    const onDelete = async () => {
        dispatch(deleteUser(user.email));
        push("SUCCESS_RM_MODAL", {});
    };

    // console.log("user", user);

    const onEdit = () => {
        push("SEND_INVITE_MODAL", { user });
    };

    const sendAgain = () => {
        push("INVITE_SENT_MODAL", { email: user.email });
    };

    return (
        <FlexBox className="flex-col !items-start">
            <button className="text-lg hover:text-cs-gray-400" onClick={onEdit}>
                Изменить права доступа
            </button>
            <button
                className="text-lg hover:text-cs-gray-400"
                onClick={sendAgain}
            >
                Отправить код повторно
            </button>
            <button
                className="text-lg hover:text-cs-gray-400"
                onClick={onDelete}
            >
                Удалить
            </button>
        </FlexBox>
    );
};

const TeamTableRow = ({ item }: Props) => {
    return (
        <>
            <FlexBox className="px-6 py-5 !items-start cursor-pointer hover:bg-cs-gray-300 transition-all">
                <div className="mr-2">
                    <Image
                        src={item?.image ? item?.image : ""}
                        alt={item?.name ? item?.name : "Пользователь"}
                    />
                </div>
                <div className="mt-1 flex-1">
                    <FlexBox className="gap-3 flex-wrap">
                        <Text
                            text={item?.name ? item.name : "Пользователь"}
                            className="text-lg font-semibold leading-5"
                        />
                        {!item?.name && (
                            <Text
                                text={"Не авторизирован"}
                                className="text-lg font-semibold leading-5 text-cs-gray-400"
                            />
                        )}
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

                <Tooltip content={<Content user={item} />} key={item?.email}>
                    <button className="p-0 m-0 border-solid">
                        <ThreeDots />
                    </button>
                </Tooltip>
            </FlexBox>
        </>
    );
};

export default TeamTableRow;
