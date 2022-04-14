import React from 'react';
import './AddEmployee.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function AddEmployee() {

const {register, handleSubmit,formState:{errors},reset,trigger} = useForm();

const onSubmit = (data) =>{
  const employeeDetails = {"data": data}
  axios.post('https://back-end-tlwrpe5ptq-el.a.run.app/insertdata', employeeDetails)
  window.location.reload(false);
  reset();
};

console.log(errors);

  return (
    <>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal tooltip" data-bs-placement="top" title="Click here to add a employee details to the database" data-bs-target="#exampleModal">
    <i className="bi bi-person-plus-fill"></i> Add Employee
    </button>

    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Enter Employee Details</h5> 
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='row'>

                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">TCS Details</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">LBG Details</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">General Details</button>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">


                <div className='col-12'>
                 <div className='row'>
                  <div className='col-10 col-md-5 mx-5'>

                  <div className="form-floating mt-3 mb-3">
                  <input type="number" className="form-control" id="exampleInputEmpid"  placeholder="Enter empid" {...register("EmpId",{required:"EmpId is required"})} onKeyUp={() => { trigger("EmpId");}}/>
                  <label htmlFor="exampleInputEmpid" className='d-inline'>Emp id</label>
                  {errors.EmpId && (<small className='text-danger'>{errors.EmpId.message}</small>)}
                  </div>

                  <div className="form-floating mb-3 ">
                  <input type="text" className="form-control" id="exampleInputEmpname"  placeholder="Enter empname" {...register("empName",{required:"EmpName is required" })} onKeyUp={() => { trigger("empName");}}/>
                    <label htmlFor="exampleInputEmpname">Emp Name</label>
                    {errors.empName && (<small className='text-danger'>{errors.empName.message}</small>)}
                  </div>

                  <div className="form-floating mb-3">
                    <select className="form-select"  {...register("location",{required:"Location is required"})}>
                      <option value="Onsite">Onsite</option>
                      <option value="Offsite">Offsite</option>
                    </select>
                    <label htmlFor="exampleInputLocation">Location</label>
                  </div>

                  <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="exampleBranch"  placeholder="Enter Branch" {...register("branch",{required:"Branch is required",minLength: {
                  value: 3,
                  message: "Branch name should be more than 3 letters",
                },
                maxLength: {
                  value: 15,
                  message: "Branch name cannot be more than 15 letters",
                }})} onKeyUp={() => { trigger("branch");}}/>
                    <label htmlFor="exampleInputBranch">Branch</label>
                    
                    {errors.branch && (<small className='text-danger'>{errors.branch.message}</small>)}
                  </div>

                  <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="exampleInputTCSEmailId"  placeholder="Enter TCS Email ID" {...register("tcsMail",{required:"TCS Mail ID is required",pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address",}})} onKeyUp={() => { trigger("tcsMail");}}/>
                    <label htmlFor="exampleInputTCSEmailId">TCS Email Id</label>
                    {errors.tcsMail && (<small className='text-danger'>{errors.tcsMail.message}</small>)}
                  </div>
                  
                  
                  <div className="form-floating mb-3">
                  <input type="date" className="form-control" id="exampleInputTCSDOJ"  placeholder="Enter TCS Date of joining" {...register("dateOfJoining",{required:"Candidate Date of joining is required"})} onKeyUp={() => { trigger("dateOfJoining");}}/>
                    <label htmlFor="exampleInputTCSDOJ">TCS Date Of Joining</label>
                    {errors.dateOfJoining && (<small className='text-danger'>{errors.dateOfJoining.message}</small>)}
                  </div>

                  <br/>

                  </div>

                  <div className='col-10 col-md-5'>

                  <div className="form-floating mt-3 mb-3">
                  <input type="text" className="form-control" id="exampleGrade"  placeholder="Enter Grade" {...register("grade",{required:"Grade is required"})} onKeyUp={() => { trigger("grade");}}/>
                    <label htmlFor="exampleInputGrade">Grade</label>
                    {errors.grade && (<small className='text-danger'>{errors.grade.message}</small>)}
                  </div>

                  <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="exampleInputEmail1"  placeholder="Enter Desigination" {...register("designation",{required:"Candidate Designation is required"})} onKeyUp={() => { trigger("designation");}}/>
                  <label htmlFor="exampleInputdesigination">Designation</label>
                  {errors.designation && (<small className='text-danger'>{errors.designation.message}</small>)}
                  </div>

                  <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="exampleInputPC Type " placeholder="PC Type" {...register("pcType",{required:"Candidate PC type is required"})} onKeyUp={() => { trigger("pcType");}}/>
                    <label htmlFor="exampleInputPCType ">PC Type </label>
                    {errors.pcType && (<small className='text-danger'>{errors.pcType.message}</small>)}
                  </div>

                  <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="exampleInputAsset ID  " placeholder="Asset ID" {...register("assetID",{required:"AssetId is required"})} onKeyUp={() => { trigger("assetID");}}/>
                    <label htmlFor="exampleInputAssetID  ">Asset ID  </label>
                    {errors.assetID && (<small className='text-danger'>{errors.assetID.message}</small>)}
                  </div>

                  <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="exampleInputWFHApproval  " placeholder="WFHApproval" {...register("wfhApproval",{required:"WFH details are required"})} onKeyUp={() => { trigger("wfhApproval");}}/>
                    <label htmlFor="exampleInputWFHApproval  ">WFHApproval  </label>
                    {errors.wfhApproval && (<small className='text-danger'>{errors.wfhApproval.message}</small>)}
                  </div>

                  <div className="form-floating">
                  <input type="date" className="form-control" id="exampleInputBGCCompletedDate"  placeholder="Enter BGC Completed Date" {...register("tcsBGC",{required:"BGC completed date is required"})} onKeyUp={() => { trigger("tcsBGC");}}/>
                    <label htmlFor="exampleInputBGCCompletedDate">TCS BGC Completed Date</label>
                    {errors.tcsBGC && (<small className='text-danger'>{errors.tcsBGC.message}</small>)}
                  </div>


                  </div>
                  </div>

                </div>
                <p className='text-danger'><i>Navigate through the navigation bars to fill all the details, you will find submit button in last tab only.....</i></p>

                </div>

                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                <div className='col-12'>

                  <div className='row'>
                    <div className='col-10 col-md-5 mx-5'>

                    

                    


                  <div className="form-floating mb-3 mt-3">
                  <input type="text" className="form-control" id="exampleInputCTID"  placeholder="Enter CTID" {...register("ctID",{required:"CT ID is required"})} onKeyUp={() => { trigger("ctID");}}/>
                    <label htmlFor="exampleInputCTID">CT ID</label>
                    {errors.ctID && (<small className='text-danger'>{errors.ctID.message}</small>)}
                  </div>

                  <div className="form-floating mb-3">
                  <select className='form-select' {...register("Lab",{required:"Lab is required"})}>
                      <option value="Cards">Cards</option>
                      <option value="Loans">Loans</option>
                      <option value="Savings">Savings</option>
                      <option value="Banking">Banking</option>
                      <option value="OIE">OIE</option>
                      <option value="Personalization">Personalization</option>
                      <option value="DIGI COMMS">DIGI COMMS</option>
                      <option value="DOC services">DOC services</option>
                      <option value="Other">Other</option>
                    </select>
                    <label className="pr-3" htmlFor="exampleInputLab" name="Lab">Labs </label>
                    
                  </div>

                  <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="exampleInputLabPM"  placeholder="Enter LabPM" {...register("labProjectManager",{required:"LAB PM name is required"})} onKeyUp={() => { trigger("labProjectManager");}}/>

                    <label htmlFor="exampleInputLabPM">Lab PM</label>
                    {errors.labProjectManager && (<small className='text-danger'>{errors.labProjectManager.message}</small>)}
                  </div>

                  

                  <div className="form-floating mb-3">
                  <input type="date" className="form-control" id="exampleInputLBGOnboardingDate"  placeholder="Enter LBG Onboarding Date" {...register("lbgDateOfJoining",{required:"LBG onboarding date is required"})} onKeyUp={() => { trigger("lbgDateOfJoining");}}/>
                    <label htmlFor="exampleInputLBGOnboardingDate">LBG Onboarding Date</label>
                    {errors.lbgDateOfJoining && (<small className='text-danger'>{errors.lbgDateOfJoining.message}</small>)}
                  </div>

                  

                  <div className="form-floating">
                  <input type="date" className="form-control" id="exampleInputCCBGCCompletedDate"  placeholder="Enter CC BGC Completed Date" {...register("occBGC",{required:"OCC BGC completion date is required"})} onKeyUp={() => { trigger("occBGC");}}/>
                    <label htmlFor="exampleInputCCBGCCompletedDate">OCC BGC Completed Date</label>
                    {errors.occBGC && (<small className='text-danger'>{errors.occBGC.message}</small>)}
                  </div>

                  </div>
                    <div className='col-10 col-md-5'>
                  

                  <div className="form-floating mb-3 mt-3">
                  <input type="text" className="form-control" id="exampleInputCTB/RTB" placeholder="CTB/RTB" {...register("ctbRTB",{required:"This is the required field"})} onKeyUp={() => { trigger("ctbRTB");}}/>
                    <label htmlFor="exampleInputCTB/RTB">CTB/RTB</label>
                    {errors.ctbRTB && (<small className='text-danger'>{errors.ctbRTB.message}</small>)}
                  </div>

                  

                  <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="exampleInputLMname   " placeholder="LMname" {...register("labManagerName",{required:"LM name is required"})} onKeyUp={() => { trigger("labManagerName");}}/>
                    <label htmlFor="exampleInputLMname  ">LMname   </label>
                    {errors.labManagerName && (<small className='text-danger'>{errors.labManagerName.message}</small>)}
                  </div>

                  <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="exampleInputRSATOKENNO" placeholder="RSATOKENNO" {...register("rsaToken",{required:"RSA token ID is required"})} onKeyUp={() => { trigger("rsaToken");}}/>
                    <label htmlFor="exampleInputRSATOKENNO  ">RSATOKENNO   </label>
                    {errors.rsaToken && (<small className='text-danger'>{errors.rsaToken.message}</small>)}
                  </div>

                  <div className="form-floating mb-3">
                  <input type="date" className="form-control" id="exampleInputRSATokenExpDate" placeholder="RSATokenExpDate" {...register("rsaExpiry",{required:"RSA EXP date is required"})} onKeyUp={() => { trigger("rsaExpiry");}}/>
                    <label htmlFor="exampleInputRSATokenExpDate">RSATokenExpDate   </label>
                    {errors.rsaExpiry && (<small className='text-danger'>{errors.rsaExpiry.message}</small>)}
                  </div>

                  <div className="form-floating">
                  <input type="email" className="form-control" id="exampleInputLBGEmailId"  placeholder="Enter LBG Email ID" {...register("lbgMail",{required:"LBG mail ID is required",pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})} onKeyUp={() => { trigger("lbgMail");}}/>
                    <label htmlFor="exampleInputLBGEmailId">LBG Email Id</label>  
                    {errors.lbgMail && (<small className='text-danger'>{errors.lbgMail.message}</small>)}
                  </div>
                  <br/>
                </div>

                </div>
                  </div>

                <p className='text-danger'><i>Navigate through the navigation bars to fill all the details, you will find submit button in last tab only.....</i></p>

                </div>

                
                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div className='col-12 mt-3'>

                  <div className='row'>
                    <div className='col-10 col-md-5 mx-5'>

                    

                    


                  <div className="form-floating mb-3">
                  <input type="number" className="form-control" id="exampleInputContactNo"  placeholder="Enter Contact Number" {...register("contactNumber",{required:"Contact number is required",pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },})} onKeyUp={() => { trigger("contactNumber");}}/>
                    <label htmlFor="exampleInputContNo">Contact No</label>
                    {errors.contactNumber && (<small className='text-danger'>{errors.contactNumber.message}</small>)}
                  </div>

                  <div className="form-floating mb-3">
                  <input type="number" className="form-control" id="exampleInputEmContactNo"  placeholder="Enter Emergency Contact No " {...register("emergencyContact",{required:"Emergency contact is required",pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },})} onKeyUp={() => { trigger("emergencyContact");}}/>
                    <label htmlFor="exampleInputEmContactNo">Emergency Contact No</label>
                    {errors.emergencyContact && (<small className='text-danger'>{errors.emergencyContact.message}</small>)}
                  </div>

                  <div className="form-floating ">
                    <select className="form-select"  {...register("Gender",{required:"Gender is required"})}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    <label htmlFor="exampleInputGender">Gender</label>
                  </div>

                  </div>
                    <div className='col-10 col-md-5'>

                  <div className="form-floating  mb-3">
                  <input type="email" className="form-control" id="exampleInputPersonalEmailId"  placeholder="Enter Personal Email ID" {...register("personalMail",{required:"Personal Mail is required",pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})} onKeyUp={() => { trigger("personalMail");}}/>
                    <label htmlFor="exampleInputPersonalEmailId">Personal Email Id</label>
                    {errors.personalMail && (<small className='text-danger'>{errors.personalMail.message}</small>)}
                  </div>

                  <div className="form-floating mb-3">
                  <input type="date" className="form-control" id="exampleInputDOB"  placeholder="Enter Date of Birth" {...register("DOB",{required:"Candidate DOB is required"})} onKeyUp={() => { trigger("DOB");}}/>
                    <label htmlFor="exampleInputDOB">Date of Birth</label>
                    {errors.DOB && (<small className='text-danger'>{errors.DOB.message}</small>)}
                  </div>

                  
                  

                  </div>
                  </div>
                  </div>

                <br/><br/>

                <div className='col-12 mx-5'>
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register("dec",{required:"Need to accept the Declaration"})}/>
                    <label className="form-check-label" htmlFor="exampleCheck1">I hereby declare that all the information given by me in this application is true and correct to the best of my knowledge and belief.</label>
                    <br/>
                    {errors.dec && (<small className='text-danger'>{errors.dec.message}</small>)}
                  </div><br/>

                  <div>
                  <input type="submit" className='btn btn-success' style={{marginLeft:"430px"}} value="Enter Details"/> 
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
