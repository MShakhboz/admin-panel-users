import { CSSProperties } from "react";

export type Props = {
    width?: string;
    height?: string;
    fill?: string;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
};
