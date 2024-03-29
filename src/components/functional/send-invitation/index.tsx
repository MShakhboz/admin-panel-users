import { FlexBox, Title } from "../..";
import Modal from "../../modal";
import { CrossIcon } from "../../svgs";
import { Props } from "./type";

const SendInvitation = ({ isOpen, onClose }: Props) => {
    return (
        <Modal isOpen={isOpen}>
            <FlexBox className="justify-end">
                <FlexBox
                    className="w-[40px] h-[40px] justify-center bg-cs-gray-200 rounded-[15px] cursor-pointer"
                    onClick={onClose}
                >
                    <CrossIcon />
                </FlexBox>
            </FlexBox>
            <FlexBox className=" justify-center">
                <Title
                    title="Отправьте приглашение"
                    className="font-extrabold text-3xl"
                />
            </FlexBox>
        </Modal>
    );
};

export default SendInvitation;
