import React, { useEffect } from 'react';
import {useForm}  from "react-hook-form";
import {useNavigate} from "react-router-dom";
import './Login.css';
import authinit from './authinit.js';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged,  setPersistence, browserSessionPersistence } from "firebase/auth";
import tcs from '../images/tcs.png';
import Navbar from "./Navbar";

export default function Login() {
  const {register, handleSubmit, formState:{errors}, reset, trigger} = useForm();
  const navigate = useNavigate();
  const onLogin = async (data) => {
    console.log(data);
    const auth = getAuth(authinit);
    setPersistence(auth, browserSessionPersistence)
    .then(()=>{
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        switch (errorCode) {
          case "auth/wrong-password":
            alert("Invalid Password")
            break;
          case "auth/user-not-found":
            alert("Invalid Email")
            break;
          case "auth/invalid-email":
            alert("Invalid Email")
            break;
          default:
            alert(errorCode)
        }
        console.log(errorCode)
      });
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }


  const authListener = () => {
    const auth = getAuth(authinit);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // ...
        console.log("Signed In")
        navigate(`/dashboard`, {state: user.email})
        
      } else {
        // User is signed out
        // ...
        console.log("Signed Out")
      }
  });
  }
  
 

  useEffect(() => {
    authListener();
  },[]);

  return (
    <>
    <Navbar/>
            <form onSubmit={handleSubmit(onLogin)}>
                <div className="container-fluid pad"  >
                {/* style ={myStyle} */}
                    <div className="row">
                        <div className="col-12 col-md-5 offset-md-4 col-lg-5 col-xl-3 offset-xl-2 pad1">
                            <h3 className="h3">LOG IN</h3>
                            <div className="form-floating mt-4 mb-4 text-dark">
                                <input type="email" className="form-control input" id="email"  placeholder="Enter email" {...register("email",{required:"User Name is required",pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address",} })} onKeyUp={() => { trigger("email");}}/>
                                <label htmlFor="exampleInputEmpid" className='d-inline mx-3'>Email</label>
                                {errors.email && (<small className='text-danger'>{errors.email.message}</small>)}
                            </div>
                            <div className="form-floating mt-4 mb-4 text-dark">
                                <input type="password" className="form-control input" id="password"  placeholder="Enter password" {...register("password",{required:"password is required"})} onKeyUp={() => { trigger("password");}}/>
                                <label htmlFor="password" className='d-inline mx-3'>Password</label>
                                {errors.password && (<small className='text-danger'>{errors.password.message}</small>)}
                            </div>
                            <button type="submit"className="btn btn-warning sub">Login</button>
                            <button className="button" onClick={()=>(navigate('/forgot-password'))}>Forgot Password...?</button>
                            {/* <button className="button" >Forgot Password...?</button> */}
                        </div>
                    </div>
                </div>
            </form>
    {/* <Navbar/>

    <form onSubmit={handleSubmit(onLogin)}>
    <div className="container-fluid pad1">
        <div className="row justify-content-center">
            <div className="col-12 col-md-5 row justify-content-center border1">
                <div className="col-12 col-md-9">
                    <h3 className="h3">LOG IN</h3>
                    <div className='form-group'>
                    <label htmlFor="UserName"><strong>User Name</strong></label> <br/>
                    <input {...register("email",{required:"User Name is required",pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address",} })} type="text" id="UserName" placeholder="  User Name" className="input" onKeyUp={() => { trigger("email");}}/><br/>
                    {errors.email && (<small className='text-danger mx-3'>{errors.email.message}</small>)}
                    </div>
                    <div className='form-group'>
                    <label htmlFor="Password" className="label"><strong>Password</strong></label><br/>
                    <input {...register("password",{required:"Password is required" })} type="password" id="Password" placeholder="  Password" className="input" onKeyUp={() => { trigger("password");}}/><br/>
                    {errors.password && (<small className='text-danger mx-3'>{errors.password.message}</small>)}
                    </div>
                    <button type="submit"className="btn btn-warning sub">LogIn</button>
                    <button className="button" onClick={()=>(navigate('/forgot-password'))}>Forgot Password...?</button> 
                </div>
            </div>
        </div>
    </div>
    </form> */}
</>
  )
}

