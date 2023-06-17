import React, { useRef } from "react";


import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css/bundle';

function NewsCard(props) {

    const { items = {} } = props

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
        spaceBetween: 250,
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


    

    const NextIcon = (props) => {
        return (
            <div {...props} className="cursor-pointer bg-red-800 py-[20px] px-[5px] rounded-md">
            <svg  width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg>
            </div>
        )
    }

    return (<div>
        <div className="desktop  relative">

            <div className="container mx-auto px-[10px] h-full w-full absolute ">
                <div className="absolute left-0 top-[calc(50%-30px)]  -translate-x-[60px] rotate-180">  <NextIcon onClick={() => goPrev()}  /> </div>
                <div className="absolute right-0  top-[calc(50%-30px)]  translate-x-[60px]"> <NextIcon onClick={() => goNext()}  /> </div>
            </div>
            <div className="container mx-auto">

            <div className=" overflow-hidden  " >

                {items.length > 0 &&
                    <Swiper {...params} ref={swiperRef}>
                        {items.map(NewsBox)}

                    </Swiper>
                }
            </div>
                </div>
        </div>
    </div>);
}


export  const NewsBox = (props) => {

    const { item = {}, className = "" } = props

    return (<div key={item?.id} className="px-[20px] sm:px-0">   
            <div className={`border-0 shadow-lg border-red-800 ${className} p-[20px] rounded-sm`}  >
        <div className="img w-full h-[150px] bg-sky-100"></div>
        <div className="text-[16px] pt-[10px]">
            {item?.title}
        </div>
        <div className="text-[14px] py-[0px] text-slate-500">
            {item?.description}
        </div>
        <div className="py-[10px] flex items-end">
            <div className="text-red-800 mr-[10px] font-bold">Read</div>
            <svg className="w-[20px]" fill="#991b1b" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z" fill-rule="nonzero" /></svg>
        </div>
    </div></div>);
}

export default NewsCard;