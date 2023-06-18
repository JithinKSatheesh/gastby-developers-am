import React from "react";

import Bg from './assets/bg.jpg'

import MarkdownView from 'react-showdown';
import Primary from "../../components/Button/primary";
import { JustAppear, SlideBottom, SlideLeft, SlideRight, SlideTop } from "../../components/SlideAnimation";

function HeroSection() {

    const data = {
        subhead : "Association Of The Armenian Developers",
        herotext : "Կառուցապատողների <br/> հայկական ասոցիացիա"
    }

    return (<div
            style={{
                backgroundImage : `url(${Bg})`
            }}
            className="h-[100vh] bg-cover bg-top bg-fixed_"
        >
            
            <div className="w-full h-screen flex flex-col items-center justify-center backdrop-blur-sm bg-white/10">
        <div className="container mx-auto">
                <div className="subhead text-[18px] sm:text-[30px] text-red-800">
                    <SlideRight >
                    <MarkdownView  markdown={data.subhead} />
                    </SlideRight>
                </div>
                <div className="hero-text text-[24px] sm:text-[50px] py-[10px]">
                    <SlideLeft >

                        <MarkdownView  markdown={data.herotext} />
                    </SlideLeft>
                </div>
                <div className="py-[20px]">
                    <JustAppear>

                    <Primary label="Contact us" className="max-w-[300px]" />
                    </JustAppear>
                </div>
            </div>
        </div>
    </div>);
}

export default HeroSection;