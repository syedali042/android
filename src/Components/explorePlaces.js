import React from 'react';
// import Hbanner from './SubComp/Hbanner';
import Header from "./SubComp/Header";
import GURL from '../GURL';
import Hfooter from './SubComp/Hfooter';
import { useHistory } from 'react-router-dom';

function ExplorePlaces() {
    const history = useHistory()
    const handleSearch = (type) => {    
        history.push(`places_listing/${type}`);
    }
    return (
        <>
            <Header />         
            <div className="container">
                <br />
                <h5 className="font-weight-bold pt-3 pb-3">Featured Destinations</h5>
                <div style={{background: 'black', height:'200px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('Mountain')}>
                    <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/mountains.jpg`} alt="Mountain" height="200px" width="100%" style={{borderRadius: 5, opacity:'0.3'}}/>
                        {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                        <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-15%', fontSize:'24px', fontWeight:'bold',}}>Mountains</div>
                    </div>
                </div>

                <div style={{background: 'black', height:'200px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('Lake')}>
                    <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/lakes.jpg`} alt="Lake" height="200px" width="100%" style={{borderRadius: 5, opacity:'0.3'}}/>
                        {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                        <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-15%', fontSize:'24px', fontWeight:'bold',}}>Lakes</div>
                    </div>
                </div>

                <div style={{background: 'black', height:'200px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('River')}>
                    <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/rivers.jpg`} alt="River" height="200px" width="100%" style={{borderRadius: 5, opacity:'0.3'}}/>
                        {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                        <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-15%', fontSize:'24px', fontWeight:'bold',}}>Rivers</div>
                    </div>
                </div>

                <div style={{background: 'black', height:'200px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('Beach')}>
                    <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/beaches.jpg`} alt="Beach" height="200px" width="100%" style={{borderRadius: 5, opacity:'0.3'}}/>
                        {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                        <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-15%', fontSize:'24px', fontWeight:'bold',}}>Beaches</div>
                    </div>
                </div>

                <div style={{background: 'black', height:'200px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('Waterfall')}>
                    <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/waterfalls.jpg`} alt="Waterfall" height="200px" width="100%" style={{borderRadius: 5, opacity:'0.3'}}/>
                        {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                        <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-15%', fontSize:'24px', fontWeight:'bold',}}>Waterfalls</div>
                    </div>
                </div>

                <div style={{background: 'black', height:'200px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('Island')}>
                    <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/islands.jpg`} alt="Island" height="200px" width="100%" style={{borderRadius: 5, opacity:'0.3'}}/>
                        {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                        <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-15%', fontSize:'24px', fontWeight:'bold',}}>Islands</div>
                    </div>
                </div>

                <div style={{background: 'black', height:'200px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('Valley')}>
                    <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/valleys.jpg`} alt="Valley" height="200px" width="100%" style={{borderRadius: 5, opacity:'0.3'}}/>
                        {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                        <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-15%', fontSize:'24px', fontWeight:'bold',}}>Valleys</div>
                    </div>
                </div>

                <div style={{background: 'black', height:'200px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('Desert')}>
                    <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/deserts.jpg`} alt="Desert" height="200px" width="100%" style={{borderRadius: 5, opacity:'0.3'}}/>
                        {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                        <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-15%', fontSize:'24px', fontWeight:'bold',}}>Deserts</div>
                    </div>
                </div>

                <div style={{background: 'black', height:'200px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('Museum')}>
                    <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/museum.jpg`} alt="Museum" height="200px" width="100%" style={{borderRadius: 5, opacity:'0.3'}}/>
                        {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                        <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-15%', fontSize:'24px', fontWeight:'bold',}}>Museums</div>
                    </div>
                </div>

                <div style={{background: 'black', height:'200px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('National Park')}>
                    <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/national-park.jpg`} alt="National Park" height="200px" width="100%" style={{borderRadius: 5, opacity:'0.3'}}/>
                        {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                        <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-15%', fontSize:'24px', fontWeight:'bold',}}>National Parks</div>
                    </div>
                </div>

                <div style={{background: 'black', height:'200px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('Pass')}>
                    <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/passes.jpg`} alt="Pass" height="200px" width="100%" style={{borderRadius: 5, opacity:'0.3'}}/>
                        {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                        <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-15%', fontSize:'24px', fontWeight:'bold',}}>Passes / Tops</div>
                    </div>
                </div>

                <div style={{background: 'black', height:'200px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('Hill')}>
                    <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/hills.jpg`} alt="Hill" height="200px" width="100%" style={{borderRadius: 5, opacity:'0.3'}}/>
                        {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                        <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-15%', fontSize:'24px', fontWeight:'bold',}}>Hills</div>
                    </div>
                </div>
            </div>
            <Hfooter />
        </>
    )
}

export default ExplorePlaces;
