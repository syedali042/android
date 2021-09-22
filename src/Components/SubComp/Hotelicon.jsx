import React from 'react';


function Hotelicon() {
    return (
        <>
            <section className="hotel_icon">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mt-5">
                            <h2 className="font-weight-bold">About Property</h2>
                            <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                            <p className="para mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-3">
                        <div className="about_table">
                            <h2>Property Detail</h2>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                    <th scope="col">Accomodation</th>
                                    <th scope="col" className="guest">4 Guests</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">Bedrooms</th>
                                    <td>02</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Bathrooms</th>
                                    <td>02</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Dimension</th>
                                    <td>1200 Sq Ft</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Room Type</th>
                                    <td>Separate Room</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Populor Nearby</th>
                                    <td>Yes</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">Check-In Start @</th>
                                    <td>09:00 am</td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hotelicon;
