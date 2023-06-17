import React from "react";

import Logo from '../assets/Logo.webp'


function Footer() {
    return ( <div className="w-full bg-slate-800">
        <div className="container mx-auto pt-[20px] sm:pt-[50px] pb-[20px]">
            <div className="flex flex-wrap sm:flex-nowrap justify-between items-start">

                <div className="w-full sm:w-fit  pt-[20px] sm:pt-0 flex  flex items-center items-center order-1">
                    <div className="flex items-center w-fit mx-auto">

                    <div className="logo mr-[20px]">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="text-white text-[10px] font-bold"> ԿԱՌՈՒՑԱՊԱՏՈՂՆԵՐԻ <br/>ԱՍՈՑԻԱՑԻԱ</div>
                    </div>
                </div>

                <div className="w-full sm:w-fit pt-[30px] sm:pt-0 flex flex-col text-white text-center sm:text-left order-3 sm:order-2">
                    <div className="phone pb-[10px]"> Home </div>
                    <div className="phone pb-[10px]"> About </div>
                    <div className="phone pb-[10px]"> Association Council </div>
                    <div className="phone pb-[10px]"> Association Members </div>
                    <div className="phone pb-[10px]"> Partners </div>

                </div>

                <div className="w-full sm:w-fit pt-[30px] sm:pt-0  flex flex-col text-white text-center sm:text-right order-2 sm:order-3">
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