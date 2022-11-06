import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import Servis from "./servis";
import Whyus from "./whyus";
import Testi from "./testi";
import Mulai from "./mulai";
import Faq from "./faq";
import Footer from "./footer";

function LandingPage(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Servis/>
            <Whyus/>
            <Testi/>
            <Mulai/>
            <Faq/>
            <Footer/>
        </div>
    )
}

export default LandingPage