import React from "react";
import * as Icon from "react-bootstrap-icons";

function Testi(){
    return(
        <section id="testimonial">
            <div className="services-container section-container mt-5 mb-5">
            <div className="container">
                <div className="header">
                <center>
                    <h4><strong>Testimonial</strong></h4>
                </center>
                <center>
                    <p className="mt-4">Berbagai review positif dari para pelanggan kami.</p>
                </center>
                </div>
                <div id="carouselExampleControlsNoTouching" className="carousel slide mt-5" data-touch="false"
                data-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <center>
                        <div className="card border-0 p-5 shadow mb-3" style={{maxWidth:"720px"}} id="testi-card">
                        <div className="row no-gutters justify-content-center">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <img src="./images/coba.jpg" style={{borderRadius:"50%", width:"100px", height:"100px"}} alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col text-start">
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                    </div>
                                </div>
                                <p className="card-text mt-3" style={{textAlign:"left"}}>&quot;Binar Rental Car adalah rental mobil terbaik
                                yang pernah saya coba, mobil yang disediakan selali dalam keadaan baik.&quot;</p>
                                <p className="card-text" style={{textAlign:"left"}}><strong>Al Farizi, Bali</strong></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </center>
                    </div>
                    <div className="carousel-item">
                    <center>
                        <div className="card border-0 p-5 shadow mb-3" style={{maxWidth:"720px"}} id="testi-card">
                        <div className="row no-gutters justify-content-center">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <img src="./images/coba.jpg" style={{borderRadius:"50%", width:"100px", height:"100px"}} alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col text-start">
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                    </div>
                                </div>
                                <p className="card-text mt-3" style={{textAlign:"left"}}>&quot;Mobil di Binar Rental Car selalu dalam
                                keadaan
                                bersih dan harum, jadi bikin nyaman pas lagi liburan sama keluarga.&quot;</p>
                                <p className="card-text" style={{textAlign:"left"}}><strong>Fajar, Solo</strong></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </center>
                    </div>
                    <div className="carousel-item">
                    <center>
                        <div className="card border-0 p-5 shadow mb-3" style={{maxWidth:"720px"}} id="testi-card">
                        <div className="row no-gutters justify-content-center">
                            <div className="col-md-4 d-flex align-items-center justify-content-center">
                            <img src="./images/coba.jpg" style={{borderRadius:"50%", width:"100px", height:"100px"}} alt="..."/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col text-start">
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                        <Icon.StarFill style={{color:"#F9CC00"}}></Icon.StarFill>
                                    </div>
                                </div>
                                <p className="card-text mt-3" style={{textAlign:"left"}}>&quot;Salut sama pelayanan Binar Rental Car,
                                pelayanannya sangat cepat dan ramah, recommended pokonya.&quot;</p>
                                <p className="card-text" style={{textAlign:"left"}}><strong>Dyah, Nganjuk</strong></p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </center>
                    </div>
                </div>
                </div>
                <div className="row justify-content-center mt-5">
                <button className="carousel-control-prev position-relative" type="button"
                    data-target="#carouselExampleControlsNoTouching" data-slide="prev" id="testi-prev">
                    <span><Icon.CaretLeftFill></Icon.CaretLeftFill></span>
                </button>
                <button className="carousel-control-next position-relative ml-3" type="button"
                    data-target="#carouselExampleControlsNoTouching" data-slide="next" id="testi-next">
                    <span><Icon.CaretRightFill></Icon.CaretRightFill></span>
                </button>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Testi