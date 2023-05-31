import React from "react";

import UserIcon from '../images/OIP.jpg'

function UserCard(props) {
    const { item = {} } = props

    return(<div className="max-w-[250px] bg-white rounded-xl p-[20px]" >
       <div className="photo mx-auto rounded-full overflow-hidden">
           <img src={UserIcon} alt="" className="w-full" />
       </div>
       <div className="text-[20px] text-center pt-[20px]">
        {item.name}
       </div>
       <div className="text-[16px] text-center  text-slate-500">
        {item.position}
       </div>
    </div>)
}

export default UserCard;