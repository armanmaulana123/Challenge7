import React from "react";

function Hero(){
    return(
        <section>
            <div className="jumbotron" id="section-1">
            <div className="row" style={{marginTop:100}}>
                <div className="col-lg-6 col-md-6 mb-5">
                    <div className="container">
                        <h1 align="left">Sewa & Rental Mobil Terbaik di kawasan Lumajang</h1>
                        <p className="mt-5 text-start">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
                            terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <div className="text-start">
                            <a href="/cars" className="btn btn-success">Mulai Sewa Mobil</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div id="mobil">
                    <img src="./images/car.png" alt="" id="mobil"/>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Hero