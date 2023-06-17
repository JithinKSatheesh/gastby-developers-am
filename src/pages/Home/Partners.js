import React from 'react';

import MarkdownView from "react-showdown";
import PartnerCard from '../../components/PartnerCard';



function Partners() {

    const data = {
        title: "Our Partners",
        partners: [
            {
                id: 1,
                photo: '',
                name: "Sample Name",
                position: "position"
            },
            {
                id: 2,
                photo: '',
                name: "SOme name",
                position: "position"
            },
            {
                id: 3,
                photo: '',
                name: "SOme name",
                position: "position"
            },
            {
                id: 4,
                photo: '',
                name: "SOme name",
                position: "position"
            },
        ]
    }

    return (<div className="pt-[50px] sm:pt-[100px] py-[50px] bg-slate-100">
        <div className="container mx-auto">
            <div className="text-[24px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
                <MarkdownView markdown={data?.title} />
            </div>
            <div className="content pt-[50px]">
            <div className="grid grid-cols-2 sm:grid-cols-6 gap-[10px]">
                    {/* {data?.partners?.map(item =>
                       <div>

                        <PartnerCard  item={item}/>
                       </div>
                    )} */}
                </div>
                <div className="">
                <PartnerCard  items={data?.partners}/>

                </div>
            </div>

        </div>
    </div>);
}

export default Partners;