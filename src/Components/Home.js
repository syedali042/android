import {React, useEffect, useState} from 'react';
import Explore from './SubComp/Explore';
import Featured from './SubComp/Featured';
// import Hbanner from './SubComp/Hbanner';
import Check from './SubComp/Check';
import Header from './SubComp/Header';
import Footer from './SubComp/Hfooter';
import Slider from "react-slick";
import { useHistory } from 'react-router-dom';
import Promotions from './SubComp/Promotions';
import ExplorePlaces from './explorePlaces';
import GURL from '../GURL';
import FeatureTours from './SubComp/featureTours';
import FeatureAdventures from './SubComp/FeatureAdventures';
import avatar from './../images/avatar.png';
import HomeBackground from './SubComp/HomeBackground';
function Home() {


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true
    };
    const history = useHistory()
    const handleSearch = (type) => {    
        history.push(`places_listing/${type}`);
    }
    const [UserInfo, SetUserInfo] = useState([]);
    useEffect(async()=>{
        const userString = localStorage.getItem('loggedInUser');
        const user = JSON.parse(userString);
        SetUserInfo(user);
        setTimeout(()=>{
            document.getElementsByClassName('loading-overlay')[0].classList.remove('is-active');
        }, 1500)
        
    },[])

    return (
        <div className="MainPage">
            <div className="loading-overlay is-active">
                <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>
            </div>
            <Header page="Home"/>
            <section className="mySlides" style={{marginTop:'3%', position:'relative'}}>
               <div className="container">
               <div className="row">
                        <div className="col-12">
                            <div className="left_text">
                                <hr/><span style={{fontWeight:'600', fontSize:'12px', color:'#011a42'}}>Featured Destinations</span>
                            </div>
                        </div>
                    </div>
                       <div className="row ml-0 mr-0 pb-3">
                           <div className="col-12">
                           <Slider style={{maxWidth:'100%', overflowX:'hidden', margin:0, pad:0}} {...settings}>
                                <div className="img_slider" onClick={()=>handleSearch('Mountain')}>
                                    <div style={{background: 'black', height:'140px', borderRadius: 5, marginTop:'15px'}}>
                                        <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/mountains.jpg`} alt="Mountain" height="140px" width="100%" style={{borderRadius: 5, opacity:'0.4'}}/>
                                            {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                                            <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-2rem', fontSize:'18px', opacity:1, fontWeight:'bold',}}>Mountains</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img_slider" onClick={()=>handleSearch('Lake')}>
                                    <div style={{background: 'black', height:'140px', borderRadius: 5, marginTop:'15px'}}>
                                        <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/lakes.jpg`} alt="Lake" height="140px" width="100%" style={{borderRadius: 5, opacity:'0.4'}}/>
                                            {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                                            <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-2rem', fontSize:'18px', opacity:1, fontWeight:'bold',}}>Lakes</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img_slider" onClick={()=>handleSearch('River')}>
                                    <div style={{background: 'black', height:'140px', borderRadius: 5, marginTop:'15px'}}>
                                        <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/rivers.jpg`} alt="River" height="140px" width="100%" style={{borderRadius: 5, opacity:'0.4'}}/>
                                            {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                                            <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-2rem', fontSize:'18px', opacity:1, fontWeight:'bold',}}>Rivers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img_slider" onClick={()=>handleSearch('Beach')}>
                                    <div style={{background: 'black', height:'140px', borderRadius: 5, marginTop:'15px'}}>
                                        <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/beaches.jpg`} alt="Beach" height="140px" width="100%" style={{borderRadius: 5, opacity:'0.4'}}/>
                                            {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                                            <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-2rem', fontSize:'18px', opacity:1, fontWeight:'bold',}}>Beaches</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="img_slider" onClick={()=>handleSearch('Waterfall')}>
                                    <div style={{background: 'black', height:'140px', borderRadius: 5, marginTop:'15px'}}>
                                        <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/waterfalls.jpg`} alt="Waterfall" height="140px" width="100%" style={{borderRadius: 5, opacity:'0.4'}}/>
                                            {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                                            <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-2rem', fontSize:'18px', opacity:1, fontWeight:'bold',}}>Waterfalls</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="img_slider" onClick={()=>handleSearch('Island')}>
                                    <div style={{background: 'black', height:'140px', borderRadius: 5, marginTop:'15px'}}>
                                        <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/islands.jpg`} alt="Island" height="140px" width="100%" style={{borderRadius: 5, opacity:'0.4'}}/>
                                            {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                                            <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-2rem', fontSize:'18px', opacity:1, fontWeight:'bold',}}>Islands</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="img_slider" onClick={()=>handleSearch('Valley')}>
                                    <div style={{background: 'black', height:'140px', borderRadius: 5, marginTop:'15px'}}>
                                        <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/valleys.jpg`} alt="Valley" height="140px" width="100%" style={{borderRadius: 5, opacity:'0.4'}}/>
                                            {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                                            <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-2rem', fontSize:'18px', opacity:1, fontWeight:'bold',}}>Valleys</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="img_slider" onClick={()=>handleSearch('Desert')}>
                                    <div style={{background: 'black', height:'140px', borderRadius: 5, marginTop:'15px'}}>
                                        <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/deserts.jpg`} alt="Desert" height="140px" width="100%" style={{borderRadius: 5, opacity:'0.4'}}/>
                                            {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                                            <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-2rem', fontSize:'18px', opacity:1, fontWeight:'bold',}}>Deserts</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="img_slider" onClick={()=>handleSearch('Museum')}>
                                    <div style={{background: 'black', height:'140px', borderRadius: 5, marginTop:'15px'}}>
                                        <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/museum.jpg`} alt="Museum" height="140px" width="100%" style={{borderRadius: 5, opacity:'0.4'}}/>
                                            {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                                            <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-2rem', fontSize:'18px', opacity:1, fontWeight:'bold',}}>Museums</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="img_slider" onClick={()=>handleSearch('National Park')}>
                                    <div style={{background: 'black', height:'140px', borderRadius: 5, marginTop:'15px'}}>
                                        <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/national-park.jpg`} alt="National Park" height="140px" width="100%" style={{borderRadius: 5, opacity:'0.4'}}/>
                                            {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                                            <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-2rem', fontSize:'18px', opacity:1, fontWeight:'bold',}}>National Parks</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="img_slider" onClick={()=>handleSearch('Pass')}>
                                    <div style={{background: 'black', height:'140px', borderRadius: 5, marginTop:'15px'}} onClick={()=>handleSearch('Pass')}>
                                        <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/passes.jpg`} alt="Pass" height="140px" width="100%" style={{borderRadius: 5, opacity:'0.4'}}/>
                                            {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                                            <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-2rem', fontSize:'18px', opacity:1, fontWeight:'bold',}}>Passes / Tops</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="img_slider" onClick={()=>handleSearch('Hill')}>
                                    <div style={{background: 'black', height:'140px', borderRadius: 5, marginTop:'15px'}}>
                                        <div style={{opacity:'1'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/tourism/hills.jpg`} alt="Hill" height="140px" width="100%" style={{borderRadius: 5, opacity:'0.4'}}/>
                                            {/* <div className="title" style={{opacity:'1 !important', position:'absolute'}}>Lahore</div> */}
                                            <div className="d-flex align-items-center justify-content-center text-decoration-none text-white" style={{marginTop:'-2rem', fontSize:'18px', opacity:1, fontWeight:'bold',}}>Hills</div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                           </div>
                       </div>
               </div>
               
           </section>
            <div id="AfterMain">
            <Check />
            <Promotions />
            <Featured />
            <FeatureTours />
            <Explore />
            <FeatureAdventures />
            </div>
            <Footer />
        </div>
    )
}

export default Home;

