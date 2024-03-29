import { Button, FlexBox, Title } from "../..";

const SuccessRmModal = ({ close }: { close: () => void }) => {
    return (
        <FlexBox className="justify-center flex-col px-9 pb-6">
            <Title title="Пользователь успешно удален" />
            <Button
                title={"Закрыть"}
                onClick={close}
                className="!h-[61px] text-xl"
            />
        </FlexBox>
    );
};

export default SuccessRmModal;
