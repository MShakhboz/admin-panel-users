import { Props } from "./type";

const Table = ({ data, RowComponent }: Props) => {
    return (
        <div className="w-full min-h-max">
            <div className="w-full">
                {data &&
                    data.map((item, index) => (
                        <RowComponent key={index} item={item} />
                    ))}
            </div>
        </div>
    );
};

export default Table;
