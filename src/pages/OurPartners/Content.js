import React from 'react';
import MarkdownView from "react-showdown";
import { PartnerBox } from "../../components/PartnerCard"

import Popup from '../../components/Popup';
import { useState } from 'react';
import PopupContent from './PopupContent';
// import { Link } from 'gatsby';

function Content(props) {

    const data = {
        title: "Our partners",
        members: [
            {
                id: 1,
                photo: '',
                name: "Sample Name",
                position: "position"
            },
            {
                id: 2,
                photo: '',
                name: "Sample name",
                position: "position"
            },
            {
                id: 3,
                photo: '',
                name: "Sample name",
                position: "position"
            },
            {
                id: 4,
                photo: '',
                name: "Sample name",
                position: "position"
            },
            {
                id: 5,
                photo: '',
                name: "Sample name",
                position: "position"
            },
        ]

    }

    const [selectedItem, setSelectedItem] = useState(null)

    return (<div>
        <div className="pt-[150px] py-[50px]">
            <div className="container mx-auto">
                <div className="text-[20px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
                    <div className="flex justify-between">
                        <div className="">
                            <MarkdownView markdown={data?.title} />
                        </div>
                       
                    </div>
                </div>
                <div className="pt-[50px]">
                    <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                        {data?.members?.map((item,index) => { return (
                            <div 
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                className='shadow rounded-xl mx-auto max-w-[300px] cursor-pointer  hover:shadow-red-200 hover:shadow-md'
                                >
                                {PartnerBox(item)}
                            </div>
                        ) })}
                    </div>
                </div>
            </div>
        </div>
        <Popup 
            onClose={() => setSelectedItem(null)} 
            isOpen={selectedItem}
            heading={selectedItem?.name || ""}
            >
                {
                   selectedItem && <PopupContent item={selectedItem} /> 
                }
        </Popup>
    </div>);
}

export default Content;