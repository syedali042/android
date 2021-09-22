import {React, useEffect, useState} from 'react';
import logo from '../images/logo-n.png';
import {NavLink, useHistory} from 'react-router-dom';
import GLogin from './SubComp/GoogleLogin';
import axios from 'axios';
import GURL from '../GURL';
import { type } from 'jquery';
function ForgotPassword() {
    const history = useHistory();
    const [Email, SetEmail] = useState();

    const handleSubmit = async (event) => {

        event.preventDefault()
        const data = event.target;
        let req = {
            app_user_email: data.email.value,
        }
        const res = await axios.post(`${GURL.BASEURL}updateUserCc`, req);
        if(res.data.status == true){

            SetEmail(req.app_user_email);
            document.getElementsByClassName('form-one')[0].classList.add('d-none');
            document.getElementsByClassName('form-two')[0].classList.remove('d-none');
        }else{
            window.location.reload();
        }

    }

    const handleSubmit2 = async (event) => {

        event.preventDefault()
        const data = event.target;
        let req = {
            app_user_email: Email,
            app_user_cc:data.cc.value
        }
        const res = await axios.post(`${GURL.BASEURL}passReset`, req);
        
        if(res.data.status == true){
            document.getElementsByClassName('form-two')[0].classList.add('d-none');
            document.getElementsByClassName('form-three')[0].classList.remove('d-none');
        }else{
            window.location.reload();
        }

    }

    const handleSubmit3 = async (event) => {


        event.preventDefault()
        const data = event.target;
        console.log(data.np.value)
        console.log(data.cnp.value)
        if(data.np.value==data.cnp.value){
            let req = {
                app_user_email: Email,
                app_user_password:data.np.value
            }
            const res = await axios.post(`${GURL.BASEURL}updateUserPass`, req);
            
            if(res.data.status == true){
                let User = res.data.data;
                let SetUser = JSON.stringify(User);
                localStorage.setItem('loggedInUser', SetUser);
                setTimeout(function(){
                    history.push('./');
                }, 1000)
            }else{
                window.location.reload();
            }
        }else{
            document.getElementsByClassName('changePassResponse')[0].classList.remove('d-none');
            return false;
        }

    }

    return (
        <>
            <section className="login">
                <div className="container login-container">
                    <div className="logo-c">
                        <img src={logo} alt="logo" className="logo"/>&nbsp;<h1 className="pt-2"><span>Easy</span><span>Stay</span></h1>
                    </div>
                    <br /><br />
                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <form onSubmit={handleSubmit} className="form-one">
                                <div className="input-control">
                                    <label>Enter your email address</label>
                                    <input type="email" className="w-100" name="email" placeholder="E-mail"/>
                                </div>
                                <div className="input-control">
                                    <input className="btn btn-danger w-100 submitButton" type="submit" value="Confirm Email"/>
                                </div>
                            </form>

                            <form onSubmit={handleSubmit2} className="form-two d-none">
                                <div className="input-control">
                                    <label>An email with conformation code is sent to '{Email}' Please check your mail.</label>
                                    <input type="number" className="w-100" name="cc" placeholder="Confirmation Code"/>
                                </div>
                                <div className="input-control">
                                    <input className="btn btn-danger w-100 submitButton" type="submit" value="Confirm Code"/>
                                </div>
                            </form>

                            <form onSubmit={handleSubmit3} className="form-three d-none">
                                <div className="changePassResponse d-none pb-2">
                                    New password did not matched with confirm new password
                                </div>
                                <div className="input-control">
                                    <input type="password" className="w-100" name="np" placeholder="New Password"/>
                                </div>
                                <div className="input-control">
                                    <input type="password" className="w-100" name="cnp" placeholder="Confirm New Password"/>
                                </div>
                                <div className="input-control">
                                    <input className="btn btn-danger w-100 submitButton" type="submit" value="Update Password"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ForgotPassword;
