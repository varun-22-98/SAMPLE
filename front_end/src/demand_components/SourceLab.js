import React, {useLayoutEffect, useState} from 'react';
import Demand from './Demand';
import Supply from './Supply';
import {Link, useLocation} from 'react-router-dom'
import { RiEyeCloseFill } from 'react-icons/ri';
import Navbar from './Navbar';
import  './SourceLab.css';
import Demandsupply from '../images/demandsupply1.jpg';import Cards from "../images/cards.png";
import Loans from "../images/loans.png";
import Savings from "../images/savings.jpg";
import Banking from "../images/banking.png";
import axios from 'axios'

export default function SourceLab() {
    const location = useLocation();
  //   var {  demand,supply } = location.state;
  //   //console.log(demand);
  //  // console.log(supply);
  // //  demand = demand.filter((d) => d["Labs"] === Lab);
  //  console.log(demand);
  const [demand,setDemand]= useState([{

  }])
useLayoutEffect(() => {
    axios.get('http://localhost:7000/getdemand')
    .then(response => setDemand(response.data))
    .catch((err) => {console.log(err)});
    
}, [])
console.log(demand)

   var a=0;
   var b=0;
  
  //     if(d.Location==="Onshore" && d.RequiredSkill==="React")
  //      {
  //          a+=Number(d.NoofPosition);
  //        console.log(d);
  //      }else if(d.Location==="Offshore"&& d.RequiredSkill==="React")
  //      {
  //          b+=Number(d.NoofPosition);
  //      }
  //  }
  
   
   //console.log(d.location);
    //const 
    var Lab='Cards';
    
  return (      
    <>
     
     <Navbar/>
     <div className='mar8' style={

Lab === 'Other'? {backgroundimage:`url(${Demandsupply})`}:     
Lab === 'Cards' ? {backgroundImage:`url(${Cards})`} :
( Lab === 'Loans' ? {backgroundImage:`url(${Loans})`} :
  (Lab === 'Banking' ? {backgroundImage:`url(${Banking})`} : 
  (Lab === 'Savings' ? {backgroundImage:`url(${Savings})`} :  {backgroundimage:`url(${Demandsupply})`} )))
}>
     <div className='container-fluid '>
     
       <div className='row '>
       <div className=" ml-auto my-5 pt-5 " >
       <div >
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item text-dark"><Link to="/DemandSupply" className='text-dark text-decoration-none'><strong>Demand and Supply Dashboard</strong></Link></li>
                                <li className="breadcrumb-item active text-dark fw-weight-bold" aria-current="page"><strong>Demand Details</strong></li>
                            </ol>
                        </nav>
                        
                    </div>
        <div className="table-responsive mx-auto my-2  col-md-10 mar6" >
      
       <h2 className="p4 text-center"><strong> Demand Details</strong></h2>
        
        <table className="table table-striped table-hover table-bordered mar5 " >
        <thead className="table-dark">
            <tr>
                <th className='text-center'><strong>S.no</strong></th>
                <th className='text-center'><strong>Labs</strong></th>
                <th className='text-center'><strong>Demand Type</strong></th>
                <th className='text-center'><strong>Roles</strong></th>
                <th className='text-center'><strong>Required Sklls</strong></th>
                <th className='text-center'><strong>Location</strong></th>
                <th className='text-center'><strong>No of Positions</strong></th>
                
                
                
            </tr>
           
            
        </thead>
        <tbody>
           {demand.map((d,i)=>(
                
           
                <tr key={i}> 
                
                <td className="text-center"><strong>{i+1}</strong></td>
                <td ><strong>{d.Labs}</strong> </td>
                <td ><strong>{d.DemandType}</strong> </td>
                <td ><strong>{d.Role}</strong> </td>
                <td  ><strong>{d.RequiredSkill}</strong></td>
                <td ><strong>{d.Location}</strong> </td>
                <td><strong>{d.NoofPosition}</strong></td>
                
            </tr>))} 
            
        </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        </div>
    </>
  )
}
