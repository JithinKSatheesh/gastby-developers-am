import React from 'react';
import MarkdownView from "react-showdown";
import ContactCard from '../../components/ContactCard';
import ContactAddress from '../../components/ContactAddress';


function ContactUs() {

    const data = {
        title: "Contact us",
    }

    return ( <div>
        <div className="pt-[100px] py-[50px] bg-slate-100">
        <div className="container mx-auto">
            <div className="text-[40px] font-bold text-red-800">
                
                <MarkdownView markdown={data?.title} />
            </div>
            <div className="content pt-[50px]">
                <div className="flex flex-wrap">
                    
                    <ContactCard className="w-full sm:w-fit sm:min-w-[300px] lg:min-w-[450px]" />
                    <ContactAddress  className="w-full sm:ml-[30px] sm:w-fit sm:min-w-[300px] lg:min-w-[450px]"  />
                </div>
            </div>

        </div>
    </div>

    </div> );
}

export default ContactUs;