import React from 'react';
import MarkdownView from "react-showdown";
import { UserBox } from "../../components/UserCard"

import Popup from './Popup';
import { useState } from 'react';
import PopupContent from './PopupContent';

function Content(props) {

    const data = {
        title: "Association Council",
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
            {
                id: 5,
                photo: '',
                name: "SOme name",
                position: "position"
            },
        ]

    }

    const [selectedItem, setSelectedItem] = useState(null)

    return (<div>
        <div className="pt-[150px] py-[50px]">
            <div className="container mx-auto">
                <div className="text-[40px] font-bold text-red-800">
                    <   MarkdownView markdown={data?.title} />
                </div>
                <div className="pt-[50px]">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-[30px]">
                        {data?.members?.map((item,index) => { return (
                            <div 
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                >
                                {UserBox(item)}
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