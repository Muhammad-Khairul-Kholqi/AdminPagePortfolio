import Photo from "../../../Assets/my-photo.jpg";

import { CiFileOn } from "react-icons/ci";

const DataProfile = () => {
    const ShortDescrption = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere tempora magnam excepturi ad accusantium soluta, error, harum perferendis, deleniti praesentium quaerat distinctio quis quo. Molestiae assumenda ullam voluptate dolorem, debitis numquam porro, accusamus voluptatibus obcaecati eos et, ea amet! Quam reiciendis in sequi tempora iusto?";
    const Longescrption = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere tempora magnam excepturi ad accusantium soluta, error, harum perferendis, deleniti praesentium quaerat distinctio quis quo. Molestiae assumenda ullam voluptate dolorem, debitis numquam porro, accusamus voluptatibus obcaecati eos et, ea amet! Quam reiciendis in sequi tempora iusto?";

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '');
    }

    return (
        <div className="mt-[20px]">
            <div className="border p-[30px] rounded-[10px]">
                <div className="flex flex-wrap items-center justify-start gap-[20px]">
                    <div>
                        <img 
                            className="w-[100px] rounded-[10px]"
                            src={Photo}
                        />
                    </div>

                    <div className="text-sm">
                        <p><span className="font-bold">Name:</span> Khairul Kholqi</p>
                        <p><span className="font-bold">Username:</span> irulsss</p>
                        <p><span className="font-bold">Address:</span> Sukabumi, West Java</p>
                    </div>
                </div>

                <div className="text-sm mt-[20px]">
                    <p className="font-bold">Short Descrption:</p>
                    <p>{truncateText(ShortDescrption, 30)}</p>

                    <p className="font-bold mt-[10px]">Long Descrption:</p>
                    <p>{truncateText(Longescrption, 30)}</p>
                </div>
            </div>
            
            <form action="" className="flex flex-col border p-[30px] rounded-[10px] mt-[20px]">
                <p className="text-xl font-bold">Edit Data Profile</p>
                <p className="mt-[10px]">Image:</p>
                <input type="file" className="w-full h-[35px]" />

                <p className="mt-[10px]">Name:</p>
                <input type="text" className="border w-full rounded-[5px] h-[35px]" />

                <p className="mt-[10px]">Username:</p>
                <input type="text" className="border w-full rounded-[5px] h-[35px]" />

                <p className="mt-[10px]">Address:</p>
                <input type="text" className="border w-full rounded-[5px] h-[35px]" />

                <p className="mt-[10px]">Short Descrption:</p>
                <textarea className="border w-full rounded-[5px]" />

                <p className="mt-[10px]">Long Descrption:</p>
                <textarea className="border w-full rounded-[5px]" />

                <button className="bg-black h-[35px] text-white mt-[10px] rounded-[5px]">Save Change</button>
            </form>
        </div>
    )
}

export default DataProfile;