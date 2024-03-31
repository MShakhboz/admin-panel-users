import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, Dropdown, FlexBox, Input, Title } from "../../ui";
import { CrossIcon } from "../../../components/ui/svgs";
import { Props, SendInvFormProps } from "./type";
import { OPTIONS_PERMISSIONS } from "./constant";
import { useAppDispatch } from "../../../store/hooks";
import { addUser, editUser } from "../../../store/slices/usersSlice";
import { useModals } from "../../../layouts/Modal";
import { useEffect } from "react";
import { SIDEBAR_MENU } from "../../../global/constant";

const SendInvitation = ({ close, data: userData }: Props) => {
    const dispatch = useAppDispatch();
    const { push } = useModals();

    const user = userData?.user;

    const { handleSubmit, control, reset } = useForm<SendInvFormProps>({});

    const onSubmit: SubmitHandler<SendInvFormProps> = (data) => {
        if (user) {
            dispatch(editUser(data));
        } else {
            push("INVITE_SENT_MODAL", { email: data?.email });
            dispatch(addUser(data));
        }
        reset();
        close();
    };

    const handleClose = () => {
        reset();
        close();
    };

    const permOptions = [
        ...OPTIONS_PERMISSIONS,
        ...SIDEBAR_MENU.map((item) => ({
            value: item.title,
            label: item?.title,
        })),
    ].sort((a, b) => a.value.localeCompare(b.value));

    useEffect(() => {
        if (user) {
            const email = user?.email;
            const permissions = user?.permissions;
            reset({ email, permissions });
        }
    }, [reset, user]);

    return (
        <>
            <FlexBox className="justify-end">
                <FlexBox
                    className="!w-[40px] h-[40px] justify-center bg-cs-gray-200 rounded-[15px] cursor-pointer"
                    onClick={handleClose}
                >
                    <CrossIcon />
                </FlexBox>
            </FlexBox>
            <form onSubmit={handleSubmit(onSubmit)} className="mb-7">
                <FlexBox className="flex-col justify-center">
                    <Title
                        title={
                            user
                                ? "Изменить права доступа"
                                : "Отправьте приглашение"
                        }
                        className="font-extrabold text-3xl"
                    />

                    {!user && (
                        <Controller
                            name={"email"}
                            control={control}
                            rules={{ required: "Email is required" }}
                            render={({ field }) => (
                                <Input
                                    placeholder={"Email"}
                                    type={"email"}
                                    {...field}
                                />
                            )}
                        />
                    )}

                    <Controller
                        name={"permissions"}
                        control={control}
                        rules={{ required: "Permissions is required" }}
                        render={({ field }) => (
                            <Dropdown
                                placeholder={"Выберите права доступа"}
                                options={permOptions}
                                {...field}
                            />
                        )}
                    />

                    <Button
                        type={"submit"}
                        title={user ? "Изменить" : "Отправить приглашение"}
                        onClick={() => {}}
                        className="max-w-[404px] h-[61px]"
                    />
                </FlexBox>
            </form>
        </>
    );
};

export default SendInvitation;
