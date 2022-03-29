import React from 'react';
import './AddEmployee.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function EditEmployee({employee}) {

const {register, handleSubmit,formState:{errors},trigger} = useForm();
const e = employee;
// console.log(e);
const onSubmit = async (data) =>{
    console.log(data);
  const employeeDetails = {"data": data}
  await axios.put('https://back-end-tlwrpe5ptq-el.a.run.app/updatedata', employeeDetails)
  window.location.reload(false);
};

console.log(errors);

  return (
      
  <>
    {/* <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> */}
    <a href='#!' data-bs-toggle="modal" data-bs-target="#Modal" style={{marginLeft:"81px"}}>
    <i className="bi bi-pencil-square btn btn-success"> Edit</i>
    </a>
    {/* </button> */}

    <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content ">
          <div className="modal-header ">
            <h5 className="modal-title " id="ModalLabel">Edit Employee {e["empName"]} Details </h5> 
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='row'>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#hom" type="button" role="tab" aria-controls="home" aria-selected="true">TCS Details</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profil" type="button" role="tab" aria-controls="profile" aria-selected="false">LBG Details</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contac" type="button" role="tab" aria-controls="contact" aria-selected="false">General Details</button>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="hom" role="tabpanel" aria-labelledby="home-tab">


                
                  <h4>TCS Details</h4>
                  <div className='col-12'>
                  <div className="row">
                    <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md-5">

                  

                  <div className="form-floating mt-3 mb-3">
                  
                  <input type="number" className="form-control  shadow border-solid border-black rounded" id="InputEmpid" placeholder="Enter empid" {...register("EmpId",{required:"EmpId is required",value:e["EmpId"]})} onKeyUp={() => { trigger("EmpId");}}/>
                  {errors.EmpId && (<small className='text-danger'>{errors.EmpId.message}</small>)}
                  <label htmlFor="InputEmpid" className='d-inline'>Emp id</label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="text" className="form-control  shadow border-solid border-black rounded" id="InputEmpname"  placeholder="Enter empname" {...register("empName",{value:e["empName"],required:"EmpName is required"})} onKeyUp={() => { trigger("empName");}}/>
                    {errors.empName && (<small className='text-danger'>{errors.empName.message}</small>)}
                    <label htmlFor="InputEmpname">Emp Name</label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <select className="form-select shadow border-solid border-black rounded" {...register("location",{value:e["location"],required:"Location is required"})}>
                    <option value="select location " selected hidden>Select Loaction</option>
                      <option value="Onsite">Onsite</option>
                      <option value="Offsite">Offsite</option>
                    </select>
                    <label htmlFor="InputLocation">Location</label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="text" className="form-control  shadow border-solid border-black rounded" id="InputBranch" placeholder="Enter Branch" {...register("branch",{value:e["branch"],required:"Branch is required",minLength: {
                  value: 3,
                  message: "Branch name should be more than 3 letters",
                },
                maxLength: {
                  value: 15,
                  message: "Branch name cannot be more than 15 letters",
                }})} onKeyUp={() => { trigger("branch");}}/>
                    {errors.branch && (<small className='text-danger'>{errors.branch.message}</small>)}
                    <label htmlFor="InputBranch">Branch</label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="date" className="form-control  shadow border-solid border-black rounded" id="InputTCSDOJ"  placeholder="Enter TCS Date of joining" {...register("dateOfJoining",{value:e["dateOfJoining"],required:"Candidate Date of joining is required"})} onKeyUp={() => { trigger("dateOfJoining");}}/>
                    {errors.dateOfJoining && (<small className='text-danger'>{errors.dateOfJoining.message}</small>)}
                    <label htmlFor="InputTCSDOJ">TCS DOJ</label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="date" className="form-control shadow border-solid border-black rounded" id="InputBGCCompletedDat"  placeholder="Enter BGC Completed Date" {...register("tcsBGC",{value:e["tcsBGC"],required:"BGC completed date is required"})} onKeyUp={() => { trigger("tcsBGC");}}/>
                    {errors.tcsBGC && (<small className='text-danger'>{errors.tcsBGC.message}</small>)}
                    <label htmlFor="InputBGCCompletedDat">BGC Completed Date</label>
                  </div>
                  <br/>
                  </div>
                  <div className="col-12 col-md-5">

                  <div className="form-floating mt-3 mb-3">
                    
                    <input type="text" className="form-control shadow border-solid border-black rounded" id="InputGrade"  placeholder="Enter Grade"  {...register("grade",{value:e["grade"],required:"Grade is required"})} onKeyUp={() => { trigger("grade");}}/>
                    {errors.grade && (<small className='text-danger'>{errors.grade.message}</small>)}
                    <label htmlFor="InputGrade">Grade</label>
                  </div>

                  <div className="form-floating mb-3">
                  
                  <input type="text" className="form-control  shadow border-solid border-black rounded" id="InputEmail1"  placeholder="Enter Desigination"  {...register("designation",{value:e["designation"],required:"Candidate Designation is required"})} onKeyUp={() => { trigger("designation");}}/>
                  {errors.designation && (<small className='text-danger'>{errors.designation.message}</small>)}
                  <label htmlFor="Inputdesigination">Designation</label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="text" className="form-control  shadow border-solid border-black rounded" id="InputPC Type " placeholder="PC Type"  {...register("pcType",{value:e["pcType"],required:"Candidate PC type is required"})} onKeyUp={() => { trigger("pcType");}}/>
                    {errors.pcType && (<small className='text-danger'>{errors.pcType.message}</small>)}
                    <label htmlFor="InputPCType ">PC Type </label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="text" className="form-control shadow border-solid border-black rounded" id="InputAssetID" placeholder="Asset ID"  {...register("assetID",{value:e["assetID"],required:"AssetId is required"})} onKeyUp={() => { trigger("assetID");}}/>
                    {errors.assetID && (<small className='text-danger'>{errors.assetID.message}</small>)}
                    <label htmlFor="InputAssetID">Asset ID  </label>
                  </div>

                  <div className="form-floating mb-3">
                   
                    <input type="text" className="form-control shadow border-solid border-black rounded" id="InputWFHApproval" placeholder="WFHApproval" {...register("wfhApproval",{value:e["wfhApproval"],required:"WFH details are required"})} onKeyUp={() => { trigger("wfhApproval");}}/>
                    {errors.wfhApproval && (<small className='text-danger'>{errors.wfhApproval.message}</small>)}
                    <label htmlFor="InputWFHApproval">WFHApproval  </label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="email" className="form-control shadow border-solid border-black rounded" id="InputTCSEmailId"  placeholder="Enter TCS Email ID"  {...register("tcsMail",{value:e["tcsMail"],required:"TCS Mail ID is required",pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address",}})} onKeyUp={() => { trigger("tcsMail");}}/>
                    {errors.tcsMail && (<small className='text-danger'>{errors.tcsMail.message}</small>)}
                    <label htmlFor="InputTCSEmailId">TCS Email Id</label>
                  </div><br/>

                </div>
                </div>
                </div>
                <p className='text-danger'><i>Navigate through the navigation bars to fill all the details, you will find submit button in last tab only.....</i></p>

                </div>
                

                <div className="tab-pane fade" id="profil" role="tabpanel" aria-labelledby="profile-tab">

                
                  <h4>LBG Details</h4>
                  <div className='col-12'>
                  <div className="row">
                    <div className="col-12 col-md-1"></div>
                    <div className="col-12 col-md-5">

                  <div className="form-floating mb-3">
                    
                    <input type="text" className="form-control shadow border-solid border-black rounded" id="InputCTID"  placeholder="Enter CTID"  {...register("ctID",{value:e["ctID"],required:"CT ID is required"})} onKeyUp={() => { trigger("ctID");}}/>
                    {errors.ctID && (<small className='text-danger'>{errors.ctID.message}</small>)}
                    <label htmlFor="InputCTID">CT ID</label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <select className="form-select shadow border-solid border-black rounded" {...register("Lab",{value:e["Lab"],required:"Lab is required"})}>
                    <option value="select Lab " selected hidden>Select Lab</option>
                      <option value="Cards">Cards</option>
                      <option value="Loans">Loans</option>
                      <option value="Savings">Savings</option>
                      <option value="Zoomerskool">Zoomerskool</option>
                      <option value="Banking">Banking</option>
                    </select>
                    <label className="pr-3" htmlFor="InputLab" name="Lab">Labs </label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="text" className="form-control  shadow border-solid border-black rounded" id="InputLabPM"  placeholder="Enter LabPM" {...register("labProjectManager",{value:e["labProjectManager"],required:"LAB PM name is required"})} onKeyUp={() => { trigger("labProjectManager");}}/>
                    {errors.labProjectManager && (<small className='text-danger'>{errors.labProjectManager.message}</small>)}
                    <label htmlFor="InputLabPM">Lab PM</label>
                  </div>

                  

                  <div className="form-floating mb-3">
                    
                    <input type="date" className="form-control  shadow border-solid border-black rounded" id="InputLBGOnboardingDate"  placeholder="Enter LBG Onboarding Date" {...register("lbgDateOfJoining",{value:e["lbgDateOfJoining"],required:"LBG onboarding date is required"})} onKeyUp={() => { trigger("lbgDateOfJoining");}}/>
                    {errors.lbgDateOfJoining && (<small className='text-danger'>{errors.lbgDateOfJoining.message}</small>)}
                    <label htmlFor="InputLBGOnboardingDate">LBG Onboarding Date</label>
                  </div>

                  

                  <div className="form-floating mb-3">
                    
                    <input type="date" className="form-control  shadow border-solid border-black rounded" id="InputCCBGCCompletedDat"  placeholder="Enter CC BGC Completed Date"  {...register("occBGC",{value:e["occBGC"],required:"OCC BGC completion date is required"})} onKeyUp={() => { trigger("occBGC");}}/>
                    {errors.occBGC && (<small className='text-danger'>{errors.occBGC.message}</small>)}
                    <label htmlFor="InputCCBGCCompletedDat">OCC BGC Completed Date</label>
                  </div>

                  </div>
                  <div className="col-12 col-md-5">

                  <div className="form-floating mb-3">
                    
                    <input type="text" className="form-control  shadow border-solid border-black rounded" id="InputCTB/RTB" placeholder="CTB/RTB"  {...register("ctbRTB",{value:e["ctbRTB"],required:"This is the required field"})} onKeyUp={() => { trigger("ctbRTB");}}/>
                    {errors.ctbRTB && (<small className='text-danger'>{errors.ctbRTB.message}</small>)}
                    <label htmlFor="InputCTB/RTB">CTB/RTB</label>
                  </div>

                  

                  <div className="form-floating mb-3">
                    
                    <input type="text" className="form-control  shadow border-solid border-black rounded" id="InputLMname   " placeholder="LMname"  {...register("labManagerName",{value:e["labManagerName"],required:"LM name is required"})} onKeyUp={() => { trigger("labManagerName");}}/>
                    {errors.labManagerName && (<small className='text-danger'>{errors.labManagerName.message}</small>)}
                    <label htmlFor="InputLMname  ">LMname   </label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="text" className="form-control  shadow border-solid border-black rounded" id="InputRSATOKENNO" placeholder="RSATOKENNO"  {...register("rsaToken",{value:e["rsaToken"],required:"RSA token ID is required"})} onKeyUp={() => { trigger("rsaToken");}}/>
                    {errors.rsaToken && (<small className='text-danger'>{errors.rsaToken.message}</small>)}
                    <label htmlFor="InputRSATOKENNO">RSATOKENNO   </label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="date" className="form-control shadow border-solid border-black rounded" id="InputRSATokenExpDate" placeholder="RSATokenExpDate"  {...register("rsaExpiry",{value:e["rsaExpiry"],required:"RSA EXP date is required"})} onKeyUp={() => { trigger("rsaExpiry");}}/>
                    {errors.rsaExpiry && (<small className='text-danger'>{errors.rsaExpiry.message}</small>)}
                    <label htmlFor="InputRSATokenExpDate">RSATokenExpDate   </label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="email" className="form-control shadow border-solid border-black rounded" id="InputLBGEmailId"  placeholder="Enter LBG Email ID"  {...register("lbgMail",{value:e["lbgMail"],required:"LBG mail ID is required",pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})} onKeyUp={() => { trigger("lbgMail");}}/>
                    {errors.lbgMail && (<small className='text-danger'>{errors.lbgMail.message}</small>)}
                    <label htmlFor="InputLBGEmailId">LBG Email Id</label>
                  </div>
                  <br/>

                  </div>
                  </div>

                </div>

                <p className='text-danger'><i>Navigate through the navigation bars to fill all the details, you will find submit button in last tab only.....</i></p>

                </div>

                
                <div className="tab-pane fade" id="contac" role="tabpanel" aria-labelledby="contact-tab">
                
                  <h4>GENERAL Details</h4>
                  <div className='col-12 mt-3'>
                  <div className="row">

                  <div className="col-12 col-md-1"></div>
                  

                  <div className='col-12 col-md-5'>
                  <div className="form-floating mb-3">
                    
                    <input type="number" className="form-control shadow border-solid border-black rounded" id="InputContact"  placeholder="Enter Contact Number"  {...register("contactNumber",{value:e["contactNumber"],required:"Contact number is required",pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },})} onKeyUp={() => { trigger("contactNumber");}}/>
                    {errors.contactNumber && (<small className='text-danger'>{errors.contactNumber.message}</small>)}
                    <label htmlFor="InputContact">Contact No</label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="number" className="form-control shadow border-solid border-black rounded" id="InputEmContact"  placeholder="Enter Emergency Contact No "  {...register("emergencyContact",{value:e["emergencyContact"],required:"Emergency contact is required",pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },})} onKeyUp={() => { trigger("emergencyContact");}}/>
                    {errors.emergencyContact && (<small className='text-danger'>{errors.emergencyContact.message}</small>)}
                    <label htmlFor="InputEmContact">Emergency Contact No</label>
                  </div>
                  </div>
                  <div className="col-12 col-md-5">

                  <div className="form-floating mb-3">
                    
                    <input type="email" className="form-control shadow border-solid border-black rounded" id="InputPersonalEmailId"  placeholder="Enter Personal Email ID"  {...register("personalMail",{value:e["personalMail"],required:"Personal Mail is required",pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})} onKeyUp={() => { trigger("personalMail");}}/>
                    {errors.personalMail && (<small className='text-danger'>{errors.personalMail.message}</small>)}
                    <label htmlFor="InputPersonalEmailId">Personal Email Id</label>
                  </div>

                  <div className="form-floating mb-3">
                    
                    <input type="date" className="form-control shadow border-solid border-black rounded" id="InputDOB"  placeholder="Enter Date of Birth" {...register("DOB",{value:e["DOB"],required:"Candidate DOB is required"})} onKeyUp={() => { trigger("DOB");}}/>
                    {errors.DOB && (<small className='text-danger'>{errors.DOB.message}</small>)}
                    <label htmlFor="InputDOB">Date of Birth</label>
                  </div>
                  </div>

                  </div>
                  </div>
                  

                <br/><br/>
                

                <div className='col-12'>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="Check" {...register("dec",{required:"Need to accept the Declaration"})}/>
                    <label className="form-check-label" htmlFor="Check">I hereby declare that all the information given by me in this application is true and correct to the best of my knowledge and belief.</label>
                    {errors.dec && (<small className='text-danger'>{errors.dec.message}</small>)}
                  </div><br/>

                  <div>
                  <input type="submit" className='btn btn-primary' data-bs-dismiss="modal" value="Enter Details"/> 
                  </div>
                  
                  </div>
                </div>
                 
                </div>
                </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>






  </>
  );
}
