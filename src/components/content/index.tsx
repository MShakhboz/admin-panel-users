import { Props } from "./type";

const Content = ({ children }: Props) => {
    return (
        <div className="w-full min-h-max p-7 rounded-2xl bg-cs-white-100">
            {children}
        </div>
    );
};

export default Content;
