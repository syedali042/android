import {React, useState, useEffect} from 'react'
import Slider from "react-slick";
import uk from "../../images/uk.jpg";
import china from "../../images/china.jpg";
import dubia from "../../images/dubia.jpg";
import axios from 'axios';
import GURL from '../../GURL'
import { useHistory } from "react-router-dom";
import HomeBackgroundTwo from './HomeBackgroundtwo';
// import lahoreImage from '../../../public/images/places/lahore.jpg';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

function Check(props) {

    let history = useHistory();

    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: true,
        autoplay:true,
        autoplaySpeed:2000,
        rtl:true,
    };

    const [Cities, setCities] = useState([]);

    useEffect(() => {
        (async()=>{
            var data = {'majorCities':'1'}
            // const res = await axios.post('http://localhost/easystay/andr/getMajorCities', data);
        })()
    },[]);

    var submitHotelByCity = (text) => {
        history.push(`./listings/${text}`);
    }
    

    return (
        <>
           <section className="mySlides" style={{marginTop:'1%'}} >
           
               <div className="container ">
               <div className="row pb-2">
                        <div className="col-12">
                            <div className="left_text">
                                <hr/><span style={{fontWeight:'600', fontSize:'12px', color:'#011a42'}}>Wanna Stay Somewhere ?</span>
                            </div>
                        </div>
                        {/* <div className="col-6">
                            <div className="right_text">
                                <a href="#">Show All</a>
                            </div>
                        </div> */}
                    </div>
                    
                    {/* <HomeBackgroundTwo /> */}
                       <div className="row ml-0 mr-0 bg-custom mt-2 pt-3 pb-2">
                           <div className="col-12">
                           <Slider style={{maxWidth:'100%', overflowX:'hidden', margin:0, pad:0}} {...settings}>
                                <div className="img_slider" onClick={()=> submitHotelByCity('Naran')}>
                                    <div style={{opacity:'0.9'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/Naran.jpg`} alt="Lahore" height="90px" width="100%" style={{borderRadius: 10}}/></div>
                                    <div style={{color:'#fff',fontSize:'12px',marginTop:'5px', textAlign:'center',fontWeight:'500',opacity:'1 !important'}}>Naran</div>
                                </div>
                                <div className="img_slider" onClick={()=> submitHotelByCity('Swat')}>
                                    <div style={{opacity:'0.9'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/swat.jpeg`} alt="Lahore" height="90px" width="100%" style={{borderRadius: 10}}/></div>
                                    <div style={{color:'#fff',fontSize:'12px',marginTop:'5px', textAlign:'center',fontWeight:'500',opacity:'1 !important'}}>Swat</div>
                                </div>
                                <div className="img_slider" onClick={()=> submitHotelByCity('Lahore')}>
                                    <div style={{opacity:'0.9'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/lahore.jpg`} alt="Lahore" height="90px" width="100%" style={{borderRadius: 10}}/></div>
                                    <div style={{color:'#fff',fontSize:'12px',marginTop:'5px', textAlign:'center',fontWeight:'500',opacity:'1 !important'}}>Lahore</div>
                                </div>
                                <div className="img_slider" onClick={()=>submitHotelByCity('Islamabad')}>
                                    <div style={{opacity:'0.9'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/islamabad.jpg`} alt="islamabad" height="90px" width="100%" style={{borderRadius: 10}}/></div>
                                    <div style={{color:'#fff',fontSize:'12px',marginTop:'5px', textAlign:'center',fontWeight:'500',opacity:'1 !important'}}>Islamabad</div>
                                </div>
                                <div className="img_slider" onClick={()=>submitHotelByCity('Karachi')}>
                                    <div style={{opacity:'0.9'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/karachi.jpg`} alt="Karachi" height="90px" width="100%" style={{borderRadius: 10}}/></div>
                                    <div style={{color:'#fff',fontSize:'12px',marginTop:'5px', textAlign:'center',fontWeight:'500',opacity:'1 !important'}}>Karachi</div>
                                </div>
                                <div className="img_slider" onClick={()=>submitHotelByCity('Peshawar')}>
                                    <div style={{opacity:'0.9'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/peshawar.jpg`} alt="Peshawar" height="90px" width="100%" style={{borderRadius: 10}}/></div>
                                    <div style={{color:'#fff',fontSize:'12px',marginTop:'5px', textAlign:'center',fontWeight:'500',opacity:'1 !important'}}>Peshawar</div>
                                </div>
                                <div className="img_slider" onClick={()=>submitHotelByCity('Gilgit')}>
                                    <div style={{opacity:'0.9'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/gilgit.jpg`} alt="Gilgit" height="90px" width="100%" style={{borderRadius: 10}}/></div>
                                    <div style={{color:'#fff',fontSize:'12px',marginTop:'5px', textAlign:'center',fontWeight:'500',opacity:'1 !important'}}>Gilgit</div>
                                </div>
                                <div className="img_slider" onClick={()=>submitHotelByCity('Skardu')}>
                                    <div style={{opacity:'0.9'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/skardu.jpg`} alt="Skardu" height="90px" width="100%" style={{borderRadius: 10}}/></div>
                                    <div style={{color:'#fff',fontSize:'12px',marginTop:'5px', textAlign:'center',fontWeight:'500',opacity:'1 !important'}}>Skardu</div>
                                </div>
                                <div className="img_slider" onClick={()=>submitHotelByCity('Faisalabad')}>
                                    <div style={{opacity:'0.9'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/Faisalabad.jpg`} alt="Faisalabad" height="90px" width="100%" style={{borderRadius: 10}}/></div>
                                    <div style={{color:'#fff',fontSize:'12px',marginTop:'5px', textAlign:'center',fontWeight:'500',opacity:'1 !important'}}>Faisalabad</div>
                                </div>
                                <div className="img_slider" onClick={()=>submitHotelByCity('Multan')}>
                                    <div style={{opacity:'0.9'}}><img src={`${GURL.SERVER_APP_IMAGES}/places/multan.jpg`} alt="Multan" height="90px" width="100%" style={{borderRadius: 10}}/></div>
                                    <div style={{color:'#fff',fontSize:'12px',marginTop:'5px', textAlign:'center',fontWeight:'500',opacity:'1 !important'}}>Multan</div>
                                </div>
                            </Slider>
                           </div>
                       </div>
               </div>
           </section>
        </>
    )
}

export default Check
