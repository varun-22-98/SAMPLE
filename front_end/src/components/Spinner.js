import React from "react";
import loading from '../images/loading1.gif';
import './spinner.css';

export default function Spinner(){
    return(
        <>
            {/* <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={loading} alt="Loading........"/>
                    </div>
                </div>
            </div> */}

            <div className="container d-md-none">
                <div className="row" style={{marginLeft:"65px",marginTop:"250px"}}>
                    {/* <div className="col-"></div> */}
                    <div className="col-4">
                        <div className="d-md-none">
                            <button class="btn btn-white text-success btn-outline-success fw-bold"  type="button" disabled style={{fontSize:"50px"}}>
                                <span class="spinner-border spinner-border-md" role="status" aria-hidden="true"></span>
                                Loading...
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="load">
            
            </div>
            {/* <div>
                <hr className="new"></hr>
            </div> */}
                
            <div className="progress" >
            {/* style={{width:"500px", marginLeft:"450px"}} */}
                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "100%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    )
}