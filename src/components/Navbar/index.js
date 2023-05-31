import React from "react";

import Logo from '../assets/Logo.webp'

const navlinks = [
    {
        id:1,
        lable : "Home",
        link : "/",
    },
    {
        id:2,
        lable : "About us",
        link : "/",
    },
    {
        id:3,
        lable : "Association Council",
        link : "/",
    },
    {
        id:4,
        lable : "Association Members",
        link : "/",
    },
    {
        id:5,
        lable : "Our partners",
        link : "/",
    },
]

function Navbar() {
    return (<div className="w-full fixed top-0 left-0 bg-white py-[20px] px-[10px] drop-shadow-xl z-[100]">
        <div className="container mx-auto">

            <div className="flex justify-between items-center">
                <div className="nav flex items-center">
                    <img alt="" src={Logo} className="h-fit" />
                    <div className="text-[30px] ml-[20px] text-sky-900">
                        LOGO
                    </div>
                </div>
                <div className="nav-menu ">
                    {navlinks.map(item => {
                        return(<div key={item.id} className="inline-block ml-[20px]">{item.lable}</div>)
                    })}
                </div>
            </div>
        </div>
    </div>);
}

export default Navbar;