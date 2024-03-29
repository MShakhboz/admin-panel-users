export type InputDisplayProps = {
    value?: string[];
    onClick: () => void;
    placeholder?: string;
};

export type MenuProps = {
    options: { label: string; value: string }[];
    dropdownClasses: string;
    handleChange: (val: string) => void;
    value?: string[];
};

export type TagProps = {
    item?: string;
};
