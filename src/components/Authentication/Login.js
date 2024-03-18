import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/Login.css';
import { FaFacebook, FaGoogle, FaInstagram, FaLock, FaTwitter, FaUserAlt } from 'react-icons/fa';


const Login = () => {

    let [loginform, setloginform] = useState({});
    const navigate = useNavigate();

    const changevalue = (event) => {
        const fieldname = event.target.name;
        const value = event.target.value;
        setloginform({ ...loginform, [fieldname]: value });
    }



    const userlogin = (event) => {
        event.preventDefault();
        console.log(loginform);


        navigate('/Downloadpdf');


    }

    return (
        <>
            <div className="form-reg">
                <form>
                    <div className='reg-container'>
                        <h2 style={{ color: 'white' }}>Login</h2>
                        <h5 style={{ color: 'white' }}>Login here using your username & password</h5>
                    </div>

                    <div className="login-container">
                        <div className="left-side">
                            <img src="https://img.freepik.com/premium-vector/woman-working-her-desk-home-she-has-lot-work_646529-6.jpg" />
                        </div>
                        <div className="right-side">
                            <div className="input-container">
                                <br />
                                <FaUserAlt style={{ color: 'white' }} />
                                <input
                                    type="text"
                                    name="Email"
                                    placeholder="Username"
                                    onInput={changevalue}
                                    autoComplete='off'
                                />
                                <br />
                                <FaLock style={{ color: 'white' }} />
                                <input
                                    type="password"
                                    name="Password"
                                    placeholder="Password"
                                    onInput={changevalue}
                                    autoComplete='off'
                                />
                            </div>
                        </div>
                    </div>

                    <br /><br />
                    <div className='d-flex justify-content-center'>
                        <button className="btn btn-success" onClick={userlogin}>Log In</button>
                    </div>
                    <br />
                    <h5 style={{ textAlign: 'center', color: 'white' }}>Or Login with</h5>
                    <br />
                    <div className="social-icons">
                        <a href="https://www.google.com/" target="_blank" className="icon"><FaGoogle /></a>
                        <a href="https://www.facebook.com/" target="_blank" className="icon"><FaFacebook /></a>
                        <a href="https://twitter.com/" target="_blank" className="icon"><FaTwitter /></a>
                        <a href="https://www.instagram.com/" target="_blank" className="icon"><FaInstagram /></a>
                    </div>
                </form>
            </div>


        </>
    )
}

export default Login;


