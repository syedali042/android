import React from 'react';

function Heading(props) {
    return (
        <>
            <section className="psd2_heading" style={{marginTop:"-10%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="left_side">
                                <h5 className="text-muted">{props.matched} matches found for:</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Heading;
