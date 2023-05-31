import React from "react";

import Logo from '../assets/Logo.webp'


function Footer() {
    return ( <div className="w-full bg-slate-800">
        <div className="container mx-auto pt-[50px] pb-[20px]">
            <div className="flex justify-between items-start">
                <div className="flex  flex items-center items-center">
                    <div className="logo mr-[20px]">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="text-white text-[20px]"> LOGO</div>
                </div>

                <div className="flex flex-col text-white">
                    <div className="phone pb-[10px]"> Home </div>
                    <div className="phone pb-[10px]"> About </div>
                    <div className="phone pb-[10px]"> Association Council </div>
                    <div className="phone pb-[10px]"> Association Members </div>
                    <div className="phone pb-[10px]"> Partners </div>

                </div>
                <div className="flex flex-col text-white text-right">
                    <div className="phone">+374 98513233</div>
                    <div className="phone">gurgengrigoryan@developers.am</div>
                </div>

            </div>
        </div>
        <div className="bg-black py-[20px] text-center text-white">
            copyright © 2023
        </div>

    </div> );
}

export default Footer;