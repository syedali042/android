import {React, useEffect, useState} from 'react';
import logo from '../images/logo-n.png';
import {NavLink, useHistory} from 'react-router-dom';
import axios from 'axios';
import GURL from '../GURL';
import avatar from './../images/avatar.png';
import Header from './SubComp/Header';
import HFooter from './SubComp/Hfooter';

function EditProfile() {

    const history = useHistory();

    const [UserInfo, SetUserInfo] = useState([]);

    useEffect( async ()=> {

        const userString = localStorage.getItem('loggedInUser');
        const user = JSON.parse(userString);
        SetUserInfo(user);

    }, [])

    const handleSubmit = async (event) => {

        event.preventDefault()
        const data = event.target;
        let req = {
            app_user_id: UserInfo.app_user_id,
            app_user_phone: data.phone.value,
            app_user_name: data.name.value,
            app_user_email: data.email.value,
        }
        const res = await axios.post(`${GURL.BASEURL}updateUserProfile`, req);
        if(res.data.status == true){
            document.getElementsByClassName('response')[0].classList.remove('d-none');
            let User = res.data.data;
            let SetUser = JSON.stringify(User);
            localStorage.setItem('loggedInUser', SetUser);
            setTimeout(function(){
                history.push('./account');
            }, 1000)
        }

    }

    const uploadUserImage = async (event) => {
        var data = new FormData();
        data.append('main_image', event.target.files[0]);
        data.append('action', 'user_image');
        data.append('app_user_id', UserInfo.app_user_id);
        const res = await axios.post(`${GURL.BASIC_AJAX}`, data);
        if(res){
            const user = await axios.post(`${GURL.BASEURL}getUserById`, {app_user_id:UserInfo.app_user_id});
            let User = user.data.data;
            let SetUser = JSON.stringify(User);
            localStorage.setItem('loggedInUser', SetUser);
            setTimeout(function(){
                history.push('./account');
            }, 1000)
        }
    }

    return (
        <>
            <Header />
            <section className="login">
                <div className="container mt-3">
                    <div className="response input-control mt-3 d-none">
                        <input className="btn btn-info w-100 text-white" style={{fontSize:12}} type="submit" value="Changes Saved "/>
                    </div>
                    <div className="row text-center">
                        <div className="profile col">
                            <label for="changeProfile">
                                <img className="profile_img" src={UserInfo.app_user_image?`${GURL.SERVER_APP_IMAGES}userImages/${UserInfo.app_user_image}`:avatar} alt="profile_img"/>
                                <h5>Change Profile</h5>
                            </label>
                        </div>
                        <input type="file" onChange={uploadUserImage} className="d-none" id="changeProfile" name="app_user_image" defaultValue={UserInfo.app_user_image}/>
                    </div>
                    <div className="row mt-1">
                        <div className="col-12 text-center">
                            <form onSubmit={handleSubmit}>
                                <div className="input-control">
                                    <input style={{textAlign:'left'}} defaultValue={UserInfo.app_user_name} type="text" autoComplete="off" className="w-100" name="name" placeholder="Full Name"/>
                                </div>
                                <div className="input-control">
                                    <input style={{textAlign:'left'}} defaultValue={UserInfo.app_user_email} type="email" className="w-100" name="email" placeholder="E-mail"/>
                                </div>
                                <div className="input-control">
                                    <input style={{textAlign:'left'}} defaultValue={UserInfo.app_user_phone} type="text" autoComplete="off" className="w-100" name="phone" placeholder="Phone No."/>
                                </div>
                                <div className="input-control">
                                    <input className="btn btn-info w-100 text-white" type="submit" value="Save Changes"/>
                                </div>
                                {/* <div className="input-control">
                                    <input onClick={()=>history.push('./UpdatePassword')} className="btn btn-primary w-100 text-white" value="Change Password"/>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <HFooter />
        </>
    )
}

export default EditProfile;
