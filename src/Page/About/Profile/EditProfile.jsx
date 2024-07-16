import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import UrlApi from '../../../Api/BaseApi';
import Swal from 'sweetalert2';

const EditProfile = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        image: null,
        name: '',
        username: '',
        address: '',
        short_description: '',
        long_description: ''
    });

    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                const response = await axios.get(`${UrlApi}profile/${id}`);
                setFormData({
                    image: null,
                    name: response.data.name,
                    username: response.data.username,
                    address: response.data.address,
                    short_description: response.data.short_description,
                    long_description: response.data.long_description
                });
            } catch (error) {
                console.error('Failed to fetch profile data', error);
            }
        };

        fetchProfileData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setFormData((prevData) => ({
                ...prevData,
                image: files[0]
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        for (const key in formData) {
            if (formData[key] !== null && formData[key] !== '') { // Only append non-empty fields
                data.append(key, formData[key]);
            }
        }

        try {
            await axios.patch(`${UrlApi}profile/${id}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            Swal.fire({
               title: 'Sukses!',
               text: 'Berhasil update Data Profile.',
               icon: 'success',
               showConfirmButton: true,
               timer: false
           }).then(() => {
                navigate('/aboutme/profile')
           })
        } catch (error) {
            console.error('Failed to update profile', error);
            Swal.fire({
               title: 'Error!',
               text: 'Terjadi kesalahan saat mengupdate data. Silakan coba lagi.',
               icon: 'error',
               confirmButtonColor: '#3085d6',
               confirmButtonText: 'OK',
           });
        }
    };

    return (
        <div>
            <p className="text-3xl font-bold">Edit Data Profile</p>
            <form onSubmit={handleSubmit} className="flex flex-col border p-[30px] rounded-[10px] mt-[20px]">
                <p className="mt-[10px]">Image:</p>
                <input type="file" name="image" className="w-full h-[35px]" onChange={handleChange} />

                <p className="mt-[10px]">Name:</p>
                <input
                    type="text"
                    name="name"
                    className="border w-full rounded-[5px] h-[35px] px-[10px]"
                    value={formData.name}
                    onChange={handleChange}
                />

                <p className="mt-[10px]">Username:</p>
                <input
                    type="text"
                    name="username"
                    className="border w-full rounded-[5px] h-[35px] px-[10px]"
                    value={formData.username}
                    onChange={handleChange}
                />

                <p className="mt-[10px]">Address:</p>
                <input
                    type="text"
                    name="address"
                    className="border w-full rounded-[5px] h-[35px] px-[10px]"
                    value={formData.address}
                    onChange={handleChange}
                />

                <p className="mt-[10px]">Short Description:</p>
                <textarea
                    name="short_description"
                    className="border w-full rounded-[5px] px-[10px] py-[10px]"
                    value={formData.short_description}
                    onChange={handleChange}
                />

                <p className="mt-[10px]">Long Description:</p>
                <textarea
                    name="long_description"
                    className="border w-full rounded-[5px] px-[10px] py-[10px]"
                    value={formData.long_description}
                    onChange={handleChange}
                />

                <button type="submit" className="bg-black h-[35px] text-white mt-[10px] rounded-[5px]">Save Change</button>
            </form>
        </div>
    );
};

export default EditProfile;
