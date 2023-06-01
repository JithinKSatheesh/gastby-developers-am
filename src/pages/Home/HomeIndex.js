import React from "react";
import HeroSection from './HeroSection'
import AboutUs from "./AboutUs";
import AssociationCouncil from "./AssociationCouncil";
import Partners from "./Partners";
import AssociationMembers from "./AssociationMembers";
import News from "./News";
import Footer from "../../components/Footer";
import Contact from "./Contact";

function HomeIndex() {
    return (<>
    <HeroSection />
    <AboutUs />
    <AssociationCouncil />
    <AssociationMembers />
    <Partners />
    <News />
    <Contact />
    <Footer />
    </>
    );
}

export default HomeIndex;