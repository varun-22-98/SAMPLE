import React from 'react';
import tcs from '../images/tcs.png';
import { getAuth, signOut } from "firebase/auth";
import authinit from './authinit.js';
import {useNavigate} from 'react-router-dom'
import './Navbar.css';
import Demand from './Demand';
import Supply from './Supply';
import Email from './Email';



export default function NavBarDashboad({tabledata}) {
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
<>  
    <nav className="navbar dark1 text-white fixed-top">
    <div className="container-fluid">



        <button className="navbar-toggler px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list text-white" style={{border:"2px solid white", padding:"0px 4px", borderRadius:"5px"}}></i>
        </button>

        
            
        <a className="navbar-brand mr-auto col-3" href="#!"><img className="px-3 med1" src={tcs} alt="TCS-logo" height="60" width="250"/></a>
        
        <div className="col-md-1"></div>
        
        <div className="col-5 col-md-6">
            <h4 className="h41"> Onboarding and customer communications (OCC) </h4>
        </div>

        <button className="btn btn-danger button11 col-2 col-md-1" onClick={() => onLogout()}> Logout </button>
    </div>
</nav>

 <div className="collapse togg1" id="navbarToggleExternalContent">
    <div className="container-fluid text-white">
        {/* <div className="row mx-5 ">
            <div className="col-3 col-md-3 padd1 ml-auto"><Demand/> </div>
             <div className="col-5  col-md-6 padd1"> </div> 
            <div className="col -3 col-md-3 .offset-md-4 padd1"><Supply/> </div>
            
        </div> */}
         <div className="row ">
            <div className="col-6 col-md offset-md-1 padd11"><Demand/> </div>
            <div className="col-6 col-md offset-md-1 padd11"><Supply/> </div>
            <div className="col-6 col-md offset-md-1 padd11"><Email tabledata={tabledata}/> </div>
            
        </div>
    </div>
</div>
</>

  );
}
