import React, {useState} from "react";
import tcs from '../images/tcs.jpg';
import './Login.css';
import authinit from './authinit.js';
import { getAuth,  sendPasswordResetEmail} from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import Navbar from "./Navbar";
import {useForm}  from "react-hook-form";
import './forgotPassword.css';

export default function ForgotPassword() {
    const {register, handleSubmit, formState:{errors}, reset, trigger} = useForm();
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
     const onChangepassword = () => {
    const auth = getAuth(authinit);
    sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
    alert('Check your mail for password reset link')
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorCode)
    // console.log(errorMessage)
    if(errorMessage==="Firebase: Error (auth/user-not-found)."){
        window.alert("("+email+")    is not found....Please enter a valid mail address")
    }
    // ..
  });
     }
    return(
    <>
<Navbar/>
            <form onSubmit={handleSubmit(onChangepassword)}>
                <div className="container-fluid pad2">
                    <div className="row">
                        
                        <div className="col-12 col-md-5 offset-md-1 col-lg-5 col-xl-3 offset-xl-1 pad3  ">
                            <h3 className="h3">Forgot Password</h3>
                            <div className="form-floating mt-4 mb-4 text-dark">
                                <input type="email" className="form-control input" id="email"  placeholder="Enter email" {...register("email",{required:"User Name is required",pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address",} })} value={email} onChange={(e) => setEmail(e.target.value)} onKeyUp={() => { trigger("email");}}/>
                                <label htmlFor="exampleInputEmpid" className='d-inline mx-3'>Email</label>
                                {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}
                            </div>
                            
                            <button type="submit"className="btn btn-warning sub" >Submit</button>
                        </div>
                      
                    </div>
                </div>
            </form>


    </>
    );
}