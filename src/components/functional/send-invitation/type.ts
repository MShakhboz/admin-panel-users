export type Props = {
    isOpen: boolean;
    close: () => void;
};

export type SendInvFormProps = {
    email: string;
    permissions: string[];
};
