import React from 'react';
import logo from '../images/logo-n.png';
import {NavLink, useHistory} from 'react-router-dom';
import axios from 'axios';
import GURL from '../GURL';

function Signup() {

    const history = useHistory();
    const handleSubmit = async (event) => {

        event.preventDefault()
        const data = event.target;
        let req = {
            app_user_phone: data.phone.value,
            app_user_name: data.name.value,
            app_user_email: data.email.value,
            app_user_password: data.password.value,
            app_user_status: 1,
        }
        const res = await axios.post(`${GURL.BASEURL}newUserRequest`, req);
        console.log(res);
        if(res.data.status == true){
            let User = res.data.data;
            let SetUser = JSON.stringify(User);
            localStorage.setItem('loggedInUser', SetUser);
            history.push('./')
        }else if(res.data.status=='userexisted'){
            document.getElementsByClassName('response')[0].classList.remove('d-none');
            document.getElementsByClassName('spinner-border')[0].classList.add('d-none');
            setTimeout(()=>{
                document.getElementsByClassName('response')[0].classList.add('d-none');
                window.location.reload()
            }, 1500);
        }

    }

    const disableBtn = (event) => {
        event.target.classList.add('d-none');
        const loader = event.target.parentElement.nextSibling;
        loader.classList.remove('d-none');
    }

    return (
        <>  
            <div className="m-3">
                <img src={logo} alt="logo" style={{width:45, height:52}} className="logo"/>
            </div>
            <section className="login">
                <div className="container login-container">
                    <div className="response input-control mt-3 d-none">
                        <input className="btn btn-danger w-100 text-white" style={{fontSize:12}} type="submit" value="User with same Email or Password already exist"/>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12 text-center">
                            <form onSubmit={handleSubmit} autoComplete="off">
                                <div className="input-control">
                                    <input required="required" onFocus={()=>document.getElementsByClassName('go_signup')[0].classList.add('d-none')} onBlur={()=>document.getElementsByClassName('go_signup')[0].classList.remove('d-none')} type="text" className="w-100" name="name" placeholder="Full Name"/>
                                </div>
                                <div className="input-control">
                                    <input required="required" onFocus={()=>document.getElementsByClassName('go_signup')[0].classList.add('d-none')} onBlur={()=>document.getElementsByClassName('go_signup')[0].classList.remove('d-none')} type="email" className="w-100" name="email" placeholder="E-mail"/>
                                </div>
                                <div className="input-control">
                                    <input required="required" onFocus={()=>document.getElementsByClassName('go_signup')[0].classList.add('d-none')} onBlur={()=>document.getElementsByClassName('go_signup')[0].classList.remove('d-none')} type="text" className="w-100" name="phone" placeholder="Phone No."/>
                                </div>
                                <div className="input-control">
                                    <input required="required" onFocus={()=>document.getElementsByClassName('go_signup')[0].classList.add('d-none')} onBlur={()=>document.getElementsByClassName('go_signup')[0].classList.remove('d-none')} type="password" className="w-100" name="password" placeholder="Password"/>
                                </div>
                                <div className="input-control">
                                    <input onClick={disableBtn} onFocus={()=>document.getElementsByClassName('go_signup')[0].classList.add('d-none')} onBlur={()=>document.getElementsByClassName('go_signup')[0].classList.remove('d-none')} className="btn btn-info w-100 text-white" type="submit" value="Sign Up"/>
                                </div>
                                <div class="spinner-border text-secondary d-none mt-3" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </form>
                            <div className="go_signup">
                                <h6>Already A Member ? <NavLink to="/login">Login</NavLink></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup;
