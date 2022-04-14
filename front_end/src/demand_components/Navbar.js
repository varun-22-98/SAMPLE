import React from 'react';
import tcslogo from '../images/tcs.png';
import { getAuth, signOut } from "firebase/auth";
import authinit from './authinit.js';
import {useNavigate} from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const onLogout = () => {
    const auth = getAuth(authinit);
signOut(auth).then(() => {
  // Sign-out successful.
  navigate('/')
}).catch((error) => {
  // An error happened.
  console.log(error.message)
});
  }
 
  return (
    <nav className="navbar dark1 text-white fixed-top">
            <div className="container-fluid">
                    
                    <a className="navbar-brand mr-auto col-1" href="#!"><img className="px-3 med1" src={tcslogo} alt="TCS-logo" height="60" width="250"/></a>
                    
                    <div className="col-1 "></div>
                    
                     
                    <div className="col-5 col-md-6">
                      <h4 className="h41"> Onboarding and customer communications (OCC) </h4>
                    </div>
                   

<button className="btn btn-danger button11 col-2 col-md-1" onClick={() => onLogout()}> Logout </button>

                
            </div>
        </nav>
      // <>
      // <nav className="navbar dark text-white fixed-top">
      //       <div className="container-fluid">
                    
      //               <a className="navbar-brand mr-auto col-3" href="#!"><img className="px-3 med1" src={tcslogo} alt="TCS-logo" height="60" width="250"/></a>
                    
      //               <div className="col-1 col-md-3"></div>
                    
      //               <div className="col-7 col-md-5">
      //                   <h4> Onboarding and customer communications (OCC) </h4>
      //               </div>
      //               <div className="col-12 col-md-2">
      //               <button onClick={() => onLogout()} className="btn btn-danger">Log out</button>
      //             </div>
                
      //       </div>
      //   </nav>
 
      // </>
  );
}
