import { Props } from "./type";

const Container = ({ children }: Props) => {
    return <div className="w-[80%] mx-auto mt-16">{children}</div>;
};

export default Container;
