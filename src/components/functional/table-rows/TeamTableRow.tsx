import { UserType } from "../../../store/slices/usersSlice";
import Image from "../../image";

type Props = {
    item: UserType;
};

const TeamTableRow = ({ item }: Props) => {
    return (
        <div className="w-full flex p-7">
            <div>
                <Image src={item?.image} alt={item.name} />
            </div>
            {/* <div>{item?.}</div>
            <div>{item?.smth}</div> */}
        </div>
    );
};

export default TeamTableRow;
