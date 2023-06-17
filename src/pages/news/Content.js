import React from 'react';
import MarkdownView from "react-showdown";

import Popup from '../../components/Popup';
import { useState } from 'react';
import PopupContent from './PopupContent';
import { NewsBox } from '../../components/NewsCard';

function Content(props) {

    const data = {
        title: "News",
        members: [
            {
                id: 1,
                photo: '',
                title: "Sample title",
                description: "description"
            },
            {
                id: 2,
                photo: '',
                title: "SOme title",
                description: "description"
            },
            {
                id: 3,
                photo: '',
                title: "SOme title",
                description: "description"
            },
            {
                id: 4,
                photo: '',
                title: "SOme title",
                description: "description"
            },
            {
                id: 5,
                photo: '',
                title: "SOme title",
                description: "description"
            },
        ]

    }

    const [selectedItem, setSelectedItem] = useState(null)

    return (<div>
        <div className="pt-[150px] py-[50px]">
            <div className="container mx-auto">
                <div className="text-[20px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
                    <   MarkdownView markdown={data?.title} />
                </div>
                <div className="pt-[50px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                        {data?.members?.map((item,index) => { return (
                            <div 
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                >
                                {/* {NewsBox(item)} */}
                                <NewsBox  item={item} />
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