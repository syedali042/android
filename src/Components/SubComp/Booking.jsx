import axios from 'axios';
import {React, useState, useEffect} from 'react';
import FHotels from './FHotels';
import Header from './Header';
import GURL from '../../GURL'
import Hfooter from '../SubComp/Hfooter';
import {$, children} from 'jquery';

function Booking(props) {

    const room_id = props.match.params.id;
    let todayDate = new Date().toISOString().slice(0, 10)
    const [bookingRoomPrice, setBookingRoomPrice] = useState([]);
    const [bookingAdults, setBookingAdults] = useState([]);
    const [bookingChildren, setBookingChildren] = useState([]);
    const [bookingCheckIn, setBookingCheckIn] = useState([]);
    const [bookingCheckOut, setBookingCheckOut] = useState([]);
    const [bookingTotalAmount, setBookingTotalAmount] = useState([]);
    const [bookingRequestId, setBookingRequestId] = useState([]);
    const [UserInfo, SetUserInfo] = useState([]);
    const [RemainingAmount, setRemainingAmount] = useState([]);
    const [PayableAmount, setPayableAmount] = useState([]);


    useEffect( async ()=> {

        const userString = localStorage.getItem('loggedInUser');
        const user = JSON.parse(userString);
        SetUserInfo(user);

    }, [])
    const handleSubmit = async (event) => {
        
        document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active')
        event.preventDefault()
        const data = event.target;
        let req = {
            request_user_id:UserInfo.app_user_id,
            request_room_id:room_id,
            request_adults: data.request_adults.value,
            request_children: data.request_children.value,
            request_check_in_date: data.request_check_in_date.value,
            request_check_out_date: data.request_check_out_date.value,
        }
        const res = await axios.post(`${GURL.BASEURL}cd`, req);
        if(res){
            document.getElementsByClassName('success-response')[0].style.display='block';
            document.getElementsByClassName('create-booking-form')[0].style.display='none';
            const resp = res.data;
            setBookingRoomPrice(resp.room_price);
            setBookingAdults(resp.adults);
            setBookingChildren(resp.children);
            setBookingCheckIn(resp.check_in);
            setBookingCheckOut(resp.check_out);
            setPayableAmount(30/100*resp.totalAmount);
            setBookingTotalAmount(resp.totalAmount);
            setRemainingAmount(resp.totalAmount - 30/100*resp.totalAmount)
            setBookingRequestId(resp.request_id);
            document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active')
        }
    }

    const showPaymentMethod = (event) => { 
        event.preventDefault();
        let allElements = document.getElementsByClassName('methodDetails');
        let element = event.target.parentElement.nextSibling;
        for(var i=0;i<allElements.length;i++){
            if(allElements[i]!==element){
                console.log()
                allElements[i].style.display = 'none';
            }else{
                allElements[i].style.display = 'block';
            }
        }
    }

    const handlePaymentForm = async (event) =>{
        document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active')
        event.preventDefault();
        const data = event.target;
        let req = {
            booking_request_id: data.booking_request_id.value,
            payment_method: data.payment_method.value,
            payment_added: data.payment_added.value,
            total_amount: data.total_amount.value,
            deposit_amount: data.deposit_amount.value,
            transaction_id: data.transaction_id.value,
        }
        if(req.deposit_amount==PayableAmount && req.transaction_id!==''){
            const res = await axios.post(`${GURL.BASEURL}addPayment`, req);
            if(res){
                props.history.push('../notification');
            }
        }else{
            alert(`System Will Accept Just (Rs.${PayableAmount}/-) 30% Of Your Total Charges. And Transaction Id (TID) must be valid.`);
            document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active')
        }
        
    }


    return (
        <>
           <Header />
           {/* <FHotels /> */}
            <div className="loading-overlay">
                <img className="profile_img infinity-loop" src={window?`${GURL.SERVER_IMAGES}logo-n.png`:null} style={{width:'65px'}} alt="profile_img"/>    
            </div>
           <section className="booking">
               <form action="javascript://" className="create-booking-form" onSubmit={handleSubmit}>
                <div className="container">     
                    <h2>Create Room Booking</h2>
                    <div className="row pt-1">
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="adult"> Adult</label>
                            <input type="number" required="" id="adult" name="request_adults" className="form-control" min="1" max="60" placeholder="Enter No. of Adults" />
                        </div>
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="children">Children</label>
                            <input type="number" required="" id="children" name="request_children" className="form-control" min="0" max="60" placeholder="Enter No. of Children" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="check_in"> Check-In</label>
                            <input required="" type="date" id="check_in" name="request_check_in_date" className="form-control" />
                        </div>
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="check_out"> Check-Out</label>
                            <input required="" type="date" id="check_out" name="request_check_out_date" className="form-control" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <button type="submit" id="cbSubmit" className="btn btn-success w-100 btn-sm"><i className="fa fa-arrow-right"></i> Confirm Booking & Continue to payment</button>
                        </div>
                    </div>
                    <div className="response mt-2 mb-3">
                        
                    </div>
                </div>
                </form>
                <div className="container">
                <div className="success-response" style={{display: 'none'}}>
                    <div className="address p-3 bg-white">
                        <h6 className="text-dark m-0">Booking Details</h6>
                    </div>
                    <div className="p-3">
                        <div className="clearfix">
                            <p className="mb-1 text-muted">Check-In <span style={{float:'right'}} id="check_in" className="check_in float-right text-dark">{bookingCheckIn}</span></p>
                            <p className="mb-1 text-muted">Check-Out <span style={{float:'right'}} id="check_out" className="check_out float-right text-dark">{bookingCheckOut}</span></p>
                            <p className="mb-1 text-muted">Adults<span style={{float:'right'}} id="adults" className="adults float-right text-dark">{bookingAdults}</span></p>
                            <p className="mb-1 text-muted">Children<span style={{float:'right'}} id="children" className="children float-right text-dark">{bookingChildren}</span></p>
                            <p className="mb-1 text-muted">Room Price Per Day<span style={{float:'right'}} id="room_price" className="room_price float-right text-dark">Rs.{bookingRoomPrice}/-</span></p>
                            <hr />
                            <h6 className="font-weight-bold mb-0">To Pay (30%) <span style={{float:'right'}} className="float-right">Rs.<total>{PayableAmount}</total>/-</span></h6>
                            <p className="p-2 mb-0 mt-3 text-center bg-danger text-white">Remaining Amount Of <b>Rs.{RemainingAmount}</b> (70%) you'll pay to the hotel.</p>
                        </div>
                    </div>
                    <div className="address p-3 bg-white">
                        <h6 className="m-0 text-dark">Select Payment Method</h6>
                    </div>
                    <div className="p-3">
                        <div className="payment-method">
                            <a href="javascript://" onClick={showPaymentMethod} className="viewMethodDetails text-dark text-decoration-none w-100">
                                <div className="d-flex align-items-center"><img src={`${GURL.SERVER_APP_IMAGES}/bankLogos/meezan.png`} style={{width: '40px'}} />
                                    <span className="ml-3">Meezan Bank</span> <i className="icofont-rounded-right ml-auto"></i>
                                </div>
                            </a>
                            <form style={{display: 'none'}} onSubmit={handlePaymentForm} className="methodDetails mt-3" action="javascript://"  id="meezanPayment">
                                <center>
                                Transfer Rs.<total>{PayableAmount}</total>/- to following <b> Meezan Bank </b> account no
                                <h6 className="p-2"><span>02730105825637</span></h6> titled <h6 className="p-2"><span>EASY STAY ENTERPRISES</span></h6>
                                and provide the <b>Transaction Id </b> in following field

                                <input type="hidden" className="request_id" name="booking_request_id" value={bookingRequestId} />
                                <input type="hidden" name="payment_method" value="Meezan Bank Account" />
                                <input type="hidden" name="payment_added" value={todayDate} />
                                <input type="hidden" className="totalAmount" name="total_amount" value={bookingTotalAmount} />
                                <input type="number" required="" name="deposit_amount" className="form-control bg-white mt-3" placeholder="How Much Amount You Have Deposited ? " style={{width:'70%'}} />
                                <input type="number" required="" className="form-control bg-white mt-3 transaction_id" name="transaction_id" style={{width: '70%'}} placeholder="Transaction ID : " />
                                <input type="submit" className="btn btn-dark btn-sm mt-2" value="Confirm Payment" />
                                </center>
                            </form>
                        </div>
                        <hr />
                        <div className="payment-method">
                            <a href="javascript://" onClick={showPaymentMethod} className="viewMethodDetails text-dark text-decoration-none w-100">
                                <div className="d-flex align-items-center"><img src={`${GURL.SERVER_APP_IMAGES}/bankLogos/albarkah.jpg`} style={{width: '40px', borderRadius: '50%'}} />
                                <span className="ml-3">Al-Baraka Bank</span> <i className="icofont-rounded-right ml-auto"></i>
                                </div>
                            </a>
                            <form style={{display: 'none'}} onSubmit={handlePaymentForm} className="methodDetails mt-3" action="javascript://"  id="albarkaPayment">
                                <center>
                                Transfer Rs.<total>{PayableAmount}</total>/- to following <b> Al-Barka </b> account no
                                <h6 className="p-2"><span>0102295480017</span></h6> titled <h6 className="p-2"><span>WAQAR UL HASSAN</span></h6>
                                and provide the <b>Transaction Id </b> in following field
                                <input type="hidden" className="request_id" name="booking_request_id" value={bookingRequestId} />
                                <input type="hidden" name="payment_method" value="Al-Barka Bank Account" />
                                <input type="hidden" name="payment_added" value={todayDate} />
                                <input type="hidden" className="totalAmount" name="total_amount" value={bookingTotalAmount} />
                                <input type="number" required="" name="deposit_amount" className="form-control bg-white mt-3" placeholder="How Much Amount You Have Deposited ? " style={{width:'70%'}} />
                                <input type="number" required="" className="form-control bg-white mt-3 transaction_id" name="transaction_id" style={{width: '70%'}} placeholder="Transaction ID : " />
                                <input type="submit" className="btn btn-dark btn-sm mt-2" value="Confirm Payment" />
                                </center>
                            </form>
                        </div>
                        <hr />
                        <div className="payment-method">
                            <a href="javascript://" onClick={showPaymentMethod} className="viewMethodDetails text-dark text-decoration-none w-100">
                                <div className="d-flex align-items-center"><img src={`${GURL.SERVER_APP_IMAGES}/bankLogos/jazzCash.png`} style={{width: '40px', borderRadius: '50%'}} />
                                <span className="ml-3">JazzCash</span> <i className="icofont-rounded-right ml-auto"></i>
                                </div>
                            </a>
                            <form style={{display: 'none'}} onSubmit={handlePaymentForm} className="methodDetails mt-3" action="javascript://"  id="jazzPayment">
                                <center>
                                Transfer Rs.<total>{PayableAmount}</total>/- to following <b> JazzCash </b> account no
                                <h6 className="p-2"><span> 0345 4450507</span></h6> titled <h6 className="p-2"><span>WAQAR UL HASSAN</span></h6>
                                and provide the <b>Transaction Id </b> in following field
                                <input type="hidden" className="request_id" name="booking_request_id" value={bookingRequestId} />
                                <input type="hidden" name="payment_method" value="JazzCash" />
                                <input type="hidden" name="payment_added" value={todayDate} />
                                <input type="hidden" className="totalAmount" name="total_amount" value={bookingTotalAmount} />
                                <input type="number" required="" name="deposit_amount" className="form-control bg-white mt-3" placeholder="How Much Amount You Have Deposited ? " style={{width:'70%'}} />
                                <input type="number" required="" className="form-control bg-white mt-3 transaction_id" name="transaction_id" style={{width: '70%'}} placeholder="Transaction ID : " />
                                <input type="submit" className="btn btn-dark btn-sm mt-2" value="Confirm Payment" />
                                </center>
                            </form>
                        </div>
                        <hr />
                        <div className="payment-method">
                            <a href="javascript://" onClick={showPaymentMethod} className="viewMethodDetails text-dark text-decoration-none w-100">
                                <div className="d-flex align-items-center"><img src={`${GURL.SERVER_APP_IMAGES}/bankLogos/easypaisa.png`} style={{width: '40px', borderRadius: '50%'}} />
                                <span className="ml-3">EasyPaisa</span> <i className="icofont-rounded-right ml-auto"></i>
                                </div>
                            </a>
                            <form style={{display: 'none'}} onSubmit={handlePaymentForm} className="methodDetails mt-3" action="javascript://"  id="easypaisaPayment">
                                <center>
                                Transfer Rs.<total>{PayableAmount}</total>/- to following <b> EasyPaisa </b> account no
                                <h6 className="p-2"><span> 0321 4450507</span></h6> titled <h6 className="p-2"><span>WAQAR UL HASSAN</span></h6>
                                and provide the <b>Transaction Id </b> in following field
                                <input type="hidden" className="request_id" name="booking_request_id" value={bookingRequestId} />
                                <input type="hidden" name="payment_method" value="EasyPaisa" />
                                <input type="hidden" name="payment_added" value={todayDate} />
                                <input type="hidden" className="totalAmount" name="total_amount" value={bookingTotalAmount} />
                                <input type="number" required="" name="deposit_amount" className="form-control bg-white mt-3" placeholder="How Much Amount You Have Deposited ? " style={{width:'70%'}} />
                                <input type="number" required="" className="form-control bg-white mt-3 transaction_id" name="transaction_id" style={{width: '70%'}} placeholder="Transaction ID : " />
                                <input type="submit" className="btn btn-dark btn-sm mt-2" value="Confirm Payment" />
                                </center>
                            </form>
                        </div>
                        <hr />
                        <div className="payment-method">
                            <a href="javascript://" onClick={showPaymentMethod} className="viewMethodDetails text-dark text-decoration-none w-100">
                                <div className="d-flex align-items-center"><img src={`${GURL.SERVER_APP_IMAGES}/bankLogos/upaisa.png`} style={{width: '40px', borderRadius: '50%'}} />
                                <span className="ml-3">U-Paisa</span> <i className="icofont-rounded-right ml-auto"></i>
                                </div>
                            </a>
                            <form style={{display: 'none'}} onSubmit={handlePaymentForm} className="methodDetails mt-3" action="javascript://"  id="upaisaPayment">
                                <center>
                                Transfer Rs.<total>{PayableAmount}</total>/- to following <b> U-Paisa </b> account no
                                <h6 className="p-2"><span> 0333 4450507</span></h6> titled <h6 className="p-2"><span>WAQAR UL HASSAN</span></h6>
                                and provide the <b>Transaction Id </b> in following field
                                <input type="hidden" className="request_id" name="booking_request_id" value={bookingRequestId} />
                                <input type="hidden" name="payment_method" value="U-Paisa" />
                                <input type="hidden" name="payment_added" value={todayDate} />
                                <input type="hidden" className="totalAmount" name="total_amount" value={bookingTotalAmount} />
                                <input type="number" required="" name="deposit_amount" className="form-control bg-white mt-3" placeholder="How Much Amount You Have Deposited ? " style={{width:'70%'}} />
                                <input type="number" required="" className="form-control bg-white mt-3 transaction_id" name="transaction_id" style={{width: '70%'}} placeholder="Transaction ID : " />
                                <input type="submit" className="btn btn-dark btn-sm mt-2" value="Confirm Payment" />
                                </center>
                            </form>
                        </div>
                        <hr />
                    </div>	
                </div>
                </div>
           </section>
           <Hfooter /> 
        </>
    )
}

export default Booking;
