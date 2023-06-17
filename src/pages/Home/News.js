import React from "react";

import MarkdownView from 'react-showdown';
import Secondary from "../../components/Button/secondary";
import {NewsBox} from "../../components/NewsCard";


function News() {

    const data = {
        title: "News",
        members: [
            {
                id: 1,
                photo: '',
                title: "Sample Name",
                description: "Description"
            },
            {
                id: 2,
                photo: '',
                title: "News title name",
                description: "Description"
            },
            {
                id: 3,
                photo: '',
                title: "News title name",
                description: "Description"
            },
            {
                id: 4,
                photo: '',
                title: "News title name",
                description: "Description"
            },
        ]
    }



    return (<div className="py-[50px] bg-white">
        <div className="container mx-auto">
            <div className="text-[24px] sm:text-[40px] text-center sm:text-left text-[40px] font-bold text-red-800">
                <MarkdownView markdown={data?.title} />
            </div>
            <div className="pt-[50px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                    {data?.members?.map(item =>
                        <NewsBox key={item.id} item={item} />
                    )}
                </div>
                {/* <NewsCard items={data?.members} /> */}
                <div className="pt-[50px]">
                    <Secondary className="max-w-[250px] mx-auto" label="View more" />
                </div>
            </div>
        </div>
    </div>);
}

export default News;