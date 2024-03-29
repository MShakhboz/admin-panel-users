export type RootProps = {
    options: MenuProps["options"];
    onChange: (value: string[]) => void;
    placeholder: InputDisplayProps["placeholder"];
    value: InputDisplayProps["value"];
};

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
