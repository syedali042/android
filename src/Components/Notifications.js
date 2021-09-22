
import logo from '../images/logo.jpeg';
import Header from './SubComp/Header';
import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHotel, faMapMarker, faStar} from "@fortawesome/free-solid-svg-icons";
import plain from "../images/plain.jpg";
import { useHistory } from "react-router-dom";
import GURL from '../GURL'
import HFooter from './SubComp/Hfooter';


export default class Notifications extends Component {
    constructor(props) {

        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 15,
            currentPage: 0
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }
    
    receivedData() {
        document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active');
        
        const id = this.props.match.params.id;

        const userString = localStorage.getItem('loggedInUser');
        const user = JSON.parse(userString);
        axios
            .post(`${GURL.BASEURL}notifications`, {id:user.app_user_id})
            .then(res => {

                if(res.data.status!==false){
                const data = res.data.data;
                const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                const postData = slice.map(nd => {

                return (
                <React.Fragment>
                    <div className="row" onClick={()=>this.props.history.push(`${nd.note_src}`)}>
                        <div className="col mt-2">
                            <div className="notificate">
                               <div className="notificate_left">
                                   <img src={`${GURL.SERVER_APP_IMAGES}/118556-200.png`} alt="logo"/>
                               </div>
                               <div className="notificate_right">
                                   <p style={{fontSize:'1rem'}} className="">{nd.note_title}
                                    <br />
                                    <small style={{fontSize:'0.6rem'}}>{nd.not_time}</small>
                                    <br />
                                    <small style={{fontSize:'0.8rem'}}>{nd.note_text}</small>
                                   </p>
                                   {/* <p style={{fontSize:'12px'}}></p> */}
                               </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>)})
                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                   
                    postData
                })
                }else{
                    document.getElementsByClassName('page')[0].classList.add('d-none');
                }                
                document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active');
            });
        
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });

    };

    componentDidMount() {
        this.receivedData()
    }
    render() {
        return (
            <>
            <Header />
            <div className="loading-overlay">
            <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>    
            </div>
                <section className="notification">
                    <div className="container">
                        <div className="row">
                            <div className="col mt-4">
                                <h2>Notifications</h2>
                                <div className="border-top"></div>
                            </div>
                        </div>
                        {this.state.postData?this.state.postData:null}
                        <div className="page" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                            <ReactPaginate
                                previousLabel={"prev"}
                                nextLabel={"next"}
                                breakLabel={"..."}
                                breakClassName={"break-me"}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={"pagination"}
                                subContainerClassName={"pages pagination"}
                                activeClassName={"active"}/>
                        </div>                
                    </div>
                </section>
            <HFooter /> 
            </>
        )
    }
}


