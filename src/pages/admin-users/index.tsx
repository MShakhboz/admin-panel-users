import {
    Button,
    Container,
    Content,
    FlexBox,
    SearchInput,
    Table,
    Title,
} from "../../components/ui";

import { TeamTableRow } from "../../components/functional/table-rows";
import { BUTTONS } from "../../global/constant";
import { useModals } from "../../layouts/Modal";

import { useGetUsersQuery } from "../../services/api/usersService";
import { useAppSelector } from "../../store/hooks";

import { PLACEHOLDERS, TITLE } from "./constant";

const AdminUsers = () => {
    useGetUsersQuery({});
    const { push } = useModals();
    const data = useAppSelector((store) => store.users.data);

    return (
        <>
            <Container>
                <Content className={"!p-0 !pb-3"}>
                    {/* header */}
                    <FlexBox className="lg:gap-24 flex-col !items-start px-7 py-5 sticky top-0 border-b border-solid border-cs-gray-300 bg-cs-white-100 md:flex-row md:!items-center">
                        <Title
                            className={"font-extrabold pl-6"}
                            title={TITLE}
                        />
                        <FlexBox className="gap-5 flex-col md:flex-row">
                            <SearchInput
                                placeholder={PLACEHOLDERS.SEARCH}
                                onChange={(value) => console.log(value)}
                            />
                            <Button
                                title={BUTTONS.ADD_USER}
                                onClick={() => push("SEND_INVITE_MODAL", {})}
                                className="sm:max-w-[250px]"
                            />
                        </FlexBox>
                    </FlexBox>

                    {/* section */}
                    <Table data={data} RowComponent={TeamTableRow} />
                </Content>
            </Container>
        </>
    );
};

export default AdminUsers;
