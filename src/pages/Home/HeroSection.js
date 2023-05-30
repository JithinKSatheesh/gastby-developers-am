import React from "react";

import Bg from './assets/bg.jpg'

import MarkdownView from 'react-showdown';
import Primary from "../../components/Button/primary";

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
                <div className="subhead text-[30px] text-red-800">
                    <MarkdownView  markdown={data.subhead} />
                </div>
                <div className="hero-text text-[50px] py-[10px]">
                    <MarkdownView  markdown={data.herotext} />
                </div>
                <div className="py-[20px]">
                    <Primary label="Contact us" className="max-w-[300px]" />
                </div>
            </div>
        </div>
    </div>);
}

export default HeroSection;