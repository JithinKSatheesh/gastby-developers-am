import React, { useRef } from "react";

// import { ReactComponent as NextIcon } from 'assets/buttons/next.svg';

import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css/bundle';

function CompanyCard(props) {

    const {  items = {} } = props

    const swiperRef = useRef(null);
    SwiperCore.use([Autoplay, Navigation]);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const params = {
        slidesPerView: 3,
        centeredSlides: true,
        // slidesPerView: 3,
        loop: true,
        observer: true,
        spaceBetween: 20,
        on: {
            // realIndexChange: (swiper) => setImageIndex(swiper.realIndex)
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            550: {
                slidesPerView: 3,
            }
        }

    }


    const CompanyBox = (item) => {
        return (<div key={item.id} className={"mx-auto py-[10px]"}>
            <div className=" min-w-[300px] p-2 rounded-xl shadow">
                <div className="bg-sky-100 min-h-[200px]">
                    <img src={""} alt="" />
                </div>
                <div className="py-[10px] text-center">
                    {item.name}
                </div>
            </div>
        </div>)
    }

    return (<div>
        <div className="overflow-hidden  " >
            {items.length > 0 &&
                <Swiper {...params} ref={swiperRef}>
                    {items.map(CompanyBox)}

                </Swiper>
            }
        </div>
    </div>);
}

export default CompanyCard;