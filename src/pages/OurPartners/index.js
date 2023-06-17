import React from 'react';

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";

import Contact  from '../Home/Contact';
import Content from './Content';


function OutPartners() {
    return ( <div>
        <Navbar/>
        <Content />
        <Contact />
        <Footer />
    </div> );
}

export default OutPartners;