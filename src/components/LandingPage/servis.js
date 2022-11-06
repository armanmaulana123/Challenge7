import React from "react";
import * as Icon from "react-bootstrap-icons";

function Servis(){
    return(
        <section id="services">
            <div className="services-container section-container mt-5">
            <div className="container">
                <div className="row justify-content-evenly mb-5">
                <div className="col-lg-6 col-md-6">
                    <div className="p-5">
                    <img src="./images/servis.png" alt="" id="gambar-servis"/>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 mt-5 text-start">
                    <div>
                    <h4><strong>Best Car Rental for any kind of trip in Lumajang!</strong></h4>
                    <p className="mt-4 mb-4" id="desk-servis">Sewa mobil di Lumajang bersama Binar Car Rental jaminan harga lebih
                        murah
                        dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata,
                        bisnis, wedding, meeting, dll.</p>
                    <ul id="list-servis">
                        <li className="mt-3">
                        <p id="item-servis"><span><Icon.Check className="me-2" id="centang"
                                style={{fontSize:24}}></Icon.Check></span>
                            Sewa
                            Mobil Dengan Supir di Bali 12 Jam</p>
                        </li>
                        <li className="mt-3">
                        <p id="item-servis"><span><Icon.Check className="me-2" id="centang"
                                style={{fontSize:24}}></Icon.Check></span>
                            Sewa
                            Mobil Lepas Kunci di Bali 12 Jam</p>
                        </li>
                        <li className="mt-3">
                        <p id="item-servis"><span><Icon.Check className="me-2" id="centang"
                                style={{fontSize:24}}></Icon.Check></span>
                            Sewa
                            Mobil Jangka Panjang Bulanan</p>
                        </li>
                        <li className="mt-3">
                        <p id="item-servis"><span><Icon.Check className="me-2" id="centang"
                                style={{fontSize:24}}></Icon.Check></span>
                            Gratis Antar - Jemput Mobil di Bandara</p>
                        </li>
                        <li className="mt-3">
                        <p id="item-servis"><span><Icon.Check className="me-2" id="centang"
                                style={{fontSize:24}}></Icon.Check></span>
                            Layanan Airport Transfer / Drop In Out</p>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Servis