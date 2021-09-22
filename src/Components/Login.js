import {React, useEffect, useState} from 'react';
import logo from '../images/logo-n.png';
import {NavLink, useHistory} from 'react-router-dom';
import GLogin from './SubComp/GoogleLogin';
import axios from 'axios';
import GURL from '../GURL';
import { type } from 'jquery';
function Login() {
    const history = useHistory();
    useEffect(async()=>{
        const loggedIn = localStorage.getItem('loggedInUser');
        if(loggedIn!==null){
            history.push('./')
        }else{
            document.getElementsByClassName('loading-overlay')[0].classList.remove('d-flex');
        }
    }, [])
    const handleSubmit = async (event) => {

        event.preventDefault()
        const data = event.target;
        let req = {
            app_user_email: data.email.value,
            app_user_password: data.password.value,
        }
        const res = await axios.post(`${GURL.BASEURL}loginUser`, req);
        if(res.data.status !== false){
            let User = res.data.data;
            delete User.app_user_password;
            let SetUser = JSON.stringify(User);
            localStorage.setItem('loggedInUser', SetUser);
            history.push('./')
        }else{
            document.getElementsByClassName('response')[0].classList.remove('d-none');
            setTimeout(function(){
                document.getElementsByClassName('response')[0].classList.add('d-none');
                document.getElementsByClassName('loading-overlay')[0].classList.add('is-active');
                window.location.reload()
            }, 1500)
        }

    }

    const disableBtn = (event) => {
        event.target.classList.add('d-none');
        const loader = event.target.parentElement.nextSibling;
        loader.classList.remove('d-none');
    }

    return (
        <>
            <div className="loading-overlay d-flex">
                <span className="fas fa-spinner fa-3x fa-spin"></span>
            </div>
            <br />
            <section className="login">
                <div className="container login-container">
                    <div className="logo-c">
                        <img src={logo} alt="logo" className="logo"/>&nbsp;<h1 className="pt-2"><span>Easy</span><span>Stay</span></h1>
                    </div>
                    <div className="row mt-3">
                    <div className="response text-center bg-warning p-2 d-none">
                        <label>* Check your email or password</label>
                    </div>
                        <div className="col-12 text-center">
                            <form onSubmit={handleSubmit}>
                                <div className="input-control">
                                    <input onFocus={()=>document.getElementsByClassName('go_signup')[0].classList.add('d-none')} onBlur={()=>document.getElementsByClassName('go_signup')[0].classList.remove('d-none')} type="email" className="w-100" name="email" placeholder="E-mail"/>
                                </div>
                                <div className="input-control">
                                    <input onFocus={()=>document.getElementsByClassName('go_signup')[0].classList.add('d-none')} onBlur={()=>document.getElementsByClassName('go_signup')[0].classList.remove('d-none')} type="password" autoComplete="off" className="w-100" name="password" placeholder="Password"/>
                                </div>
                                <div className="input-control">
                                    <input onClick={disableBtn} className="buttonloader btn btn-danger w-100" type="submit" value="Login"/>
                                </div>
                                <div class="spinner-border text-secondary d-none mt-3" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </form>
                            <div className="pt-2">
                                <a href="./ForgotPassword" onClick={disableBtn} className="btn btn-primary w-100 text-white">Forget your password ?</a>
                            </div>
                            <div class="spinner-border text-secondary d-none mt-3" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                            <div className="go_signup">
                                <h6>Don't have an account ? <NavLink to="/signup">Signup</NavLink></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;
