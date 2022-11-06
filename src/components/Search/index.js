import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import ListCar from "./search";
import Footer from "./footer";
import Search from "./formSearch";

function SearchPage(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Search/>
            <ListCar/>
            <Footer/>
        </div>
    )
}

export default SearchPage