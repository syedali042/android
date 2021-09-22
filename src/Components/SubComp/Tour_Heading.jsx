import React from 'react';

function Tour_Heading(props) {
    console.log(props)
    return (
        <>
            <section className="psd2_heading" style={{marginTop:"-10%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="left_side">
                                <h4 className="text-muted">Matches Found:</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tour_Heading;
