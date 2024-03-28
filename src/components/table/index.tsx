import { Props } from "./type";

const Table = ({ data, RowComponent }: Props) => {
    return (
        <table>
            <tbody>
                {data &&
                    data.map((item, index) => (
                        <RowComponent key={index} item={item} />
                    ))}
            </tbody>
        </table>
    );
};

export default Table;
