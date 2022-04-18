import React, {useLayoutEffect, useState} from 'react';
import axios from 'axios';
import {Link,useLocation} from 'react-router-dom'
import Demandsupply from '../images/demandsupply1.jpg';import Cards from "../images/cards.png";
import Loans from "../images/loans.png";
import Savings from "../images/savings.jpg";
import Banking from "../images/banking.png";
import Zoomerskool from "../images/zoomerskool.png";
import Navbar from './Navbar';
import './Demandonshoreoffshore.css';

export default function Demandonshoreoffshore({Lab,Location}) {
    const location = useLocation();
    var {  demand } = location.state;
    //console.log(demand);
   // console.log(supply);
   demand = demand.filter((d) => d["Labs"] === Lab &&d["Location"]===Location);
   console.log(demand);
  return (
      <>
      <Navbar/>
      <div className='mar8' style={

    
            Lab === 'Cards' ? {backgroundImage:`url(${Cards})`} :
            ( Lab === 'Loans' ? {backgroundImage:`url(${Loans})`} :
            (Lab === 'Banking' ? {backgroundImage:`url(${Banking})`} : 
            (Lab === 'Savings' ? {backgroundImage:`url(${Savings})`} :
            (Lab === 'OIE' ? {backgroundImage:`url(${Zoomerskool})`} : 
            (Lab === 'Personalisation' ? {backgroundImage:`url(${Zoomerskool})`} : 
            (Lab === 'Digi.Comms' ? {backgroundImage:`url(${Zoomerskool})`} : 
            (Lab === 'Doc.Services' ? {backgroundImage:`url(${Zoomerskool})`} :  
            {backgroundimage:`url(${Zoomerskool})`}
            )))))))
        }>
    < div className='container-fluid '>
     
     <div className='row '>
     <div className=" ml-auto my-5 pt-5 " >
     <div >
                      <nav aria-label="breadcrumb">
                          <ol className="breadcrumb">
                              <li className="breadcrumb-item text-dark"><Link to="/DemandSupply" className='text-dark text-decoration-none'><strong>Demand and Supply Dashboard</strong></Link></li>
                              <li className="breadcrumb-item active text-dark fw-weight-bold" aria-current="page"><strong>{Lab} Demand Details</strong></li>
                          </ol>
                      </nav>
                      
                  </div>
      <div className="table-responsive mx-auto my-2  col-md-10 mar6 " >
    
     <h2 className="p4 text-center text-white"><strong>{Lab} Demand Onshore Details</strong></h2>
      
      <table className="table table-striped table-hover  table-bordered mar5 " >
      <thead className="table-dark">
      <tr>
                <th className='text-center align-center'><strong>S.no</strong></th>
                <th className='text-center align-center'><strong>Labs</strong></th>
                <th className='text-center align-center '><strong>Demand Type</strong></th>
                <th className='text-center align-center'><strong>Roles</strong></th>
                <th className='text-center align-center'><strong>Required Sklls</strong></th>
                <th className='text-center align-center'><strong>Location</strong></th>
                <th className='text-center align-center'><strong>No of Positions</strong></th>
                
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
                <td className='text-center'><strong>{d.NoofPosition}</strong></td>
                
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

