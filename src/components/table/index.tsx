import clsx from "clsx";
import { Props } from "./type";

const Table = ({ data, RowComponent, className }: Props) => {
    return (
        <div className={clsx("w-full min-h-max", className)}>
            <div className="w-full">
                {data &&
                    data.map((item, index) => (
                        <RowComponent key={`table-${index}`} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default Table;
