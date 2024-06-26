import { Button, FlexBox, Title } from "../../ui";

const InviteSentModal = ({
    close,
    data,
}: {
    close: () => void;
    data: { email: string };
}) => {
    return (
        <FlexBox className="justify-center flex-col px-9 pb-6">
            <Title
                title={`Приглашение отправлено на почту ${data?.email}`}
                className="text-center"
            />
            <Button
                title={"Закрыть"}
                onClick={close}
                className="!h-[61px] text-xl"
            />
        </FlexBox>
    );
};

export default InviteSentModal;
