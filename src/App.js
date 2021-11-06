import {React, useEffect, useState} from "react";
import { Switch,Route , useHistory} from "react-router-dom";
import Home from "./Components/Home";
import CheckAvailability from "./Components/checkAvailability";
import ExplorePlaces from "./Components/explorePlaces";
import Home2 from "./Components/Home2";
import Listings from "./Components/Listings";
import Hotel from "./Components/Hotel";
import Login from "./Components/Login";
import notification from "./Components/Notifications";
import Signup from "./Components/Signup";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import Booking from "./Components/SubComp/Booking";
import BookingDetails from "./Components/BookingDetails";
import Notification_Details from "./Components/Notification_Details";
import Loader from "./Components/Loader";
import Tour_Listing from "./Components/Tour_Listing";
import Tour_Details from "./Components/Tour_Details";
import Tour_Bookings from "./Components/Tour_Bookings";
import Tour_Booking_Details from "./Components/Tour_Booking_Details";
import Adventure_Listing from "./Components/Adventure_Listing";
import Ad_Details from "./Components/Ad_Details";
import Ad_Booking from "./Components/Ad_Booking";
import AdBookingDetails from "./Components/Ad_Booking_Details";
import PlacesListing from "./Components/PlacesListing";
import Places_Details from "./Components/Places_Details";
import TourComDetails from "./Components/TourComDetails";
import AdComDetails from "./Components/AdComDetails";
import Account from "./Components/Account";
import HotelBookings from "./Components/hotelBookings";
import TourBookings from "./Components/tourBookings";
import AdventureBookings from "./Components/adventureBookings";
import JoinUs from "./Components/SubComp/joinus";
import ForgotPassword from "./Components/ForgotPassword";
import EditProfile from "./Components/EditProfile";
import CountdownApp from "./Components/SubComp/Counter";
import Sidebar2 from "./Components/SubComp/Sidebar2";
import {
  Plugins,
  Capacitor
} from '@capacitor/core'


function App() {

  const history = useHistory();
  const [LoginUser, SetLoginUser] = useState([]);

  useEffect(()=>{
    authenticateUser();
    
    
  }, [])

  const authenticateUser = () => {
      const user = localStorage.getItem('loggedInUser');
      let location = window.location.href;
      const getLastItem = location => location.substring(location.lastIndexOf('/') + 1);
      const page = getLastItem(location);
      if(user){
        SetLoginUser(JSON.parse(user));
      }else if(page==='ForgotPassword'){
        
        
      }else{
        history.push('./login');
      }
  }

  useEffect(() => {
    if (Capacitor.isNative) {
       Plugins.App.addListener('backButton', e => {
          // Use of location.pathname is also correct
          if (window.location.pathname === '/') {
                Plugins.App.exitApp();
          } else if (window.location.pathname === "/Home") {
            // Show A Confirm Box For User to exit app or not
               Plugins.App.exitApp();
         } else {
             history.goBack()
          }
       })
    }
 }, [])
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function handleTouchStart(e) {
      setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
      setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
      if (touchStart - touchEnd > 50) {
          // do your stuff here for left swipe
          // moveSliderRight();
          document.getElementById('offcanvasRight').addEventListener('show.bs.offcanvas', function(){

          });
          console.log('working')
      }

      if (touchStart - touchEnd < -50) {
          // do your stuff here for right swipe
          document.getElementById('offcanvasRight').addEventListener('show.bs.offcanvas', function(){

          })
          console.log('working')
          // moveSliderLeft();
      }
  }


  return (
    <>
    
      {LoginUser ? 
      <Switch>
        {/* <Route path="*" exact component={Home2}/> */}
        <Route path="/" exact component={Home}/>
        <Route path="/listings/:id" exact component={Listings}/>
        <Route path="/checkAvailability/" exact component={CheckAvailability}/>
        <Route path="/explorePlaces/" exact component={ExplorePlaces}/>
        <Route path="/portal/:id" exact component={Hotel}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/booking/:id" exact component={Booking}/>
        <Route path="/booking_details/:id" exact component={BookingDetails}/>
        <Route path="/notification" exact component={notification}/>
        <Route path="/notification_details" exact component={Notification_Details}/>
        <Route path="/loader" exact component={Loader}/>
        <Route path="/tour_listings/:id" exact component={Tour_Listing}/>
        <Route path="/tour_details/:id" exact component={Tour_Details}/>
        <Route path="/tour_bookings/:id" exact component={Tour_Bookings}/>
        <Route path="/tour_booking_details/:id" exact component={Tour_Booking_Details}/>
        <Route path="/adventure_listing/:id" exact component={Adventure_Listing}/>
        <Route path="/adventure_details/:id" exact component={Ad_Details}/>
        <Route path="/adventure_booking/:id" exact component={Ad_Booking}/>
        <Route path="/adventure_booking_details/:id" exact component={AdBookingDetails}/>
        <Route path="/places_listing/:id" exact component={PlacesListing}/>
        <Route path="/places_details" exact component={Places_Details}/>
        <Route path="/tour_company_details" exact component={TourComDetails}/>
        <Route path="/EditProfile" exact component={EditProfile}/>
        <Route path="/adventure_company_details" exact component={AdComDetails}/>
        <Route path="/account" exact component={Account}/>
        <Route path="/hotelBookings" exact component={HotelBookings}/>
        <Route path="/tourBookings" exact component={TourBookings}/>
        <Route path="/adventureBookings" exact component={AdventureBookings}/>
        <Route path="/joinUs" exact component={JoinUs}/>
        <Route path="/Counter" exact component={CountdownApp}/>
        <Route path="/SideBar2" exact component={Sidebar2}/>
      </Switch>
      : history.push('./login')}
      <Switch>
        <Route path="/ForgotPassword" exact component={ForgotPassword}/>
      </Switch>
    </>
  );
}

export default App;
