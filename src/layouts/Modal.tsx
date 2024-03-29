import { ReactElement, createContext, useContext, useState } from "react";
import { Modal } from "../components";
import {
    InviteSentModal,
    SendInvitation,
    SuccessRmModal,
} from "../components/functional";

/* List Modals */
const ModalsList: Record<string, unknown> = {
    SUCCESS_RM_MODAL: SuccessRmModal,
    SEND_INVITE_MODAL: SendInvitation,
    INVITE_SENT_MODAL: InviteSentModal,
};

type initialStateProps = {
    push: (componentType: string, data: unknown) => void;
};

const initialState: initialStateProps = {
    push: (_componentType: string, _data: unknown) => {},
};

export const ModalContext = createContext(initialState);

export const useModals = () => {
    const modal = useContext(ModalContext);
    return modal;
};

const uid = (() => {
    let i = 0;
    return () => `${i++}`;
})();

type Modal = {
    id: string;
    type: string;
    data: unknown;
    settings: {
        open: boolean;
        close: () => void;
    };
};

const ModalProvider = ({ children }: { children: ReactElement }) => {
    const [modals, setModals] = useState<Modal[]>([]);

    const push = (componentType: string, data: unknown) => {
        const store = [...modals];
        const id = uid();

        store.push({
            id: id,
            type: componentType,
            data: data,
            settings: {
                open: true,
                close: () => close(id),
            },
        });
        setModals(store);
    };

    const close = (id: string) => {
        setModals((state) =>
            state.filter((item: Modal) => item?.id !== id.toString())
        );
    };

    const renderModals = () => {
        if (modals.length == 0) {
            return null;
        }

        return modals.map((modal: Modal) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Component: any = ModalsList?.[modal.type];
            return (
                <Modal>
                    <Component
                        data={modal.data}
                        close={() => close(modal.id)}
                    />
                </Modal>
            );
        });
    };

    return (
        <ModalContext.Provider value={{ push }}>
            {renderModals()}
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
