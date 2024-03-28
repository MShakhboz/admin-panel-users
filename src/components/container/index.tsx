import { Props } from "./type";

const Container = ({ children }: Props) => {
    return <div className="w-[80%] mx-auto my-0">{children}</div>;
};

export default Container;
