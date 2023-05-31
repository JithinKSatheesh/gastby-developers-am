import React from "react";

import MarkdownView from 'react-showdown';
import Secondary from "../../components/Button/secondary";
import NewsCard from "../../components/NewsCard";


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
            <div className="text-[40px] font-bold text-red-800">
                <MarkdownView markdown={data?.title} />
            </div>
            <div className="pt-[50px]">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-[30px]">
                    {data?.members?.map(item =>
                        <NewsCard key={item.id} item={item} />
                    )}
                </div>
                <div className="pt-[50px]">
                    <Secondary className="max-w-[250px] mx-auto" label="View more" />
                </div>
            </div>
        </div>
    </div>);
}

export default News;