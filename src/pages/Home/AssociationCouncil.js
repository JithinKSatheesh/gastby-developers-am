import React from "react";

import MarkdownView from 'react-showdown';
import UserCard from "../../components/UserCard";

import { ViewAll } from "../../components/ViewAll";

import Secondary from "../../components/Button/secondary";
import { JustAppear, SlideLeft } from "../../components/SlideAnimation";


function AssociationCouncil() {

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
            {
                id: 6,
                photo: '',
                name: "Sample name",
                position: "position"
            },
            {
                id: 7,
                photo: '',
                name: "Sample name",
                position: "position"
            },
        ]
    }



    return (<div className="py-[50px] bg-slate-100">
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
                {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-[30px]">
                    {data?.members?.map(item =>
                        <UserCard key={item.id} item={item} />
                    )}
                </div> */}
                <div className="">
                    <JustAppear>

                    <UserCard items={data?.members} />
                    </JustAppear>
                </div>
                <div className="pt-[50px] w-full ">
                    {/* <Secondary className="max-w-[250px] mx-auto" label="View more" /> */}
                </div>
            </div>
        </div>
    </div>);
}

export default AssociationCouncil;