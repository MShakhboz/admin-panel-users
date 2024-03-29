import { ChangeEvent } from "react";

export type Props = {
    id?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    value?: string | number | readonly string[] | undefined;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};
