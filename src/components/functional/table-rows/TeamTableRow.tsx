type Props = {
    item: { name?: string; nickname?: string; smth?: string };
};

const TeamTableRow = ({ item }: Props) => {
    return (
        <tr>
            <td>{item?.name}</td>
            <td>{item?.nickname}</td>
            <td>{item?.smth}</td>
        </tr>
    );
};

export default TeamTableRow;
