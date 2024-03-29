export type Props = {
    title: string;
    onClick: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
};
