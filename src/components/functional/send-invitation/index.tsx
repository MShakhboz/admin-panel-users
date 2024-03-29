import { Controller, useForm } from "react-hook-form";
import { Button, FlexBox, Input, Title } from "../..";
import Dropdown from "../../drop-down";
import Modal from "../../modal";
import { CrossIcon } from "../../svgs";
import { Props } from "./type";
import { OPTIONS_PERMISSIONS } from "./constant";
import { useAppDispatch } from "../../../store/hooks";
import { addUser } from "../../../store/slices/usersSlice";

const SendInvitation = ({ isOpen, onClose }: Props) => {
    const dispatch = useAppDispatch();
    const { handleSubmit, control, reset } = useForm({});

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (data: any) => {
        dispatch(addUser(data));
        reset();
        onClose();
    };

    const handleClose = () => {
        reset();
        onClose();
    };

    return (
        <Modal isOpen={isOpen} className={" pb-7"}>
            <FlexBox className="justify-end">
                <FlexBox
                    className="!w-[40px] h-[40px] justify-center bg-cs-gray-200 rounded-[15px] cursor-pointer"
                    onClick={handleClose}
                >
                    <CrossIcon />
                </FlexBox>
            </FlexBox>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FlexBox className="flex-col justify-center">
                    <Title
                        title="Отправьте приглашение"
                        className="font-extrabold text-3xl"
                    />

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

                    <Controller
                        name={"permissions"}
                        control={control}
                        rules={{ required: "Permissions is required" }}
                        render={({ field }) => (
                            <Dropdown
                                placeholder={"Выберите права доступа"}
                                options={OPTIONS_PERMISSIONS}
                                {...field}
                            />
                        )}
                    />

                    <Button
                        type={"submit"}
                        title={"Отправить приглашение"}
                        onClick={() => {}}
                        className="max-w-[404px] h-[61px]"
                    />
                </FlexBox>
            </form>
        </Modal>
    );
};

export default SendInvitation;
