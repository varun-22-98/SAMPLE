import React, {useLayoutEffect, useState } from "react";
import Navbar from "../demand_components/Navbar";
import axios from 'axios';
import {Link} from 'react-router-dom'
import './Fullfilled.css';


export default function Fullfilled() {
    const [supply, setSupply] = useState([])
    
    useLayoutEffect(() => {
        axios.get('http://localhost:7000/getSupply')
        .then(response => setSupply(response.data))
        .catch((err) => {console.log(err)});
        
    }, [])
   var k= supply.filter((d)=>d["Selection_Status"]==="Selected");
   console.log(k);
  
  return (
      <>
      <Navbar/>
      <div className='container-fluid mar4'>
     
       <div className='row '>
       <div className=" ml-auto my-5 pt-5 " >
       <div >
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item text-dark"><Link to="/DemandSupply" className='text-dark text-decoration-none'><strong>Demand and Supply Dashboard</strong></Link></li>
                                <li className="breadcrumb-item active text-dark fw-weight-bold" aria-current="page"><strong>Fullfilled</strong></li>
                            </ol>
                        </nav>
                        
                    </div>
        
      
       <h2 className="p4 text-center text-white"><strong> Fullfilled Table</strong></h2>
       <div className="table-responsive mx-auto my-2  col-md-10 mar6" >
        
        <table className="table table-striped table-hover table-bordered mar5 " >
        <thead className="table-dark">
            <tr>
            <th className='text-center align-middle'><strong>S.no</strong></th>
                <th className='text-center align-middle'><strong>Source</strong></th>
                <th className='text-center align-middle'><strong>Location</strong></th>
                <th className='text-center align-middle'><strong>Employee ID</strong></th>
                <th className='text-center align-middle'><strong>Candidate Name</strong></th>
                <th className='text-center align-middle'><strong>Lab</strong></th>
                <th className='text-center align-middle'><strong>Role</strong></th>
                <th className='text-center align-middle v'><strong>Contact Number</strong></th>
                <th className='text-center align-middle'><strong>Sent For Evaluation on</strong></th>
                <th className='text-center align-middle'><strong>Received Evaluation on</strong></th>
                <th className='text-center align-middle'><strong>Evaluation Pending</strong></th>
                <th className='text-center align-middle'><strong>Evaluated By</strong></th>
                <th className='text-center align-middle'><strong> Internal Evaluation Feedback</strong></th>
                <th className='text-center align-middle'><strong>Customer Evaluation Date</strong></th>
                <th className='text-center align-middle'><strong>Customer Evaluation Feedback</strong></th>
                
            </tr>
           </thead>
           <tbody>

           {k.map((k,i)=>(
                
           
                <tr key={i}> 
                
                <td className="text-center"><strong>{i+1}</strong></td>
                <td ><strong>{k.Source}</strong> </td>
                <td ><strong>{k.Location}</strong> </td>
                <td ><strong>{k.EMPID}</strong> </td>
                <td  ><strong>{k.Candidate}</strong></td>
                <td ><strong>{k.Lab}</strong> </td>
                <td className='text-center'><strong>{k.Role1}</strong></td>
                <td className='text-center'><strong>{k.ContactNumber}</strong></td>
                <td><strong>{k.Sent_For_Evaluation_On}</strong></td>
                <td><strong>{k.Sent_For_Evaluation_On}</strong></td>
                <td><strong>{k.Received_Evaluation_On}</strong></td>
                {/* <td><strong>{}</strong></td> */}
                <td><strong>{k.Evaluated_By}</strong></td>
                <td><strong>{k.Internal_Evaluation_Feedback}</strong></td>
                <td><strong>{k.Customer_Interview_Date}</strong></td>
                <td><strong>{k.Customer_Evaluation}</strong></td>
                
            </tr>))} 
           </tbody>
           </table>
        </div>
        </div>
        </div>
        </div>
      </>
    
    
  )
}
