import validator from "validator";
import defaultImage from "../../../assets/images/person.png";

import { Props } from "./type";

const Image = ({ alt, src }: Props) => {
    const isValidImg = validator.isURL(src);

    if (!isValidImg) {
        return (
            <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-cs-gray-200">
                <img
                    src={defaultImage}
                    alt={"default avatar"}
                    className="w-[34px] h-[34px] object-cover"
                />
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={
                "w-[64px] h-[64px] object-cover rounded-full bg-cs-gray-200"
            }
        />
    );
};

export default Image;
