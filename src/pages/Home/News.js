import React from "react";

import MarkdownView from 'react-showdown';
import Secondary from "../../components/Button/secondary";
import {NewsBox} from "../../components/NewsCard";

import { ViewAll } from "../../components/ViewAll";
import { JustAppear, SlideBottom, SlideLeft } from "../../components/SlideAnimation";
import { Link } from "gatsby";


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
        <div className="flex justify-center sm:justify-between items-center">
                <div className="text-[24px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
                    <SlideLeft>

                    <MarkdownView markdown={data?.title} />
                    </SlideLeft>
                </div>
                <ViewAll to="/associationCouncil" />
                
            </div>
            <div className="pt-[50px]">
                <JustAppear>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                    {data?.members?.map(item =>
                        <NewsBox key={item.id} item={item} />
                        )}
                </div>
                        </JustAppear>
                {/* <NewsCard items={data?.members} /> */}
                <div className="pt-[50px]">
                    <SlideBottom>

                    <Link to="/news">
                    <Secondary className="max-w-[250px] mx-auto" label="View more" />
                    </Link>
                    </SlideBottom>
                </div>
            </div>
        </div>
    </div>);
}

export default News;