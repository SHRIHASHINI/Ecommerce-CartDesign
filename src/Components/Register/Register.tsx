// import React from "react";
import './Register.css';
import Img from '../../assets/images/signupicon.png';
import Logoimg from '../../assets/images/logo.png';
import { useState } from 'react';
import Nameicon from '../../assets/images/nameicon.png';
import {API_URL} from '../API_URL';
import Phoneicon from '../../assets/images/phoneicon.png';
import Emailicon from '../../assets/images/emailicon.png';
import Passwordicon from '../../assets/images/passwordicon.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { Form } from 'react-router-dom';
interface formdata
{
    name:string,
    email:string,
    phone:number,
    password:string,
    repassword:string
}
function Register() {
    const [FormData, setFormData]=useState<formdata>({
        name:"",
        email:"",
        phone:0,
        password:"",
        repassword:""
    })
    const handleChange=(e:any)=>{
        const {name,value}=e.target;
        setFormData({
            ...FormData,
            [name]:value
        })
    }
    
    const postData=async ()=>{
        await axios.post(API_URL,FormData)
        navigator('/')
    }
    
    const validate = (e:any)=>{
        e.preventDefault()
        postData()
    }
    const navigator=useNavigate()
    return (
        <div className="main">
            <div className='logo'>
                <button onClick={()=>{navigator('/')}}>Back</button>
            </div>
            <div className="Container">
                <div className="top-container">
                    <div className='image-container'>
                        <img src={Img}/>
                    </div>
                    <h1>Sign Up</h1>
                </div>
                <div className="bottom-container">
                        <form onSubmit={validate}>
                        <div className="form-content">
                            <div className="input-box">
                                <div className="input-content1">
                                    <div className="icon-container">
                                        <img src={Nameicon}/>
                                    </div>
                                    <label>Name</label>
                                </div>
                                <div className="input-content2">
                                    <input
                                        type="text"
                                        name="name"
                                        value={FormData.name}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="input-box">
                                <div className="input-content1">
                                    <div className="icon-container"><img src={Phoneicon}/></div>
                                    <label>Phone</label>
                                </div>
                                <div className="input-content2">
                                    <input
                                        type="number"
                                        name="phone"
                                        value={FormData.phone}
                                        onChange={handleChange} />
                                </div>
                            </div>

                            <div className="input-box">
                                <div className="input-content1">
                                <div className="icon-container">
                                        <img src={Emailicon}/>
                                    </div>
                                    <label>Email</label>
                                </div>
                                <div className="input-content2">
                                    <input
                                        type="email"
                                        name="email"
                                        value={FormData.email}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="input-box">
                                <div className="input-content1">
                                <div className="icon-container">
                                        <img src={Passwordicon}/>
                                    </div>
                                    <label>Password</label>
                                </div>
                                <div className="input-content2">
                                    <input
                                        type="password"
                                        name="password"
                                        value={FormData.password}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="input-box">
                                <div className="input-content1">
                                    <label>Re-Enter Password</label>
                                </div>
                                <div className="input-content2">
                                    <input
                                        type="password"
                                        name="repassword"
                                        value={FormData.repassword}
                                        onChange={handleChange} />
                                </div>
                            </div>
                            <div className="input-box">
                                <button type='submit' onClick={postData} disabled={FormData.password===FormData.repassword ? false : true}>Register</button>
                            </div>
                            </div>
                        </form>
                   
                </div>
            </div>

        </div>
    )
}
export default Register