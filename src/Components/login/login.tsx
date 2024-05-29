import { useState } from "react";
import Loginimg from "../../assets/images/loginpageimg.jpg";
import "./login.css";
import Logo from '../../assets/images/logo.png';
import { API_URL } from "../API_URL";
import axios from 'axios';
import Emailicon from '../../assets/images/email.png';
import Password from '../../assets/images/password.png';
import { useNavigate } from "react-router-dom";
interface logindata {
    email: string,
    password: string
}
interface formdata {
    email: string,
    password: string
}
function Login() {
    const [ReadData, setReadData] = useState<formdata[]>([])
    const getData = async () => {
        const read = await axios.get(API_URL)
        setReadData(read.data)
        console.log(read.data)
    }
    const [LoginData, setLoginData] = useState<logindata>
        ({
            email: "",
            password: ""
        })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setLoginData({
            ...LoginData,
            [name]: value
        })
    }
    const navigate = useNavigate()
    const handleSubmit = (e:any) => {
        
        getData()
        ReadData.map((item: any) => {
            if ((item.email === LoginData.email) && (item.password === LoginData.password)) {
                console.log("true")
                navigate('/')
            }
            else {
                if((item.email && LoginData.email) == "false")
                    {
                        alert("Please Enter the valid email")
                    }
                else if((item.password && LoginData.password) == "false"){
                        alert("Please Re-Enter the password")
                    }
                    else{
                        alert("Please Enter the valid inputs")
                    }
            }
        })
    }
    return (
        
        <div className="main-login">

            <div className="Container-login">

                <div className="image-container-login">
                    <div className="Image-login">
                        <img src={Loginimg} />
                    </div>
                    <h5>Get access to your Orders, Wishlists and Recommendations</h5>
                </div>
                <div className="content-container-login">
                    <form onSubmit={handleSubmit} className="form-login" autoComplete="off">
                        <div className="heading-login">
                            <div className="logo-login">
                                <img src={Logo} />
                            </div>
                            <h1>Sign in</h1>
                        </div>
                        <div className="inputbox-login">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email ID"
                                value={LoginData.email}
                                onChange={handleChange} />
                            <img src={Emailicon} />
                        </div>
                        <div className="display-block">
                            <div className="inputbox-login">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={LoginData.password}
                                    onChange={handleChange} />
                                <img src={Password} />
                            </div>
                            <div className="display-password">
                                <p>{LoginData.password}</p>
                            </div>
                        </div>
                       
                        <div className="heading-login">
                            <button>Login</button>
                        </div>
                        <div className="inputbox-login">
                            <span>Don't have an account? <a href="/signup">Register</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login