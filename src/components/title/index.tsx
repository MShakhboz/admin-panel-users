import { Props } from "./type";

const Title = ({ title }: Props) => {
    return (
        <h1 className="text-[26px] font-medium leading-[44px] text-cs-black-500">
            {title}
        </h1>
    );
};

export default Title;
