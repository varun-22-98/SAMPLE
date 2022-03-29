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
    <a href='#!' data-bs-toggle="modal" data-bs-target="#Modal" style={{marginLeft:"119px"}}>
    <i className="bi bi-pencil-square btn btn-success"> Edit</i>
    </a>
    {/* </button> */}

    <div className="modal fade" id="Modal" tabIndex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalLabel">Edit Employee {e["empName"]} Details </h5> 
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


                <div className='col-12 col-md-6'>
                  <h4>TCS Details</h4>

                  <div className="form-group">
                  <label htmlFor="InputEmpid" className='d-inline'>Emp id</label>
                  <input type="number" className="form-control" id="InputEmpid" placeholder="Enter empid" {...register("EmpId",{required:"EmpId is required",value:e["EmpId"]})} onKeyUp={() => { trigger("EmpId");}}/>
                  {errors.EmpId && (<small className='text-danger'>{errors.EmpId.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputEmpname">Emp Name</label>
                    <input type="text" className="form-control" id="InputEmpname"  placeholder="Enter empname" {...register("empName",{value:e["empName"],required:"EmpName is required"})} onKeyUp={() => { trigger("empName");}}/>
                    {errors.empName && (<small className='text-danger'>{errors.empName.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputLocation">Location</label>
                    <select style={{marginLeft:"10px"}} {...register("location",{value:e["location"],required:"Location is required"})}>
                      <option value="Onsite">Onsite</option>
                      <option value="Offsite">Offsite</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputBranch">Branch</label>
                    <input type="text" className="form-control" id="InputBranch" placeholder="Enter Branch" {...register("branch",{value:e["branch"],required:"Branch is required",minLength: {
                  value: 3,
                  message: "Branch name should be more than 3 letters",
                },
                maxLength: {
                  value: 15,
                  message: "Branch name cannot be more than 15 letters",
                }})} onKeyUp={() => { trigger("branch");}}/>
                    {errors.branch && (<small className='text-danger'>{errors.branch.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputTCSDOJ">TCS DOJ</label>
                    <input type="date" className="form-control" id="InputTCSDOJ"  placeholder="Enter TCS Date of joining" {...register("dateOfJoining",{value:e["dateOfJoining"],required:"Candidate Date of joining is required"})} onKeyUp={() => { trigger("dateOfJoining");}}/>
                    {errors.dateOfJoining && (<small className='text-danger'>{errors.dateOfJoining.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputBGCCompletedDat">BGC Completed Date</label>
                    <input type="date" className="form-control" id="InputBGCCompletedDat"  placeholder="Enter BGC Completed Date" {...register("tcsBGC",{value:e["tcsBGC"],required:"BGC completed date is required"})} onKeyUp={() => { trigger("tcsBGC");}}/>
                    {errors.tcsBGC && (<small className='text-danger'>{errors.tcsBGC.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputGrade">Grade</label>
                    <input type="text" className="form-control" id="InputGrade"  placeholder="Enter Grade"  {...register("grade",{value:e["grade"],required:"Grade is required"})} onKeyUp={() => { trigger("grade");}}/>
                    {errors.grade && (<small className='text-danger'>{errors.grade.message}</small>)}
                  </div>

                  <div className="form-group">
                  <label htmlFor="Inputdesigination">Designation</label>
                  <input type="text" className="form-control" id="InputEmail1"  placeholder="Enter Desigination"  {...register("designation",{value:e["designation"],required:"Candidate Designation is required"})} onKeyUp={() => { trigger("designation");}}/>
                  {errors.designation && (<small className='text-danger'>{errors.designation.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputPCType ">PC Type </label>
                    <input type="text" className="form-control" id="InputPC Type " placeholder="PC Type"  {...register("pcType",{value:e["pcType"],required:"Candidate PC type is required"})} onKeyUp={() => { trigger("pcType");}}/>
                    {errors.pcType && (<small className='text-danger'>{errors.pcType.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputAssetID">Asset ID  </label>
                    <input type="text" className="form-control" id="InputAssetID" placeholder="Asset ID"  {...register("assetID",{value:e["assetID"],required:"AssetId is required"})} onKeyUp={() => { trigger("assetID");}}/>
                    {errors.assetID && (<small className='text-danger'>{errors.assetID.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputWFHApproval">WFHApproval  </label>
                    <input type="text" className="form-control" id="InputWFHApproval" placeholder="WFHApproval" {...register("wfhApproval",{value:e["wfhApproval"],required:"WFH details are required"})} onKeyUp={() => { trigger("wfhApproval");}}/>
                    {errors.wfhApproval && (<small className='text-danger'>{errors.wfhApproval.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputTCSEmailId">TCS Email Id</label>
                    <input type="email" className="form-control" id="InputTCSEmailId"  placeholder="Enter TCS Email ID"  {...register("tcsMail",{value:e["tcsMail"],required:"TCS Mail ID is required",pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address",}})} onKeyUp={() => { trigger("tcsMail");}}/>
                    {errors.tcsMail && (<small className='text-danger'>{errors.tcsMail.message}</small>)}
                  </div><br/>

                </div>
                <p className='text-danger'><i>Navigate through the navigation bars to fill all the details, you will find submit button in last tab only.....</i></p>

                </div>

                <div className="tab-pane fade" id="profil" role="tabpanel" aria-labelledby="profile-tab">

                <div className='col-12 col-md-6'>
                  <h4>LBG Details</h4>

                  <div className="form-group">
                    <label htmlFor="InputCTID">CT ID</label>
                    <input type="text" className="form-control" id="InputCTID"  placeholder="Enter CTID"  {...register("ctID",{value:e["ctID"],required:"CT ID is required"})} onKeyUp={() => { trigger("ctID");}}/>
                    {errors.ctID && (<small className='text-danger'>{errors.ctID.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label className="pr-3" htmlFor="InputLab" name="Lab">Labs </label>
                    <select style={{marginLeft:"10px"}}  {...register("Lab",{value:e["Lab"],required:"Lab is required"})}>
                      <option value="Cards">Cards</option>
                      <option value="Loans">Loans</option>
                      <option value="Savings">Savings</option>
                      <option value="Zoomerskool">Zoomerskool</option>
                      <option value="Banking">Banking</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputLabPM">Lab PM</label>
                    <input type="text" className="form-control" id="InputLabPM"  placeholder="Enter LabPM" {...register("labProjectManager",{value:e["labProjectManager"],required:"LAB PM name is required"})} onKeyUp={() => { trigger("labProjectManager");}}/>
                    {errors.labProjectManager && (<small className='text-danger'>{errors.labProjectManager.message}</small>)}
                  </div>

                  

                  <div className="form-group">
                    <label htmlFor="InputLBGOnboardingDate">LBG Onboarding Date</label>
                    <input type="date" className="form-control" id="InputLBGOnboardingDate"  placeholder="Enter LBG Onboarding Date" {...register("lbgDateOfJoining",{value:e["lbgDateOfJoining"],required:"LBG onboarding date is required"})} onKeyUp={() => { trigger("lbgDateOfJoining");}}/>
                    {errors.lbgDateOfJoining && (<small className='text-danger'>{errors.lbgDateOfJoining.message}</small>)}
                  </div>

                  

                  <div className="form-group">
                    <label htmlFor="InputCCBGCCompletedDat">OCC BGC Completed Date</label>
                    <input type="date" className="form-control" id="InputCCBGCCompletedDat"  placeholder="Enter CC BGC Completed Date"  {...register("occBGC",{value:e["occBGC"],required:"OCC BGC completion date is required"})} onKeyUp={() => { trigger("occBGC");}}/>
                    {errors.occBGC && (<small className='text-danger'>{errors.occBGC.message}</small>)}
                  </div>

                  

                  <div className="form-group">
                    <label htmlFor="InputCTB/RTB">CTB/RTB</label>
                    <input type="text" className="form-control" id="InputCTB/RTB" placeholder="CTB/RTB"  {...register("ctbRTB",{value:e["ctbRTB"],required:"This is the required field"})} onKeyUp={() => { trigger("ctbRTB");}}/>
                    {errors.ctbRTB && (<small className='text-danger'>{errors.ctbRTB.message}</small>)}
                  </div>

                  

                  <div className="form-group">
                    <label htmlFor="InputLMname  ">LMname   </label>
                    <input type="text" className="form-control" id="InputLMname   " placeholder="LMname"  {...register("labManagerName",{value:e["labManagerName"],required:"LM name is required"})} onKeyUp={() => { trigger("labManagerName");}}/>
                    {errors.labManagerName && (<small className='text-danger'>{errors.labManagerName.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputRSATOKENNO">RSATOKENNO   </label>
                    <input type="text" className="form-control" id="InputRSATOKENNO" placeholder="RSATOKENNO"  {...register("rsaToken",{value:e["rsaToken"],required:"RSA token ID is required"})} onKeyUp={() => { trigger("rsaToken");}}/>
                    {errors.rsaToken && (<small className='text-danger'>{errors.rsaToken.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputRSATokenExpDate">RSATokenExpDate   </label>
                    <input type="date" className="form-control" id="InputRSATokenExpDate" placeholder="RSATokenExpDate"  {...register("rsaExpiry",{value:e["rsaExpiry"],required:"RSA EXP date is required"})} onKeyUp={() => { trigger("rsaExpiry");}}/>
                    {errors.rsaExpiry && (<small className='text-danger'>{errors.rsaExpiry.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputLBGEmailId">LBG Email Id</label>
                    <input type="email" className="form-control" id="InputLBGEmailId"  placeholder="Enter LBG Email ID"  {...register("lbgMail",{value:e["lbgMail"],required:"LBG mail ID is required",pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})} onKeyUp={() => { trigger("lbgMail");}}/>
                    {errors.lbgMail && (<small className='text-danger'>{errors.lbgMail.message}</small>)}
                  </div>
                  <br/>

                  

                </div>

                <p className='text-danger'><i>Navigate through the navigation bars to fill all the details, you will find submit button in last tab only.....</i></p>

                </div>

                
                <div className="tab-pane fade" id="contac" role="tabpanel" aria-labelledby="contact-tab">
                <div className='col-12 col-md-6'>
                  <h4>GENERAL Details</h4>


                  <div className="form-group">
                    <label htmlFor="InputContact">Contact No</label>
                    <input type="number" className="form-control" id="InputContact"  placeholder="Enter Contact Number"  {...register("contactNumber",{value:e["contactNumber"],required:"Contact number is required",pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },})} onKeyUp={() => { trigger("contactNumber");}}/>
                    {errors.contactNumber && (<small className='text-danger'>{errors.contactNumber.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputEmContact">Emergency Contact No</label>
                    <input type="number" className="form-control" id="InputEmContact"  placeholder="Enter Emergency Contact No "  {...register("emergencyContact",{value:e["emergencyContact"],required:"Emergency contact is required",pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },})} onKeyUp={() => { trigger("emergencyContact");}}/>
                    {errors.emergencyContact && (<small className='text-danger'>{errors.emergencyContact.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputPersonalEmailId">Personal Email Id</label>
                    <input type="email" className="form-control" id="InputPersonalEmailId"  placeholder="Enter Personal Email ID"  {...register("personalMail",{value:e["personalMail"],required:"Personal Mail is required",pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})} onKeyUp={() => { trigger("personalMail");}}/>
                    {errors.personalMail && (<small className='text-danger'>{errors.personalMail.message}</small>)}
                  </div>

                  <div className="form-group">
                    <label htmlFor="InputDOB">Date of Birth</label>
                    <input type="date" className="form-control" id="InputDOB"  placeholder="Enter Date of Birth" {...register("DOB",{value:e["DOB"],required:"Candidate DOB is required"})} onKeyUp={() => { trigger("DOB");}}/>
                    {errors.DOB && (<small className='text-danger'>{errors.DOB.message}</small>)}
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
