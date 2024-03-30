import { ChangeEvent } from "react";

export type Props = {
    placeholder?: string;
    className?: string;
    onChange: (value: ChangeEvent<HTMLInputElement>) => void;
};
