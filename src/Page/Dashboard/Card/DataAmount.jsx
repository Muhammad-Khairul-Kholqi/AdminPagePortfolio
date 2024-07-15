import { Link } from "react-router-dom";

import { LiaBoxSolid } from "react-icons/lia";
import { TbPencilMinus } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";
import { LuBrainCircuit } from "react-icons/lu";

const DataAmount = () => {
    const data = [
        {
            title: "Blog",
            amount: "23",
            icon: <TbPencilMinus />
        },

        {
            title: "Project",
            amount: "23",
            icon: <LiaBoxSolid />
        },

        {
            title: "Certificate",
            amount: "23",
            icon: <PiCertificate />
        },

        {
            title: "Soft Skill",
            amount: "23",
            icon: <LuBrainCircuit />
        },
    ]
    return (
        <div className="flex justify-start items-center gap-[20px] flex-wrap mt-[20px]">
            {data.map((item, index) => (
                <Link key={index} className="flex justify-start flex-wrap gap-[20px] border max-w-[220px] w-full p-[20px] rounded-[10px] hover:shadow-lg duration-300">
                    <div>
                        <p className="text-xl">{item.title}</p>
                        <p className="text-3xl font-bold">{item.amount}</p>
                    </div>
                    <div className="text-3xl mt-[1px]">
                        {item.icon}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default DataAmount;
