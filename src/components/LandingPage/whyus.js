import React from "react";
import * as Icon from "react-bootstrap-icons";

function Whyus(){
    return(
        <section id="whyus" className="text-start">
            <div className="services-container section-container mt-5">
            <div className="container">
                <h4><strong>Why Us?</strong></h4>
                <p className="mt-4">Mengapa harus pilih Binar Car Rental?</p>
                <div className="row justify-content-evenly mb-5 mt-5">
                <div className="col-lg-3 col-sm-6 mb-5">
                    <div className="card shadow rounded border-0" id="card1">
                    <div className="card-body">
                        <div className="card-title" id="card-logo1">
                        <center><Icon.HandThumbsUp className="mt-2" style={{color:"white", fontSize:"32"}}></Icon.HandThumbsUp></center>
                        </div>
                        <h5 className="mt-4"><strong>Mobil Lengkap</strong></h5>
                        <p className="card-text mt-4"><small className="text-muted">Tersedia banyak pilihan mobil, kondisi masih baru,
                            bersih dan terawat.</small></p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-5">
                    <div className="card shadow bg-white rounded border-0">
                    <div className="card-body">
                        <div className="card-title" id="card-logo2">
                        <center><Icon.Tag className="mt-2" style={{color:"white", fontSize:"32"}}></Icon.Tag></center>
                        </div>
                        <h5 className="mt-4"><strong>Harga Murah</strong></h5>
                        <p className="card-text mt-4"><small className="text-muted">Harga murah dan bersaing, bisa bandingkan harga kami
                            dengan rental mobil lain.</small></p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-5">
                    <div className="card shadow bg-white rounded border-0">
                    <div className="card-body">
                        <div className="card-title" id="card-logo3">
                        <center><Icon.Clock className="mt-2" style={{color:"white", fontSize:"32"}}></Icon.Clock></center>
                        </div>
                        <h5 className="mt-4"><strong>Layanan 24 Jam</strong></h5>
                        <p className="card-text mt-4"><small className="text-muted">Siap melayani kebutuhan Anda selama 24 jam nonstop,
                            Kami juga tersedia di akhir minggu.</small></p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-5">
                    <div className="card shadow bg-white rounded border-0">
                    <div className="card-body">
                        <div className="card-title" id="card-logo4">
                        <center><Icon.Award className="mt-2" style={{color:"white", fontSize:"32"}}></Icon.Award></center>
                        </div>
                        <h5 className="mt-4"><strong>Sopir Profesional</strong></h5>
                        <p className="card-text mt-4"><small className="text-muted">Sopir yang profesional, berpengalaman, jujur, ramah
                            dan selalu tepat waktu.</small></p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Whyus