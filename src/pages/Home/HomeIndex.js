import React from "react";
import HeroSection from './HeroSection'
import AboutUs from "./AboutUs";
import AssociationCouncil from "./AssociationCouncil";
import Partners from "./Partners";
import AssociationMembers from "./AssociationMembers";
import News from "./News";
import Footer from "../../components/Footer";

function HomeIndex() {
    return (<>
    <HeroSection />
    <AboutUs />
    <AssociationCouncil />
    <AssociationMembers />
    <Partners />
    <News />
    <Footer />
    </>
    );
}

export default HomeIndex;