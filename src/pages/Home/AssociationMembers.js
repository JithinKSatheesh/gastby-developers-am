import React from "react";

import MarkdownView from 'react-showdown';
// import UserCard from "../../components/UserCard";
import Secondary from "../../components/Button/secondary";
import CompanyCard from "../../components/CompanyCard";




function AssociationMembers() {

    const data = {
        title: "Association Members",
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
            {
                id: 6,
                photo: '',
                name: "SOme name",
                position: "position"
            },
            {
                id: 7,
                photo: '',
                name: "SOme name",
                position: "position"
            },
        ]
    }



    return (<div className="py-[50px] bg-white">
        <div className="container mx-auto">
            <div className="text-[24px] sm:text-[40px]  text-center sm:text-left font-bold text-red-800">
                <MarkdownView markdown={data?.title} />
            </div>
            <div className="pt-[50px]">
                {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-[30px]">
                    {data?.members?.map(item =>
                        <CompanyCard key={item.id} item={item} />
                    )}
                </div> */}
                    <CompanyCard items={data?.members} />
                <div className="pt-[50px]">
                    <Secondary className="max-w-[250px] mx-auto" label="View more" />
                </div>
            </div>
        </div>
    </div>);
}

export default AssociationMembers;