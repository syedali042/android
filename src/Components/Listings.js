
import { React, useState, useEffect, Suspense, Component, Fragment } from 'react'
import Header from './SubComp/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import Heading from './SubComp/Heading';
import GURL from '../GURL'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import HFooter from './SubComp/Hfooter';
import queryString from 'query-string'

export default class Listings extends Component {
    constructor(props) {

        super(props);
        const value = queryString.parse(this.props.location.search);
        this.state = {
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0,
            weather: {},
            currentTemp: {},
            windSpeed: '',
            humidity: '',
            currentTime: '',
            weatherDescription: '',
            latitude: value.place_lat,
            longitude: value.place_long
        };
        this.handlePageClick = this
            .handlePageClick
            .bind(this);
    }

    receivedData() {
        document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active');

        const text = this.props.match.params.id;

        if (text.charAt(0) == '{') {
            let reqData = JSON.parse(text);
            axios.post(`${GURL.BASEURL}hotelListing`, { ...reqData })
                .then(res => {

                    console.log(res);
                    if (res.data.status !== false) {
                        const data = res.data.data;
                        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                        const postData = slice.map(hotel => {

                            return (
                                <>
                                    <div className="col-6 mt-3">
                                        <div className="card">
                                            <img className="card-img-top" style={{ height: '100px' }} src={`${GURL.SERVER_IMAGES}/hotelImages/${hotel.hotel_image}`} alt="plain1" />
                                            <div className="card-body" style={{ padding: '0.3rem' }}>
                                                {/* <a href="#" className="card-link" style={{fontSize:'10px'}}>Featured</a> */}
                                                {/* <a href="#" className="card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                                                <p className="text-primary pt-2" style={{ fontSize: '12px', fontWeight: '500' }}>{hotel.hotel_name}</p>
                                                <p className="text-subtitle" style={{ fontSize: '10px', fontWeight: '300', marginTop: '-10%' }}><FontAwesomeIcon icon={faMapMarker} className="text-warning" /> &nbsp;{hotel.hotel_city}</p>
                                                <h6 style={{ fontSize: '12px', fontWeight: '300', marginTop: '-5%' }}><span className="text-muted">Rs.</span><span className="text-dark">{hotel.room_price ? hotel.room_price : "Not Available"}</span><span className="text-muted" style={{ fontSize: '12px' }}>/night</span></h6>
                                                <a href="javascript://" onClick={() => this.props.history.push(`../portal/${hotel.hotel_id}`)} className=" btn btn-primary btn-sm w-100 card-link" style={{ fontSize: '10px' }}>Details</a>
                                                {/* <a href="#" className=" btn btn-primary btn-sm w-100 card-link" style={{fontSize:'10px'}}>Details</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                        this.setState({
                            pageCount: Math.ceil(data.length / this.state.perPage),

                            postData
                        })
                    } else {
                        document.getElementsByClassName('page')[0].classList.add('d-none');
                    }
                    document.getElementsByClassName('loading-overlay')[0].classList.remove('is-active');
                });
        } else {
            axios.post(`${GURL.BASEURL}findHotelsByPlaceName`, { place: text })
                .then(res => {

                    if (res.data.status !== false) {
                        const data = res.data.data;
                        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                        const postData = slice.map(hotel => {

                            return (
                                <>
                                    <div className="col-6 mt-3">
                                        <div className="card">
                                            <img className="card-img-top" style={{ height: '100px' }} src={`${GURL.SERVER_IMAGES}/hotelImages/${hotel.hotel_image}`} alt="plain1" />
                                            <div className="card-body" style={{ padding: '0.3rem' }}>
                                                {/* <a href="#" className=" btn btn-primary btn-sm w-100 card-link" style={{fontSize:'10px'}}>Featured</a> */}
                                                {/* <a href="#" className=" btn btn-primary btn-sm w-100 card-link sweet" style={{fontSize:'10px',marginLeft:'0.3rem'}}>Top Rated</a> */}
                                                <p className="text-primary pt-2" style={{ fontSize: '12px', fontWeight: '500' }}>{hotel.hotel_name}</p>
                                                <p className="text-subtitle" style={{ fontSize: '10px', fontWeight: '300', marginTop: '-10%' }}><FontAwesomeIcon icon={faMapMarker} className="text-warning" /> &nbsp;{hotel.hotel_city}</p>
                                                <h6 style={{ fontSize: '12px', fontWeight: '300', marginTop: '-5%' }}><span className="text-muted">Rs.</span><span className="text-dark">{hotel.room_price ? hotel.room_price : "Not Available"}</span><span className="text-muted" style={{ fontSize: '12px' }}>/night</span></h6>
                                                <a href="javascript://" onClick={() => this.props.history.push(`../portal/${hotel.hotel_id}`)} className=" btn btn-primary btn-sm w-100 card-link" style={{ fontSize: '10px' }}>Details</a>
                                                {/* <a href="#" className="card-link" style={{fontSize:'10px'}}>Details</a> */}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                        this.setState({
                            pageCount: Math.ceil(data.length / this.state.perPage),

                            postData
                        })
                    } else {
                        document.getElementsByClassName('page')[0].classList.add('d-none');
                    }
                    document.getElementsByClassName('loading-overlay')[0].classList.remove('is-active');
                });
        }
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
        const self = this;
        async function getWeather() {
            const weathe = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${self.state.latitude}&lon=${self.state.longitude}&appid=e3673496a0cd9a518ab1e2578d148fe9`);
            self.setState({ weather: weathe.data })
            self.setState({ currentTemp: weathe.data.main.temp })
            self.setState({ windSpeed: weathe.data.wind.speed })
            self.setState({ humidity: weathe.data.main.humidity })
            self.setState({ weatherDescription: weathe.data.weather[0].main })
        }
        getWeather();

        function formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return strTime;
        }
        self.setState({currentTime: formatAMPM(new Date)})
    }
    render() {
        return (
            <>
                <div className="loading-overlay">
                    {/* <span className="fas fa-spinner fa-3x fa-spin"></span> */}
                    <img className="profile_img infinity-loop" src={window ? `${GURL.SERVER_IMAGES}logo-n.png` : null} style={{ width: '65px' }} alt="profile_img" />
                </div>
                <Header />
                <br />
                <Heading matched={this.state.postData ? this.state.postData.length : 'Sorry for inconvenience, No'} where={this.props.match.params.id} type={'Hotels'} between={'Near'} />
                <div className="loading-overlay">
                    <span className="fas fa-spinner fa-3x fa-spin"></span>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 col-sm-12 col-xs-12">
                        <div className="card p-4">
                            <div className="d-flex">
                                <h6 className="flex-grow-1">{this.props.match.params.id}</h6>
                                <h6>{this.state.currentTime?this.state.currentTime:''}</h6>
                            </div>
                            <div className="d-flex flex-column temp mt-5 mb-3">
                                <h1 className="mb-0 font-weight-bold" id="heading"> {(this.state.currentTemp - 273).toFixed(2)}° C </h1> <span className="small grey">{this.state.weatherDescription ? this.state.weatherDescription : ''}</span>
                            </div>
                            <div className="d-flex">
                                <div className="d-flex align-items-center justify-content-between temp-details flex-grow-1">
                                    <p className="my-1"> <img src="https://i.imgur.com/B9kqOzp.png" height="17px" /> <span> {this.state.windSpeed ? this.state.windSpeed : ''} km/h </span> </p>
                                    <p className="my-1"> <i className="fa fa-tint mr-2" aria-hidden="true" style={{ color: '#737480' }}></i> <span> {this.state.humidity ? this.state.humidity : ''}% </span> </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="notification">
                    <div className="container">
                        <div className="row">
                            {this.state.postData ? this.state.postData : null}
                        </div>
                        <div className="page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
                                activeClassName={"active"} />
                        </div>
                    </div>
                </section>
                <HFooter />
            </>
        )
    }
}


