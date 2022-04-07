import {React, useEffect, useState} from 'react';
import axios from 'axios';
import GURL from '../GURL'
import Explore from './SubComp/Explore';
import Featured from './SubComp/Featured';
// import Hbanner from './SubComp/Hbanner';
import Check from './SubComp/Check';
import Header from "./SubComp/Header";
import Navigation from './SubComp/Navigation';
import Hfooter from './SubComp/Hfooter';
import FHotels from './SubComp/FHotels';
import { useHistory } from "react-router-dom";

function CheckAvailability() {
    let history = useHistory();
    const [results, setResults] = useState([]);
    const [resultsHeading, setResultsHeading] = useState('Searching For Destinations....');
    async function showData(e){
        document.getElementsByClassName('resultsHeading')[0].classList.add('infinity-loop');
        setResultsHeading('Searching For Destinations....');
        let keyword = e.target.value;
        let action = 'search';
        if(e.target.value.length>3){
            document.getElementById('show_search_data1').style.display = "block";
            const res = await axios.post(GURL.MAIN_SEARCH, {keyword:keyword, action:action});
            if(res){
                document.getElementsByClassName('resultsHeading')[0].classList.remove('infinity-loop');
                setResults(res.data.data);
                setResultsHeading('Found Destinations');
            }
        }else if(e.target.value.length <= 3){
            document.getElementById('show_search_data1').style.display = "none";
        }
    }

    const handleSearch = (text) => {
        console.log('a')
        document.getElementById('place1').value = text;
        document.getElementById('show_search_data1').style.display = "none";
        // history.push(`../listings/${text}`);

    }
    
    // const hideInput = () => {
    //     document.getElementById('show_search_data1').style.display = "none";
    // }

    const handleSubmit = async (event) => {
        document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active');
        event.preventDefault()
        const data = event.target;
        let req = {
            place: data.place.value,
            min_price: data.min_price.value,
            max_price: data.max_price.value,
        }
        let params = JSON.stringify(req);
        history.push(`./listings/${params}`);
    }

    const disableBtn = (event) => {
        event.target.classList.add('d-none');
        const loader = event.target.parentElement.nextSibling;
        loader.classList.remove('d-none');
    }

    return (
        <>
            <Header />
            <div className="loading-overlay">
                <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>    
            </div>
                <br />
                <form action="javascript://" className="create-booking-form" onSubmit={handleSubmit}>
                    <div className="container">     
                        <h2>&nbsp;&nbsp;Filter Records</h2>
                        <div className="row pt-1">
                            <div className="col-md-12 pb-3 col-12 form-group">
                                <label for="adult" className="pb-2"> Enter Place, City Or Hotel</label>
                                <input type="text" onBlur={()=>document.getElementById('show_search_data1').style.display = "none"} required="" id="place1" autoComplete="off" name="place" className="form-control"  onKeyUp={showData}/>
                            </div>
                        </div>
                        <div id="show_search_data1" className="position-absolute bg-white" style={{display: 'none', zIndex:'1', maxWidth:'100%', overflowX:'hidden', borderRadius:'5px', boxShadow:'5px 5px 10px #303030'}}>
                            <div className="row pt-2">
                                <div className="resultsHeading infinity-loop pt-2">
                                    <p>{resultsHeading}</p>
                                    <hr />
                                </div>
                                {results ? results.map(result=>{                        
                                        return <>  
                                            <div className="">
                                                <p onClick={()=>handleSearch(result.value)} style={{fontSize:'11px', paddingLeft:'14px'}}>{result.value}</p>
                                            </div>
                                        </>
                                }): null}
                            </div>
                        </div>
                        

                        <div className="row">
                            <div className="col-md-6 pb-3 col-6 form-group">
                                <label className="pb-2" for="adult"> Minimum Price</label>
                                <input type="number" required="" id="min_price" min="0" max="25000" name="min_price" className="form-control" />
                            </div>
                            <div className="col-md-6 pb-3 col-6 form-group">
                                <label className="pb-2" for="children">Maximum Price</label>
                                <input type="number" required="" id="max_price" min="0" max="25000" name="max_price" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 pb-3 col-6 form-group">
                                <label className="pb-2" for="adult"> Male Members</label>
                                <input type="number" required="" id="adult" name="request_male" className="form-control" min="0" max="60" />
                                <small className="pt-2">Leave Zero (0) if no individual</small>
                            </div>
                            <div className="col-md-6 pb-3 col-6 form-group">
                                <label className="pb-2" for="children">Female Members</label>
                                <input type="number" required="" id="children" name="request_female" className="form-control" min="0" max="60" />
                                <small className="pt-2">Leave Zero (0) if no individual</small>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 pb-3 col-12 form-group">
                                <button onClick={disableBtn} type="submit" id="cbSubmit" className="btn btn-success w-100 btn-sm"><i className="fa fa-arrow-right"></i> Filter</button>
                            </div>
                            <div className="spinner-border text-secondary d-none mt-3" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="response mt-2 mb-3">
                            
                        </div>
                    </div>
                </form>
                

            <Hfooter />
        </>
    )
}

export default CheckAvailability;
