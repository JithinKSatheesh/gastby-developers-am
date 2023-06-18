import React from 'react';


import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";
import Contact from '../Home/Contact';

 function NewsById(req, res) {

    const userId = req.params.id

    return ( <div>
        <Navbar />
        <div className="container mx-auto py-[200px]">
        <div className="text-[20px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
                   News Contents...
                </div>
        </div>
        <Contact />
        <Footer />

    </div> );
}

export default NewsById;