import React from 'react';
import MarkdownView from "react-showdown";
import ContactCard from '../../components/ContactCard';
import ContactAddress from '../../components/ContactAddress';

import Bg from './assets/bg2.jpg'


function Contact() {

    const data = {
        title: "Contact us",
    }

    return (<div
        style={{
            backgroundImage: `url(${Bg})`
        }}
        className=" bg-cover bg-top bg-fixed_"
    >
        <div className="pt-[100px] py-[50px] _bg-slate-100 backdrop-blur-sm ">
            <div className="container mx-auto">
                <div className="content ">
                    <div className="flex flex-wrap">
                        <div className=" bg-white rounded-xl p-[20px]">

                            <div className="text-[40px] font-bold text-red-800">

                                <MarkdownView markdown={data?.title} />
                            </div>
                            <div className="py-[20px]">


                            <ContactCard className="w-full sm:w-fit sm:min-w-[300px] lg:min-w-[450px]" />
                            </div>
                        </div>
                        {/* <ContactAddress  className="w-full sm:ml-[30px] sm:w-fit sm:min-w-[300px] lg:min-w-[450px]"  /> */}
                    </div>
                </div>

            </div>
        </div>

    </div>);
}

export default Contact;