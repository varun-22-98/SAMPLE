import React from "react";
import zoomerskool from "../images/zoomerskool.png";
import NavBarDashboad from "./NavBarDashboad";
import './SecondPage.css';
import {Link} from 'react-router-dom'


export default function SecondPage(){
    return(
        <>
            <NavBarDashboad/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6 contain">
                        <Link to="/dashboard">
                        <img src={zoomerskool} alt="emp_details" width="670px" height="662px" className="image" />
                        <div className="overlay">
                            <div className="text">Employee Details</div>
                        </div>
                        </Link>
                    </div>
                    <div className="col-12 col-md-6 contain1">
                        <Link to='/demand'>
                        <img src={zoomerskool} alt="emp_details" width="670px" height="662px" className="image1" />
                        <div className="overlay1">
                            <div className="text1">Demand and Supply </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            
        </>
    )
}