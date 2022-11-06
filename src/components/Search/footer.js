import React from "react";
import * as Icon from "react-bootstrap-icons";

function Footer(){
    return(
        <section id="footer">
            <div className="services-container section-container mb-5" style={{marginTop: "100px"}}>
            <div className="container">
                <div className="row" id="content-footer">
                <div className="col-lg-3">
                    <p className="mb-4">Jalan Suroyo No.161 Mayangan Kota Probolinggo 672000</p>
                    <p className="mb-4">binarcarrental@gmail.com</p>
                    <p className="mb-4">081-233-334-808</p>
                </div>
                <div className="col-lg-3">
                    <p className="mb-3"><strong>Our Service</strong></p>
                    <p className="mb-3"><strong>Why Us</strong></p>
                    <p className="mb-3"><strong>Testimonial</strong></p>
                    <p className="mb-3"><strong>FAQ</strong></p>
                </div>
                <div className="col-lg-3 mb-3">
                    <p className="mb-3">Connect with us</p>
                    <div className="row ms-1">
                        <div className="col">
                            <Icon.Facebook id="logo-footer" style={{fontSize: "28"}}></Icon.Facebook>
                            <Icon.Instagram className="ms-2" id="logo-footer" style={{fontSize: "28"}}></Icon.Instagram>
                            <Icon.Twitter className="ms-2" id="logo-footer" style={{fontSize: "28"}}></Icon.Twitter>
                            <Icon.Envelope className="ms-2" id="logo-footer" style={{fontSize: "28"}}></Icon.Envelope>
                            <Icon.Twitch className="ms-2" id="logo-footer" style={{fontSize: "28"}}></Icon.Twitch>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <p className="mb-3">Copyright Binar 2022</p>
                    <div style={{marginLeft:"65px"}} id="square-footer"></div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Footer