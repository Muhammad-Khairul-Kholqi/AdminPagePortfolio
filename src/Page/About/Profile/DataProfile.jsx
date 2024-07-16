import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import UrlApi from "../../../Api/BaseApi";

import { FaRegEdit } from "react-icons/fa";

const DataProfile = () => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        axios.get(`${UrlApi}profile`)
            .then(res => {
                console.log('Data dari API:', res.data.data);
                setProfile(res.data.data);
            })
            .catch(err => {
                console.log(err);           
            });
    }, []);

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ? '...' : '');
    }

    return (
        <div className="mt-[20px]">
            <div className="flex justify-end">
                {profile.map((item, index) => (
                    <Link key={index} to={`/aboutme/edit-data-profile/${item.id}`} className="flex justify-center items-center gap-[5px] border border-black py-[10px] px-[15px] rounded-[7px] hover:bg-black hover:text-white duration-300">
                        <FaRegEdit />
                        <p>Edit Data</p>
                    </Link>
                ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-[20px] mt-[20px] border border-black p-[20px] rounded-[10px]">
                <div>
                    {profile.map((item, index) => (
                        <div key={index}>  
                            <img 
                                className="w-[300px] h-[300px] object-cover rounded-[10px]"
                                src={`${UrlApi}${item.image}`}
                                alt="Profile"
                            />
                        </div>
                    ))}
                </div>

                <div>
                    {profile.map((item, index) => (
                        <div key={index}>  
                            <p><span className="font-bold">Name:</span> {item.name}</p>
                            <p><span className="font-bold">Username:</span> {item.username}</p>
                            <p><span className="font-bold">Address:</span> {item.address}</p>
                            
                            <p className="font-bold mt-[10px]">Short Description:</p>
                            <p className="max-w-[600px] w-full text-gray-600">{truncateText(item.short_description, 30)}</p>
                            <p className="font-bold mt-[10px]">Long Description:</p>
                            <p className="max-w-[600px] w-full text-gray-600">{truncateText(item.long_description, 30)}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* <div className="border p-[30px] rounded-[10px] mt-[20px]">
                <div className="flex flex-wrap items-center justify-start gap-[20px]">
                    {profile.map((item, index) => (
                        <div key={index} className="flex items-center gap-[20px]">
                            <img 
                                className="w-[100px] h-[100px] object-cover rounded-[10px]"
                                src={`${UrlApi}${item.image}`}
                                alt="Profile"
                            />
                            <div className="text-sm">
                                <p><span className="font-bold">Name:</span> {item.name}</p>
                                <p><span className="font-bold">Username:</span> {item.username}</p>
                                <p><span className="font-bold">Address:</span> {item.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {profile.map((item, index) => (
                    <div key={index} className="text-sm mt-[20px]">
                        <p className="font-bold">Short Description:</p>
                        <p>{truncateText(item.short_description, 30)}</p>

                        <p className="font-bold mt-[10px]">Long Description:</p>
                        <p>{truncateText(item.long_description, 30)}</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default DataProfile;
