import React from 'react';
import authinit from './authinit.js';
import { getAuth,  createUserWithEmailAndPassword} from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import {useForm}  from "react-hook-form";

export default function RegisterUser() {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const onLogin = async (data) => {
      console.log(data);
      const auth = getAuth(authinit);
createUserWithEmailAndPassword(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    alert("New user created successfully");
    window.location.reload(false);
    navigate('/second')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert('Invalid username or password', errorCode)
    // ..
  });
    
    }

    

  return (
    <>

<button type="button" className="btn btn-primary ml-5" data-bs-toggle="modal" data-bs-target="#newUser">
  Register New User
</button>

<div className="modal fade" id="newUser" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Register New User</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div><form onSubmit={handleSubmit(onLogin)}>
      <div className="modal-body">
      
    <div >
        <div >
            <div >
                <div className="col-12 col-md-9">
                    <label htmlFor="UserName"><strong>Email ID</strong></label> <br/>
                    <input {...register("email",{required:"Email ID is required" })} type="text" id="UserName" placeholder="  Email ID" className="input"/><br/>
                    <label htmlFor="Password" className="label"><strong>Password</strong></label><br/>
                    <input {...register("password",{required:"Password is required" })} type="password" id="Password" placeholder="  Password" className="input"/><br/>
                   
                    
                </div>
            </div>
        </div>
    </div>
    
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary">Submit</button>
        
      </div>
      </form>
    </div>
  </div>
</div>

 
 
</>
  );
}
