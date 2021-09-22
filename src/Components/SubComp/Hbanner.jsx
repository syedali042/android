import React from 'react';
import china from '../../images/china.jpg';
import dubia from '../../images/dubia.jpg';
import uk from '../../images/uk.jpg';

function Hbanner() {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="left_text">
                                <hr/><span>Recomended For You</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="right_text">
                                <a href="#">Show All</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-3">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img src={china} className="d-block w-100 rounded" alt="china" height="200px"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img src={uk} className="d-block w-100 rounded" alt="uk" height="200px"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img src={dubia} className="d-block w-100 rounded" alt="dubia" height="200px"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
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

export default Hbanner;
