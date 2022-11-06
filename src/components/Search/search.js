import React from "react";
import FindCar from "../FindCar";

function ListCar(){
    return(
        <section>
            <div className="container mt-5">
            <div className="row" id="cars-container">
                <FindCar/>
            </div>
            </div>
        </section>
    )
}

export default ListCar