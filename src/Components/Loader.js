import React from 'react';

function Loader() {
    return (
        <>
            <section className="loader">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <i className="fas fa-home" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                        <div className="spinner-border text-danger spinner_manage" role="status">
                            <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Loader;
