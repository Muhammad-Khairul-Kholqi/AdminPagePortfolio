import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../Styles/styleSidebar.css";

import BgProfile from "../Assets/bg-sidebar.jpg";
import MyPhoto from "../Assets/my-photo.jpg";

import { LiaBoxSolid } from "react-icons/lia";
import { GrUserExpert } from "react-icons/gr";
import { IoMdPaperPlane } from "react-icons/io";
import { TbPencilMinus } from "react-icons/tb";
import { LuLeaf } from "react-icons/lu";
import { TbLayoutDashboard } from "react-icons/tb";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { HiOutlineX } from 'react-icons/hi';
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const Sidebar = () => {
    const location = useLocation();

    const [isOpen, setIsOpen] = useState(false);
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    const MenuSidebar = [
        {
            path: "/",
            icon: <TbLayoutDashboard />,
            textIcon: "Dashboard",
        },
        {
            path: "#",
            icon: <GrUserExpert />,
            textIcon: "Account",
        },
        {
            path: "#",
            icon: <LuLeaf />,
            textIcon: "About",
            subItems: [
                { path: "/aboutme/profile", text: "Profile" },
                { path: "/aboutme/career", text: "Career" },
                { path: "/aboutme/soft-skill", text: "Soft Skill" },
                { path: "/aboutme/education", text: "Education" },
                { path: "/aboutme/certificate", text: "Certificate" },  
                { path: "/aboutme/technology", text: "Technology" },
            ]
        },
        {
            path: "/blog",
            icon: <TbPencilMinus />,
            textIcon: "Blog",
        },
        {
            path: "/project",
            icon: <LiaBoxSolid />,
            textIcon: "Project",
        },
        {
            path: "/contact",
            icon: <IoMdPaperPlane />,
            textIcon: "Contact",
        },
        {
            path: "/",
            icon: <IoMdPaperPlane />,
            textIcon: "Logout",
        },
    ];

    return (
        <>
            <div className="container-sidebar p-[20px] w-[270px] h-screen">
                <div
                    className="my-photo pt-[90px] rounded-[10px] relative"
                    style={{
                        backgroundImage: `url(${BgProfile})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <img 
                        className="w-[90px] bg-white shadow-md p-[2px] absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-[50%] hover:scale-105 duration-500"
                        src={MyPhoto}
                        draggable="false"
                    />
                </div>

                <div className="name-username mt-[60px] text-center">
                    <p className="full-name text-[20px] font-bold text-[#1F2937] font-sora tracking-tight">Khairul Kholqi</p>
                    <p className="username text-gray-600 text-[13px]">@irulsss</p>
                </div>

                <div className="menu-sidebar flex flex-col items-start mt-[20px]">
                    {MenuSidebar.map((menu, index) => (
                        <div key={index} className="w-full mt-[10px]">
                            <Link 
                                to={menu.path} 
                                className={`group flex items-center gap-5 hover:bg-black hover:text-white duration-500 py-2 px-3 rounded-[5px] ${location.pathname === `${menu.path}` ? 'bg-black text-white' : ''}`}
                                onClick={menu.subItems ? () => setIsAboutOpen(!isAboutOpen) : null}
                            >
                                <div className="icon-menu text-[18px] group-hover:rotate-12 duration-500">
                                    {menu.icon}
                                </div>
                                <p className="text-menu text-[15px] group-hover:translate-x-2 duration-500">
                                    {menu.textIcon}
                                </p>
                                {menu.subItems && (
                                    <span className="ml-auto text-xl">
                                        {isAboutOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                                    </span>
                                )}
                            </Link>
                            {menu.subItems && isAboutOpen && (
                                <div className="ml-[30px] mt-[10px]">
                                    {menu.subItems.map((subItem, subIndex) => (
                                        <Link key={subIndex} to={subItem.path} className="block mt-[5px] text-gray-600 hover:text-black text-sm">
                                            {subItem.text}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* responsive navbar ukuran 700px */}
            <nav className="container-navbar bg-white shadow-md fixed w-full z-10">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center justify-center flex-wrap gap-[10px]">
                        <img 
                            className="w-[40px] bg-white shadow-md p-[2px] rounded-[50%] hover:scale-105 duration-500"
                            src={MyPhoto}
                            draggable="false"
                        />
                        <p className="full-name font-bold text-[#1F2937] tracking-tight">Khairul Kholqi</p>
                    </div>
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden focus:outline-none bg-white">
                        {isOpen ? ( 
                            <HiOutlineX className="text-3xl" />
                        ) : (
                            <HiOutlineBars3BottomRight className="text-3xl" />
                        )}
                    </button>
                </div>

                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-transform transform ${isOpen ? 'translate-y-0' : '-translate-y-4'} px-[20px] duration-300 absolute left-0 top-16 w-full bg-white shadow-lg`}>
                    <ul className="flex flex-col md:flex-row md:space-x-6 md:py-0 py-4">
                        {MenuSidebar.map(({ path, icon, textIcon, subItems }) => (
                            <li key={textIcon} className="transition-transform transform-gpu hover:translate-y-1">
                                <Link 
                                    to={path} 
                                    className={`group flex items-center gap-5 hover:bg-black hover:text-white duration-500 py-2 px-3 rounded-[5px] ${location.pathname === path ? 'bg-black text-white' : ''}`}
                                    onClick={subItems ? () => setIsAboutOpen(!isAboutOpen) : null}
                                >
                                    <div className="icon-menu text-[18px] group-hover:rotate-12 duration-500">
                                        {icon}
                                    </div>
                                    <span className="text-menu text-[18px] group-hover:translate-x-2 duration-500">
                                        {textIcon}
                                    </span>
                                    {subItems && (
                                        <span className="ml-auto text-xl">
                                            {isAboutOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                                        </span>
                                    )}
                                </Link>
                                {subItems && isAboutOpen && (
                                    <div className="ml-[30px] mt-[10px]">
                                        {subItems.map((subItem, subIndex) => (
                                            <Link key={subIndex} to={subItem.path} className="block mt-[5px] text-gray-600 hover:text-black text-[10px]">
                                                {subItem.text}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Sidebar;
