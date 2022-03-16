import React, {useLayoutEffect, useState} from "react";
import './Employee.css';
import person from '../images/Person.png';
import {SiMicrosoftteams} from 'react-icons/si'
import {useLocation, Link} from 'react-router-dom'
import EditEmployee from "./EditEmployee";
import axios from 'axios'
import NavBarDashboad from './NavBarDashboad';


function Employee(){
    const location = useLocation();
    var { employeeId, data } = location.state;
    //   console.log(data)
    const [newData, setNewData] = useState();
    useLayoutEffect(()=>{
        axios.get('https://back-end-tlwrpe5ptq-el.a.run.app/getdata').then((response)=>{setNewData(response.data)}).catch((err) => {console.log(err)});
    },[])
    data = newData || data;
      var employee = data.filter((d) => d["EmpId"] == employeeId);

      employee = employee[0]
      var mail = "mailto:"+employee["tcsMail"]
      var teams = "https://teams.microsoft.com/l/chat/0/0?users=" + employee["tcsMail"]
      var wa = "https://wa.me/+91" + employee["contactNumber"]
      var tel = "tel:=+91"+employee["contactNumber"]

    //   console.log(employee)

    return(
    <>
    <NavBarDashboad/>
        <div className="jumbotron">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                <div className="card">
                                    <div className=" row card-header">
                                        <div className="col-12 col-md-4" data-bs-toggle="collapse" data-bs-target="#collapseOne"><img src={person} alt="sandy" width="200px" height="200px"/> </div> 
                                        <div className="col-12 col-md-8" style={{color: "black"}}> 
                                        <h2>{employee["empName"]}</h2> 
                                        <footer className="blockquote-footer">
                                            <cite className="p-1" title="Source Title">{employee["designation"]}</cite>
                                        </footer>
                                        </div>
                                    </div>
                                </div>
                                </h2>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3">
                        <div className="card">
                            <div className="card-header">
                                <a href={teams} className="btn mx-1" style={{backgroundColor:"rgb(137, 88, 228)"}}> <SiMicrosoftteams/> </a>
                                {/* <a className="btn btn-primary mx-1" href="http://www.linkedin.com/in/sandeepshades88/"> <i className="bi bi-linkedin"></i> </a> */}
                                <a className="btn btn-danger mx-1" href={mail}> <i className="bi bi-envelope-plus"></i> </a>
                                <a href={tel} className="btn btn-secondary mx-1"> <i className="bi bi-telephone-outbound"></i> </a>
                                <a  className="btn btn-success mx-1" href={wa} style={{border: "1px solid"}}> <i className="bi bi-whatsapp"></i> </a>
                            </div>
                        </div>  
                    </div>
                    <div className="col-12 col-md-2">
                        <EditEmployee employee = {employee}/>
                    </div>
                </div>
            </div>
        </div>

        <nav aria-label="breadcrumb" className=" mx-5 my-2">
          <ol className="breadcrumb">
            <li className="breadcrumb-item text-dark"><Link to="/dashboard" state={{"data": data}}>Home</Link></li>
            <li className="breadcrumb-item active"><Link to={`/${employee["Lab"]}`} state={{"data": data}}>{employee["Lab"]}</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{employee["empName"]}</li>
          </ol>
        </nav>

        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item " style={{marginTop:"30px"}}>
                            <h2 className="accordion-header " id="heading1">
                            <div className="card">
                                <div className="card-header card-header-1" data-bs-toggle="collapse" data-bs-target="#collapse1">
                                    <p className="mb-0">TCS Details</p>
                                </div>
                            </div>
                            </h2>
                            <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="heading1" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="card-body row justify-content-center">
                                        <div className="col-12 col-sm-9">
                                            <div className="table-responsive">
                                                <table className="table table-striped borderless">
                                                    <tbody>
                                                        <tr>
                                                            <th>Employee ID</th>
                                                            <td>{employee["EmpId"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Employee Name</th>
                                                            <td>{employee["empName"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Location</th>
                                                            <td>{employee["location"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Branch</th>
                                                            <td>{employee["branch"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>TCS Date Of Joining</th>
                                                            <td>{employee["dateOfJoining"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>TCS BGC Completed Date</th>
                                                            <td>{employee["tcsBGC"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Grade</th>
                                                            <td>{employee["grade"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Designation</th>
                                                            <td>{employee["designation"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>PC Type</th>
                                                            <td>{employee["pcType"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Asset ID</th>
                                                            <td>{employee["assetID"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>WFH Approval</th>
                                                            <td>{employee["wfhApproval"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>TCS Mail ID</th>
                                                            <td> <a href={`mailto:${employee["tcsMail"]}`}> click here to mail </a> </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading2">
                            <div className="card">
                                <div className="card-header card-header-1" data-bs-toggle="collapse" data-bs-target="#collapse2">
                                    <p className="mb-0">LBG Details</p>
                                </div>
                            </div>
                            </h2>
                            <div id="collapse2" className="accordion-collapse collapse " aria-labelledby="heading2" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="card-body row justify-content-center">
                                        <div className="col-12 col-sm-9">
                                            <div className="table-responsive">
                                                <table className="table table-striped borderless">
                                                    <tbody>
                                                        <tr>
                                                            <th>CT ID</th>
                                                            <td>{employee["ctID"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>LAB</th>
                                                            <td>{employee["Lab"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Lab Project Manager</th>
                                                            <td>{employee["labProjectManager"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>LBG On-Boarding Date</th>
                                                            <td>{employee["lbgDateOfJoining"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>OCC BGC Completed Date</th>
                                                            <td>{employee["occBGC"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>CTB/RTB</th>
                                                            <td>{employee["ctbRTB"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>LM Name</th>
                                                            <td>{employee["labManagerName"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>RSA Token Number</th>
                                                            <td>{employee["rsaToken"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>RSA Token Expiry Date</th>
                                                            <td>{employee["rsaExpiry"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>LBG mail</th>
                                                            <td> <a href={`mailto:${employee["lbgMail"]}`}>click here to mail </a></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="heading3">
                            <div className="card">
                                <div className="card-header card-header-1" data-bs-toggle="collapse" data-bs-target="#collapse3">
                                    <p className="mb-0">General Details</p>
                                </div>
                            </div>
                            </h2>
                            <div id="collapse3" className="accordion-collapse collapse " aria-labelledby="heading3" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <div className="card-body row justify-content-center">
                                        <div className="col-12 col-sm-9">
                                            <div className="table-responsive">
                                                <table className="table table-striped borderless">
                                                    <tbody>
                                                        <tr>
                                                            <th>Contact Number</th>
                                                            <td> {employee["contactNumber"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Emergency Contact Number</th>
                                                            <td> {employee["emergencyContact"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Personal Mail Id</th>
                                                            <td>{employee["personalMail"]}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Date Of Birth</th>
                                                            <td>{employee["DOB"]}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    
    </>
    );
}

export default Employee;