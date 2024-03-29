import { UserType } from "../../../store/slices/usersSlice";

export type Props = {
    close: () => void;
    data?: { user: UserType };
};

export type SendInvFormProps = {
    email: string;
    permissions: string[];
};
