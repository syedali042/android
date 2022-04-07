import axios from 'axios';
import {React, useState, useEffect} from 'react';
import Header from './SubComp/Header';
import GURL from '../GURL'
import Hfooter from './SubComp/Hfooter';

function Ad_Booking(props) {

    const adventure_id = props.match.params.id;
    let todayDate = new Date().toISOString().slice(0, 10)
    const [bookingPersonPriceTotal, setBookingPersonPriceTotal] = useState([]);
    const [bookingPersons, setBookingPersons] = useState([]);
    const [bookingAdventureCharges, setBookingAdventureCharges] = useState([]);
    const [bookingTotalAmount, setBookingTotalAmount] = useState([]);
    const [bookingRequestId, setBookingRequestId] = useState([]);
    const [UserInfo, SetUserInfo] = useState([]);

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
            request_adventure_id:adventure_id,
            request_persons: data.request_persons.value,
            request_male: data.request_male.value,
            request_female: data.request_female.value,
            request_adventure_date: data.request_adventure_date.value,
        }
        if(req.request_user_id=='' || req.request_adventure_id=='' || req.request_persons=='' || req.request_male=='' || req.request_female==''){
            alert('All Fields Are Required');
            document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active')
        }else{
            
            const res = await axios.post(`${GURL.BASEURL}cd`, req);
            if(res){
                document.getElementsByClassName('success-response')[0].style.display='block';
                document.getElementsByClassName('create-booking-form')[0].style.display='none';
                const resp = res.data;
                setBookingPersonPriceTotal(resp.person_price);
                setBookingPersons(resp.persons);
                setBookingAdventureCharges(resp.adventure_charges);
                setBookingTotalAmount(resp.total_price);
                setBookingRequestId(resp.request_id);
                document.getElementsByClassName('loading-overlay')[0].classList.toggle('is-active')
            }
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
            booking_adventure:true,
            booking_request_id: data.booking_request_id.value,
            payment_method: data.payment_method.value,
            payment_added: data.payment_added.value,
            total_amount: data.total_amount.value,
            deposit_amount: data.deposit_amount.value,
            transaction_id: data.transaction_id.value,
        }
        const res = await axios.post(`${GURL.BASEURL}addPayment`, req);
        if(res){
            props.history.push('../notification');
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
                    <h2>Create Adventure Booking</h2>
                    <div className="row pt-1">
                        {/* (Maximum 20 Persons) */}
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="adult"> Persons</label> 
                            <input type="number" required="" id="adult" name="request_persons" className="form-control" min="0" max="20" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="adult"> Male Members</label>
                            <input type="number" required="" id="adult" name="request_male" className="form-control" min="0" max="60" />
                            <small>Leave Zero (0) if no individual</small>
                        </div>
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="children">Female Members</label>
                            <input type="number" required="" id="children" name="request_female" className="form-control" min="0" max="60" />
                            <small>Leave Zero (0) if no individual</small>
                        </div>
                        <div className="col-md-12 pb-3 col-12 form-group">
                            <label for="date">Choose Your Adventure Date</label>
                            <input type="date" required="" id="date" name="request_adventure_date" className="form-control" />
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
                            <p className="mb-1 text-muted">Persons <span style={{float:'right'}} id="persons" className="persons float-right text-dark">{bookingPersons}</span></p>
                            <p className="mb-1 text-muted">Charges Per Person <span style={{float:'right'}} id="adventure_charges" className="adventure_charges float-right text-dark">Rs.{bookingAdventureCharges}/-</span></p>
                            <p className="mb-1 text-muted">Total Person Charges<span style={{float:'right'}} id="person_price" className="person_price float-right text-dark">Rs.{bookingPersonPriceTotal}/-</span></p>
                            <hr />
                            <h6 className="font-weight-bold mb-0">TO PAY <span style={{float:'right'}} className="float-right">Rs.<total>{bookingTotalAmount}</total>/-</span></h6>
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
                                Transfer Rs.<total>{bookingTotalAmount}</total>/- to following <b> Meezan Bank </b> account no
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
                                Transfer Rs.<total>{bookingTotalAmount}</total>/- to following <b> Al-Barka </b> account no
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
                                Transfer Rs.<total>{bookingTotalAmount}</total>/- to following <b> JazzCash </b> account no
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
                                Transfer Rs.<total>{bookingTotalAmount}</total>/- to following <b> EasyPaisa </b> account no
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
                                Transfer Rs.<total>{bookingTotalAmount}</total>/- to following <b> U-Paisa </b> account no
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

export default Ad_Booking;
