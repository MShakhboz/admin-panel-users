import { useCallback, useState } from "react";

const useModal = () => {
    const [isModalOpened, setIsModalOpened] = useState<boolean>(false);

    const openModal = useCallback(() => {
        setIsModalOpened(true);
    }, []);

    const hideModal = useCallback(() => {
        setIsModalOpened(false);
    }, []);

    return { openModal, hideModal, isModalOpened };
};

export default useModal;
