import React from "react";

function Mulai(){
    return(
        <section id="mulai">
            <div className="services-container section-container mb-5" style={{marginTop:"100px"}}>
            <div className="container">
                <div className="card p-5" id="sewa">
                <div className="card-body">
                    <center>
                    <h3 className="card-title mb-4"><strong>Sewa Mobil di (Lokasimu) Sekarang</strong></h3>
                    <p className="card-text mb-5" id="content-sewa">Mulai sewa mobil kalian sekarang, dan hilangkan rasa bingung
                        untuk berwisata tanpa membawa kendaraan pribadi.</p>
                    <a href="/cars" className="btn btn-success">Mulai Sewa Mobil</a>
                    </center>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Mulai