import React from "react";

import CompanyIcon from '../images/companylogo.png'

function PartnerCard(props) {
    const { item = {} } = props

    return(<div className=" rounded-xl p-[10px] bg-white" >
       <div className="photo mx-auto  overflow-hidden w-full ">
           <img src={CompanyIcon} alt="" className="w-full mx-auto" />
       </div>
       <div className="text-[16px] text-slate-500 text-center pt-[20px]">
        {item.name}
       </div>
      
    </div>)
}

export default PartnerCard;