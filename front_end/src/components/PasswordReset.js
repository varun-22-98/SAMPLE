import React, {useState} from 'react'
import authinit from './authinit.js';
import { getAuth,  sendPasswordResetEmail} from "firebase/auth";
import {useNavigate} from 'react-router-dom';

export default function PasswordReset() {
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
    console.log(errorCode)
    console.log(errorMessage)
    // ..
  });
  }
    return (
        <div>
            <h1>Password Reset</h1>
            <input type="email" placeholder="Enter the Email ID" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={onChangepassword}>Get Password Reset Link</button>
        </div>
    )
}
