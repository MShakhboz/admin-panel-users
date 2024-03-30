import { Props } from "./type";

const Container = ({ children }: Props) => {
    return (
        <div className="h-screen w-full md:mx-auto md:h-max md:w-[80%] md:mt-16">
            {children}
        </div>
    );
};

export default Container;
