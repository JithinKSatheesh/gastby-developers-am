import React from "react";
import MarkdownView from "react-showdown";

import AboutImage from './assets/about.png'

function AboutUs() {

    const data = {
        title : "About us",
        content : `«Կառուցապատողների հայկական ասոցիացիա» հասարակական կազմակերպությունը հիմնադրվել է 2010 թվականին, ակտիվ գործունեություն սկսել է ծավալել 2018 թվականից: Ասոցիացիան միավորում է ավելի քան չորս տասնյակ անդամ կառուցապատող ընկերություններ:
        Ասոցիացիայի գործուներության հիմնական նպատակներից են.«Կառուցապատողների հայկական ասոցիացիա» հասարակական կազմակերպությունը հիմնադրվել է 2010 թվականին, ակտիվ գործունեություն սկսել է ծավալել 2018 թվականից: Ասոցիացիան միավորում է ավելի քան չորս տասնյակ անդամ կառուցապատող ընկերություններ:
        Ասոցիացիայի գործուներության հիմնական նպատակներից են.
«Կառուցապատողների հայկական ասոցիացիա» հասարակական կազմակերպությունը հիմնադրվել է 2010 թվականին, ակտիվ գործունեություն սկսել է ծավալել 2018 թվականից: Ասոցիացիան միավորում է ավելի քան չորս տասնյակ անդամ կառուցապատող ընկերություններ:
        Ասոցիացիայի գործուներության հիմնական նպատակներից են.

        
        
       `
    }

    return ( <div className="pt-[50px] sm:pt-[100px] py-[50px]">
        <div className="container mx-auto">
            <div className="text-[24px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
            <MarkdownView  markdown={data?.title} />
            </div>
            <div className="content pt-[50px] sm:pt-[50px]">
                <div className="flex flex-wrap justify-between">
                    <div className="w-[1/2]">
                        <img src={AboutImage} className="w-full sm:max-w-[500px] rounded-xl" alt="" />
                    </div>
                    <div className="w-full sm:w-1/2 pt-[50px] sm:pt-[0px] max-w-fit overflow-hidden">
                        <MarkdownView  markdown={data?.content}/>
                    </div>
                </div>
            </div>
        </div>

    </div> );
}

export default AboutUs;