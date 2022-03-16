import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Lloyds from '../images/Lloyds.png'
import {Link, useLocation} from 'react-router-dom'
import Search from './Search'
import NavBarDashboad from './NavBarDashboad';

export default function Lab({title}) {
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
    console.log(`filterdata ${filterdata}`)
    const filtered = filterdata.filter(
        item => {
          return (
            item.empName.toLowerCase().includes(query.toLowerCase()) ||
            item.EmpId.toLowerCase().includes(query.toLowerCase()) 
          )
        })

  return (
    <>
    <NavBarDashboad/>
    <header className=" py-4  text-white rounded " style={{marginTop:"70px", marginRight:"0px", backgroundColor:"#ffa500"}}>
        <div className="container-fluid px-0">
            <div className="row">
                {/* <div className="col-12 col-md-3 align-self-center " > */}
                    {/* <img className="p-3" src={Lloyds} alt="lloyds-logo" width="250px"/> */}
                {/* </div> */}
                <div className="col-12 col-md-3 align-self-center px-5" style={{color: "black"}}>
                    <h2>{title} Team</h2>
                </div>
                {/* <div className='col-12 col-md-2 '>
                    <div className='card'>
                        <div className='card-header bg-dark text-white'>
                            <p>Total cards strength</p>
                        </div>
                        <div className='card-body text-dark'>
                            <p>{count}</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-2 '>
                    <div className='card'>
                        <div className='card-header bg-dark text-white'>
                            <p>Total Offsite strength</p>
                        </div>
                        <div className='card-body text-dark'>
                            <p>{offsiteCount}</p>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-2 '>
                    <div className='card'>
                        <div className='card-header bg-dark text-white'>
                            <p>Total Onsite strength</p>
                        </div>
                        <div className='card-body text-dark'>
                            <p>{onsiteCount}</p>
                        </div>
                    </div>
                </div> */}

                <div className='col-md-5'></div>

                <div className='col-md-3'>
               
                    <div className='accordion'>
                        <div className='accordion-item'>
                        {/* <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> */}
                            <div className='accordion-header accordion-button collapsed'  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            {/* <ul className="list-group"> */}
                                <p className=" d-flex justify-content-between align-items-center">
                                    Total Strength
                                    <span className="badge bg-primary rounded-pill px-3" style={{marginLeft:"120px"}}>{count}</span>
                                </p>
                                
                            {/* </ul> */}
                            {/* </button> */}
                            </div>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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
                    
                    {/* <li className="list-group-item d-flex justify-content-between align-items-center">
                        Onsite Strength
                        <span className="badge bg-primary rounded-pill">{onsiteCount}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Offsite Strength
                        <span className="badge bg-primary rounded-pill">{offsiteCount}</span>
                    </li> */}
                    
                    
                </div>
            </div>
        </div>
    </header>

    <nav aria-label="breadcrumb" className=" mx-5 my-2">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-dark"><Link to="/dashboard">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{title}</li>
          </ol>
    </nav>
    <Search query={query} onQueryChange={onQueryChange}/>
    <div className="table-responsive pt-5 col-md-6 offset-md-3" >
        <table className="table table-striped ">
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
    


 </>
  );
}
