import React from 'react';

import MarkdownView from "react-showdown";
import PartnerCard from '../../components/PartnerCard';

import { ViewAll } from '../../components/ViewAll';
import { JustAppear, SlideLeft } from '../../components/SlideAnimation';



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
            <div className="flex justify-center sm:justify-between items-center">
                <div className="text-[24px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
                    <SlideLeft>

                    <MarkdownView markdown={data?.title} />
                    </SlideLeft>
                </div>
                <ViewAll to="/OurPartners" />
                
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
                    <JustAppear>

                <PartnerCard  items={data?.partners}/>
                    </JustAppear>

                </div>
            </div>

        </div>
    </div>);
}

export default Partners;

