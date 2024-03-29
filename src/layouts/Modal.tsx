/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
    ReactElement,
    createContext,
    useContext,
    useState,
} from "react";
import { Modal } from "../components";
import { SendInvitation, SuccessRmModal } from "../components/functional";

/* List Modals */
const ModalsList: any = {
    SUCCESS_RM_MODAL: SuccessRmModal,
    SEND_INVITE_MODAL: SendInvitation,
};

type initialStateProps = {
    push: (componentType: string, data: any) => void;
};

const initialState: initialStateProps = {
    push: (componentType: string, data: any) => {},
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
    data: any;
    settings: {
        open: boolean;
        close: () => void;
    };
};

export default function GlobalModal({ children }: { children: ReactElement }) {
    const [modals, setModals] = useState<Modal[]>([]);

    function push(componentType: string, data: any) {
        const store = [...modals];
        const id = uid();

        store.push({
            id: id,
            type: componentType,
            data: data,
            settings: {
                open: true,
                close: () => close(parseInt(id)),
            },
        });
        setModals(store);
    }

    function close(id: number) {
        setModals((state: any) => state.filter((item: any) => item.id != id));
    }

    function renderModals() {
        if (modals.length == 0) {
            return null;
        }

        return modals.map((modal: any) => {
            const Component = ModalsList?.[modal.type];
            return (
                <Modal>
                    <Component
                        data={modal.data}
                        close={() => close(modal.id)}
                    />
                </Modal>
            );
        });
    }

    return (
        <ModalContext.Provider value={{ push }}>
            {renderModals()}
            {children}
        </ModalContext.Provider>
    );
}
