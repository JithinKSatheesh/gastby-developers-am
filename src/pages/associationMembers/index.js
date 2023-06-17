import React from 'react';
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import Content from './Content';
import Contact  from '../Home/Contact';



function AssociationCouncil() {
    return ( <div>
        <Navbar />
        <Content />
        <Contact />
        <Footer />
        
    </div> );
}

export default AssociationCouncil;