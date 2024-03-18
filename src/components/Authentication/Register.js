import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../css/Register.css';



const Register = () => {
    let registerobj = {
        First_name: '',
        Last_name: '',
        Mobileno: '',
        Email: '',
        Password: '',
        Gender: '',
    }

    const REGISTER_USER = 'http://localhost:4300/user/register';

    let [registerform, setregisterform] = useState(registerobj);

    const navigate = useNavigate();

    const changevalue = (event) => {
        const fieldname = event.target.name;
        const value = event.target.value;

        setregisterform({ ...registerform, [fieldname]: value });
    }

    const userregister = (event) => {
        event.preventDefault();

        const reqObj = {
            first_name: registerform.First_name,
            last_name: registerform.Last_name,
            email: registerform.Email,
            mobile: registerform.Mobileno,
            gender: registerform.Gender,
            password: registerform.Password
        }

        axios.post(REGISTER_USER, reqObj).then(response => {
            if (response.data.is_user_added) {
                resetform(event);
                navigate('/login')
            }
        })
    }

    const resetform = (event) => {
        event.preventDefault();
        setregisterform(registerobj);

    }


    return (
        <>
            <div className='rejs'>

                <div className='down-carr'>
                    <h2 style={{ marginTop: '2%', }}>Register For Download The Carriculum</h2>
                </div>

                <div className="form-reg-1">
                    <form>
                        <div className={'elementContainer'}>
                            <label>First Name:</label>
                            <input type="text" name="First_name" placeholder="Enter First Name"
                                onInput={changevalue}
                                value={registerform.First_name} />
                        </div>

                        <div className={'elementContainer'} >
                            <label>Last Name:</label>
                            <input type="text" name="Last_name" placeholder="Enter last name"
                                onInput={changevalue}
                                value={registerform.Last_name} />
                        </div>

                        <div className='elementContainer'>
                            <label>Mobile no:</label>
                            <input type="text" name="Mobileno" placeholder="Enter number"
                                onInput={changevalue}
                                value={registerform.Mobileno} />
                        </div>

                        <div className={'elementContainer'}>
                            <label>City:</label>
                            <input type="text" name="city" placeholder="Enter City"
                                onInput={changevalue}
                                value={registerform.city} />
                        </div>

                        <div className={'elementContainer'}>
                            <label>Gender:</label>
                            <select name="Gender" onInput={changevalue}
                                value={registerform.Gender} required>
                                <option value={""}>select</option>
                                <option value={"male"}>male</option>
                                <option value={"Female"}>Female</option>
                                <option value={"Other"}>Other</option>
                            </select>
                        </div>

                        <div className={'d-flex justify-content-center gap-4'}>
                            <button className="btn btn-info" onClick={resetform} >Reset</button>
                            <button className="btn btn-success" onClick={userregister}>Register</button>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
export default Register;


