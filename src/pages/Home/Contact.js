import React from 'react';
import MarkdownView from "react-showdown";
import ContactCard from '../../components/ContactCard';
import ContactAddress from '../../components/ContactAddress';

import Bg from './assets/bg2.jpg'
import { JustAppear } from '../../components/SlideAnimation';


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
                        <JustAppear>

                        <div className="w-full sm:w-fit bg-white rounded-xl p-[20px]">

                            <div className="text-[20px] sm:text-[40px] text-center sm:text-left text-center sm:text-left font-bold text-red-800">
                                
                                <MarkdownView markdown={data?.title} />
                            </div>
                            <div className="py-[20px] ">


                            <ContactCard className="w-full sm:w-fit sm:min-w-[300px] lg:min-w-[450px]" />
                            </div>
                        </div>
                        </JustAppear>
                        {/* <ContactAddress  className="w-full sm:ml-[30px] sm:w-fit sm:min-w-[300px] lg:min-w-[450px]"  /> */}
                    </div>
                </div>

            </div>
        </div>

    </div>);
}

export default Contact;