import {React, useEffect, useState} from 'react';
import axios from 'axios';
import GURL from '../../GURL'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft,faFilter,faBars, faDove, faSearch} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Sidebar";
import {useHistory} from "react-router-dom";
function Header(props) {


    const Main = useHistory();

    function fun(){
        Main.goBack();
    }
    useEffect(async ()=>{
        let location = window.location.href;
        console.log(location.match(/listings/g));
        if(location.match(/listings/g)=='listings'){
            document.getElementsByClassName('search-input')[0].classList.add('d-none');
            document.getElementsByClassName('display-logo')[0].classList.remove('d-none');
        }
    })
    const [results, setResults] = useState([]);
    const [resultsHeading1, setResultsHeading1] = useState('Searching For Destinations....');
    async function showData(e){
        document.getElementsByClassName('resultsHeading1')[0].classList.add('infinity-loop');
        setResultsHeading1('Searching For Destinations....');
        e.preventDefault()
        let keyword = e.target.value;
        let action = 'search';
        if(e.target.value.length>3){
            document.getElementById('show_search_data').classList.remove("d-none");
            const res = await axios.post(GURL.MAIN_SEARCH, {keyword:keyword, action:action});
            if(res){
                setResults(res.data.data);
                setResultsHeading1('Found Destinations');
                document.getElementsByClassName('resultsHeading1')[0].classList.remove('infinity-loop');
            }
        }else if(e.target.value.length <= 3){
            document.getElementById('show_search_data').classList.add("d-none");
        }
    }

    const [UserInfo, SetUserInfo] = useState([]);

    useEffect( async ()=> {

        const userString = localStorage.getItem('loggedInUser');
        const user = JSON.parse(userString);
        SetUserInfo(user);

    }, [])
    const handleSearch = (text) => {
        
        Main.push(`../listings/${text}`);

    }
    // const BackButton = () =>{
    //     if(props.page=="Home"){
    //         return(
    //             <>
                    
    //             </>
    //         )
    //     }else{
    //         return(
    //             <>
    //                 <div className="col-2">
    //                     <div className="header_data">
    //                         <FontAwesomeIcon icon={faArrowCircleLeft} id="arrowSize" onClick={fun}/>
    //                     </div> 
    //                 </div>
    //                 <div className="col-8">
    //                     <div className="input_control search-input">
    //                         <span><FontAwesomeIcon icon={faSearch} className="" id="searchIcon"/></span>
    //                         <input type="text" className="form-control" autoComplete="off" name="place" placeholder="Search City, Destination, Hotel ..." onKeyUp={showData}/>
                            
    //                         <span><FontAwesomeIcon icon={faFilter} className="" id="filter"/></span>
    //                     </div>      
    //                     <div className="d-flex align-items-center justify-content-center d-none display-logo"><img src={`${GURL.SERVER_APP_IMAGES}/logo.png`} width="30px"/> &nbsp;<span style={{fontSize:20}}>EasyStay</span></div>
    //                 </div>
    //                 <div className="col-2">
    //                     <div className="menu_bar">
    //                         {/* <FontAwesomeIcon icon={faBars} id="bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{cursor: 'pointer'}}/> */}
    //                         <img id="bars" src={`${GURL.SERVER_APP_IMAGES}userImages/${UserInfo.app_user_image}`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{cursor: 'pointer'}}/>
    //                     </div>
    //                 </div>
    //             </>
    //         )
    //     }
    // }

    return (
        <>
            <header className="mycontainer pt-2 pb-2">
                <div className="container">
                    <div className="row mr-0">
                        
                        {/* <BackButton /> */}
                        <div className="col-2">
                        <div className="menu_bar">
                            <img id="bars" src={`${GURL.SERVER_APP_IMAGES}userImages/${UserInfo.app_user_image}`} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{cursor: 'pointer'}}/>
                            {/* <FontAwesomeIcon icon={faBars} id="bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{cursor: 'pointer'}}/> */}
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="input_control search-input">
                            <span><FontAwesomeIcon icon={faSearch} className="" id="searchIcon"/></span>
                            <input type="text" className="form-control" autoComplete="off" name="place" placeholder="Search City, Destination, Hotel ..." onKeyUp={showData} style={{width:'100%'}}/>
                            {/* <span><FontAwesomeIcon icon={faFilter} className="" id="filter"/></span> */}

                        </div>      
                        <div className="d-flex align-items-center justify-content-center d-none display-logo"><img src={`${GURL.SERVER_APP_IMAGES}/logo.png`} width="30px"/> &nbsp;<span style={{fontSize:20}}>EasyStay</span></div>
                    </div>
                    </div>
                </div>
            </header>
            <br />
            <br />
            <div id="show_search_data" className="bg-white w-100 d-none" style={{zIndex:'23', marginTop:'1rem'}}>
                <div className="">
                    <div className="w-100">
                        <div className="resultsHeading1 infinity-loop pt-2">
                            <p>{resultsHeading1}</p>
                            <hr />
                        </div>
                        {results ? results.map(result=>{                        
                            if(result.img){
                                return(    
                                    <>
                                    <div className="col-12 pt-1 megaSearchedItem" onClick={()=>handleSearch(result.value)}>
                                        <div className="popup_window">
                                            <p style={{fontSize:'12px', paddingLeft:'10px', paddingRight:'10px',whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>
                                                <img style={{width:'70px', height:'50px', borderRadius:'3px'}} src={`${GURL.SERVER_IMAGES}/hotelImages/${result.img}`}/>&nbsp;&nbsp;&nbsp;{result.value}
                                            </p>
                                            <p style={{fontSize:'10px', paddingLeft:'10px', paddingRight:'10px'}}>{result.label}</p>
                                        </div>
                                    </div>
                                    </>
                                )
                            }else{
                                return <>
                                    <div className="col-12 pt-1 megaSearchedItem" onClick={()=>handleSearch(result.value)}>
                                        <div className="popup_window">
                                            <p style={{fontSize:'12px', whiteSpace:'nowrap',paddingLeft:'10px', paddingRight:'10px',overflow:'hidden', textOverflow:'ellipsis', fontWeight:'500'}}>{result.value}</p>
                                            <p style={{fontSize:'10px', paddingLeft:'10px', paddingRight:'10px'}}>{result.label}</p>
                                        </div>
                                    </div>
                                    </>
                            }
                        }): null}
                    </div>
                </div>
            </div>
            <Sidebar />
        </>
    )
}

export default Header;
