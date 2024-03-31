import { useNavigate } from "react-router-dom";
import { Button, Text } from "../../components/ui";

const NotFound = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <div className="h-screen w-screen flex items-center flex-col justify-center">
            <Text text={"Сраница не найдена"} className="!text-5xl" />
            <Button
                title={"Назад"}
                onClick={goBack}
                className="!w-[300px] h-[61px] text-xl font-bold bg-cs-vivid-blue-300 text-cs-white rounded-[10px] mt-8"
            />
        </div>
    );
};

export default NotFound;
