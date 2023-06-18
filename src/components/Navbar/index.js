import React,{useState} from "react";

import FloatingBar from "./FloatingBar";
import SideBar from "./SideBar";

export const navlinks = [
    // {
    //     id:1,
    //     lable : "Home",
    //     link : "/",
    // },
    // {
    //     id:2,
    //     lable : "About us",
    //     link : "/",
    // },
    {
        id: 3,
        lable: "Association council",
        link: "/associationCouncil",
    },
    {
        id: 4,
        lable: "Association members",
        link: "/associationMembers",
    },
    {
        id: 5,
        lable: "Our partners",
        link: "/OurPartners",
    },
    {
        id: 5,
        lable: "News",
        link: "/news",
    },
    {
        id: 5,
        lable: "Useful links",
        link: "/usefullLinks",
    },
]

function Navbar() {

    const [open, setOpen] = useState(false)

    const openSideBar = () => {
        setOpen(true)
    }

    const closeSidebar = () => {
        setOpen(false)
    }


    return (<div>
        <FloatingBar navlinks={navlinks} openSideBar={openSideBar} />
        <SideBar navlinks={navlinks} open={open}  closeSidebar={closeSidebar} />
    </div>);
}


export default Navbar;