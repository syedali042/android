import React from 'react';
import plain from "../../images/plain.jpg";
import plain1 from "../../images/plain1.jpg";
import plain2 from "../../images/plain2.jpg";

function Psd3caro() {
    return (
        <>
            <section className="myCaro">
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-12">
                        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div className="carousel-item active">
                                <img src={plain} className="d-block w-100" alt="plain" height="300px"/>
                                </div>
                                <div className="carousel-item">
                                <img src={plain1} className="d-block w-100" alt="plain1" height="300px"/>
                                </div>
                                <div className="carousel-item">
                                <img src={plain2} className="d-block w-100" alt="plain2" height="300px"/>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Psd3caro;
