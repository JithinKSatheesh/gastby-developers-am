import React from 'react';

import UserIcon from '../../images/OIP.jpg'
import CompanyIcon from '../../images/companylogo.png'



function PopupContent(props) {

    const {item = {}} = props

    return ( <div className=''>
        <div className="photo mx-auto rounded-full overflow-hidden  max-w-[200px]">
            <img src={CompanyIcon} alt="" className="w-full" />
        </div>
        <div className="text-[20px] text-center pt-[20px]">
            {item.name}
        </div>
        {/* <div className="text-[16px] text-center  text-slate-500">
            {item.position}
        </div> */}
    </div> );
}

export default PopupContent;