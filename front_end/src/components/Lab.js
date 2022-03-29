import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Lloyds from '../images/Lloyds.png'
import {Link, useLocation} from 'react-router-dom'
import Search from './Search'
import NavBarDashboad from './NavBarDashboad';
import './Lab.css';
import { IMAGES } from '../shared/images';
import Cards from "../images/cards.png";
import Loans from "../images/loans.png";
import Savings from "../images/savings.png";
import Banking from "../images/banking.png";
import Zoomerskool from "../images/zoomerskool.png";

export default function Lab({title}) {

    const lab2 = [
        Cards,Loans,Savings,Banking,Zoomerskool
    ]
    console.log(title);
    const location = useLocation();
    const {data} = location.state;

    // const [data, setData] = useState([{
    //     "Employee Name": " ",
    //     "Employee ID": 0
    //   }])
    
      const [query, setQuery] = useState('')
      const onQueryChange = (query) => {
        setQuery(query);
      }

    // useEffect(() => {
    //     axios.get('http://localhost:7000/getdata')
    //     .then(response => setData(response.data))
    //     .catch((err) => {console.log(err)});

    // }, [])

    if(title ==="OCC"){
        var filterdata = data;
        console.log(filterdata);
        var count = Object.keys(filterdata).length;
        var offsite = filterdata.filter((off)=> off["location"]==="Offsite");
        var offsiteCount = Object.keys(offsite).length;
        var onsite = filterdata.filter((ons)=> ons["location"]==="Onsite");
        var onsiteCount = Object.keys(onsite).length;
        // var title = "OCC";
    }
    else{
        var filterdata = data.filter((d) => d["Lab"] === title);
        var count = Object.keys(filterdata).length;
        var offsite = filterdata.filter((off)=> off["location"]==="Offsite");
        var offsiteCount = Object.keys(offsite).length;
        var onsite = filterdata.filter((ons)=> ons["location"]==="Onsite");
        var onsiteCount = Object.keys(onsite).length;
    }
    // console.log(`filterdata ${filterdata}`)
    const filtered = filterdata.filter(
        item => {
            // console.log(item)
          return (
            item.empName.toLowerCase().includes(query.toLowerCase()) ||
            item.EmpId.toLowerCase().includes(query.toLowerCase()) 
          )
        })

    const styles = {
        // backgroundImage:title
        backgroundImage:`url(${Zoomerskool})`
    }

  return (
    <>
    <NavBarDashboad/>
    <div className='pad8' style={
title === 'Cards' ? {backgroundImage:`url(${Cards})`} :
( title === 'Loans' ? {backgroundImage:`url(${Loans})`} :
  (title === 'Banking' ? {backgroundImage:`url(${Banking})`} : 
  (title === 'Savings' ? {backgroundImage:`url(${Savings})`} :  styles )))
}>
    <header className="rounded">
        <div className="container-fluid px-0">
            <div className="row">
 
                <div className="col-12 col-md-7 px-5" >
                    <div>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item text-dark"><Link to="/dashboard" className='text-dark'>Home</Link></li>
                                <li className="breadcrumb-item active text-dark" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                        <h2 className='text-dark'>{title} Team</h2>
                    </div>

                    <Search query={query} onQueryChange={onQueryChange}/>
                        <table className="table table-striped pad9">
                            <thead className="table-dark">
                                <tr>
                                <th>S no</th>
                                <th>Employee Name</th>
                                <th>Employee ID</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                filtered.map((d, i) => (
                                    <tr key={i}>
                                        <th>{i+1}</th>
                                        <th>{d["empName"]}</th>
                                        <th> <Link to={'/employee'} state={{"employeeId":d["EmpId"], "data": filterdata}}>{d["EmpId"]}</Link>  </th>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>

                    
                    

                    
                </div>
                    
                    <div className="table-responsive col-md-3 offset-md-1 py-5" style={{marginTop:"100px"}} >

                    <div className='accordion py-4 '>
                        <div className='accordion-item '>
                            <div className='accordion-header accordion-button collapsed bg-dark text-white'  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <p className=" d-flex justify-content-between align-items-center">
                                    Total Strength
                                    <span className="badge bg-primary rounded-pill px-3" style={{marginLeft:"110px"}}>{count}</span>
                                </p>
                                

                            </div>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className='accordion-body'>
                                    <ul className='list-group'>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Onsite Strength
                                            <span className="badge bg-primary rounded-pill px-3">{onsiteCount}</span>
                                        </li>
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            Offsite Strength
                                            <span className="badge bg-primary rounded-pill px-3">{offsiteCount}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Search query={query} onQueryChange={onQueryChange}/>
                        <table className="table table-striped pad9">
                            <thead className="table-dark">
                                <tr>
                                <th>S no</th>
                                <th>Employee Name</th>
                                <th>Employee ID</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                filtered.map((d, i) => (
                                    <tr key={i}>
                                        <th>{i+1}</th>
                                        <th>{d["empName"]}</th>
                                        <th> <Link to={'/employee'} state={{"employeeId":d["EmpId"], "data": filterdata}}>{d["EmpId"]}</Link>  </th>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table> */}
                    </div>


  

            </div>
        </div>
    </header>
    

    </div>

 </>
  );
}
