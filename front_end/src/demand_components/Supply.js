import React, {Componenets,useState, useLayoutEffect} from 'react';
import './Supply.css';
import { useForm } from 'react-hook-form';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'






export default function Supply() {
   const [value, setValue] = useState();
   
   const _MS_PER_DAY = 1000 * 60 * 60 * 24;

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// test it

   
    const {register, control,handleSubmit,formState:{errors},reset,trigger} = useForm();
    const onSubmit = (data) =>{
      // var a = new Date(data.sourcereceiveddate)
      // var b = new Date(data.receivedevaluationon)
      // var difference = dateDiffInDays(a, b);
      //   data.datediff = difference;
      //   console.log(data);
       const supply = {"data": data}
        axios.post('http://localhost:7000/addSupply', supply)
        window.location.reload(false);
        reset();
        alert.success("Form Submitted Successfully");
      };
      
     
  return (
    <>
    
    <button type="button" className="btn btn-primary w-50 mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal1"><i class="bi bi-briefcase-fill ml-2"></i>  Supply
    </button>
    <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
    <div className="modal-dialog modal-md">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Add Supply Details</h5> 
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form role="form" onSubmit={handleSubmit(onSubmit)} >
             <div className='row'>
             <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Basic Details</button>
                  </li>
                  <li className="nav-item" role="presentation"> 
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Evalauation Details</button>
                  </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className='col'>
                  <br/>
                  <h4 className='text-dark'>Basic Details</h4>


             <div className='col-12 col-md-1'></div>
                <div className='col '>
                <div className="form-floating mb-3">
                          <input type="date" className="form-control  shadow border border-black rounded" id="Received_Date"  placeholder="Received Date" {...register("Received_Date",{required:"Received date is required"})} onKeyUp={() => { trigger("Received_Date");}}/>
                          <label htmlFor="Received_Date" className='d-inline'>Received Date</label>
                          {errors.Received_Date && (<small className='text-danger'>{errors.Received_Date.message}</small>)}
                    </div>
                    
                    <div className="form-floating mb-3">
                    <select defaultValue={'Source'} id='Source' className="form-select shadow border border-black rounded"  {...register("Source",{required:"Source is required"})}>
                              <option value="Source" hidden >Select Source</option>
                                <option value="Internal">Internal</option>
                                <option value="UK EP">UK EP</option>
                                <option value="External - EP">External - EP</option>
                                <option value="UK BA">UK BA</option>
                                <option value="R2R">R2R</option>
                                <option value="Knome post">Knome post</option>
                                <option value="RMG">RMG</option>
                                <option value="Shailender Tiwari">Shailender Tiwari</option>
                                <option value="Internal UK">Internal UK</option>
            
                                {/* <option value="externalEPST">External - EP (GBU - Shailender)</option> */}
                                <option value="Business Associate">Business Associate</option>
                                <option value="Trainee">Trainee</option>
                                <option value="External Profile">External Profile</option>
                                <option value="TD">TD</option>
                                <option value="TAG">TAG</option>
                                <option value="HR">HR</option>
                                <option value="LinkedIn">LinkedIn</option>
                                <option value="Job Website">Job Website</option>
                                <option value="Employees">Employees</option>
                              </select>
                            <label className="pr-3"  htmlFor="exampleSource" name="source">Source </label>
                          
                          {/* <input type="text" className="form-control  shadow border border-black rounded " id="sourcesource"  placeholder="Enter Source" {...register("sourcesource",{required:"source is required"})} onKeyUp={() => { trigger("sourcesource");}}/>
                          <label htmlFor="sourcesource" className='d-inline'>Source</label>
                          {errors.sourcesource && (<small className='text-danger'>{errors.sourcesource.message}</small>)} */}
                    </div>
                    <div className="form-floating mb-3">
                            
                            <input type="number" className="form-control  shadow border border-black rounded autocomplete-off" id="EMPID"  placeholder="Enter the EP ID/EMP ID" {...register("EMPID",{required:"EP/EMP ID  are required"})} onKeyUp={() => { trigger("EMPID");}}/>
                            <label htmlFor="EMPID" className="d-inline " >EP ID/EMP ID</label>
                            {errors.EMPID && (<small className='text-danger'>{errors.EMPID.message}</small>)}
                    </div>
                    <div className="form-floating mb-3">
                             <input type="text" className="form-control shadow border border-black rounded" id="Candidate"  placeholder="Enter the Candidate Name"  {...register("Candidate",{required:"Name of the Candidate is required"})} onKeyUp={() => { trigger("Candidate");}}/>
                             <label htmlFor="Candidate" className='d-inline  '>Candidate Name</label>
                             
                             {errors.Candidate && (<small className='text-danger'>{errors.Candidate.message}</small>)}
                           </div>
                    <div className="form-floating mb-3">
                              <select defaultValue={'Selectgrade'}   className="form-select shadow border border-black rounded"  {...register("Grade",{required:"Grade is required"})}>
                                  <option value="Selectgrade" hidden >Select Grade</option>
                                  <option value="Y">Y</option>  
                                  <option value="C1">C1</option>
                                  <option value="C1Y">C1Y</option>  
                                  <option value="C2">C2</option>
                                  <option value="C3A">C3A</option>
                                  <option value="C3B">C3B</option>
                                  <option value="C4">C4</option>
                                  <option value="C5">C5</option> 
                                  <option value="SP1">SP1</option>
                                  <option value="SP2">SP2</option>
                                  <option value="Other">Other</option>
                              </select>
                              <label className="pr-3 " htmlFor="Grade" name="Grade">Grade</label>
                    </div>
                    <div className="form-floating mb-3">
                            
                            <select defaultValue={'Lab'}  className="form-select shadow border border-black rounded"  {...register("Lab",{required:"Lab is required"})}>
                            <option value="Lab" hidden >Select Lab</option>
                              <option value="Cards">Cards</option>
                              <option value="Loans">Loans</option>
                              <option value="Banking">Banking</option>
                              <option value="Savings">Savings</option>
                              <option value="OIE">OIE</option>
                              <option value="Personalisation">Personalisation</option>
                              <option value="DIGI COMMS">DIGI COMMS</option>
                              <option value="DOC. SERVICES">DOC. SERVICES</option>
                            </select>
                            <label className="pr-3 " htmlFor="exampleInputlab" name="lab">Lab </label>
                    </div>
                    
                           
                           <div className="form-floating mb-3">
                            
                            <select  defaultValue={'Role1'} className="form-select shadow border border-black rounded"  {...register("Role1",{required:"Role is required"})}>
                            <option value="Role1" hidden >Select Role</option>
                            <option value="Architect">Architect</option>
                                <option value="Business Analyst">Business Analyst</option>
                                <option value="Scrum Master">Scrum Master</option>
                                <option value="BackEnd Engineer">BackEnd Engineer</option>
                                <option value="FrontEnd Engineer">FrontEnd Engineer</option>
                                <option value="Quality Engineer">Quality Engineer</option>
                                <option value="IOS Developer">IOS Developer</option>
                                <option value="Windows Admin">Windows Admin</option>
                                <option value="Product Owner">Product Owner</option>
                                <option value="Android Developer">Android Developer</option>
                                <option value="Full Stack Developer">Full Stack Developer</option>
                                <option value="UX Designer">UX Designer</option>
                                <option value="Devops Engineer">Devops Engineer</option>
                                <option value="Mobile Tester">Mobile Tester</option>
                                <option value="Java Developer">Java Developer</option>
                                <option value="Data Scientist">Data Scientist</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="Delivery Head">Delivery Head</option>
                                <option value="Release Manager">Release Manager</option>
                                
                            </select>
                            <label className="pr-3 " htmlFor="Role1" name="Role1">Role </label>
                            </div>
        
                    <div className="form-floating mb-3">
                    <select defaultValue={'Location'} className="form-select shadow border border-black rounded"  {...register("Location",{required:"Location is required"})}>
                            <option value="Location" hidden >Select Location</option>
                              <option value="Onshore">Onshore</option>
                              <option value="Offshore">Offshore</option>
                            </select>
                            <label className="pr-3"  htmlFor="exampleInputlocation" name="location">Location </label>
                          {errors.Location && (<small className='text-danger'>{errors.Location.message}</small>)}
                    </div>
                    <div className="form-floating mb-3">
                              <input type="num"  className="form-control shadow border border-black rounded" id="Contact Number"  placeholder="Enter the Contact Number"  {...register("ContactNumber",{required:"Contact Number  is required",pattern:{value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no"}})} onKeyUp={() => { trigger("ContactNumber");}}/>
                              <label htmlFor="ContactNumber" className='d-inline'>Contact Number</label>
                              {errors.ContactNumber && (<small className='text-danger'>{errors.ContactNumber.message}</small>)}
                    </div>
                    <div className="form-floating mb-3">
                    <input type="email" className="form-control shadow border border-black rounded" id="Email"  placeholder="Enter the Email"  {...register("Email",{required:"Email  is required",pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address"}})} onKeyUp={() => { trigger("Email");}}/>
                              <label htmlFor="Email" className='d-inline'>Email</label>
                              {errors.Email && (<small className='text-danger'>{errors.Email.message}</small>)}
                           </div>
                    <br/>
                    </div>
                    </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">





                     <div className='col'>
                       <br/>
                      <h4 className='text-dark'>Evaluation</h4>
                                  
                    <div className="col">
                    
                    <div className="form-floating mb-3">
                          <input type="date" className="form-control shadow border border-black rounded" id="Sent_For_Evaluation_On"  placeholder="Sent for Evaluation Date" {...register("Sent_For_Evaluation_On",{required:"Sent for Evaluation date is required"})} onKeyUp={() => { trigger("Sent_For_Evaluation_On");}}/>
                          <label htmlFor="sourceevaluatedddate">Sent for Evaluation On</label>
                          {errors.Sent_For_Evaluation_On && (<small className='text-danger'>{errors.Sent_For_Evaluation_On.message}</small>)}
                    </div>
                    
                    <div className="form-floating mb-3">
                          
                          <input type="date" className="form-control shadow border border-black rounded" id="Received_Evaluation_On"  placeholder="Received Evaluation Date" {...register("Received_Evaluation_On",{required:"Received Evaluation date is required"})} onKeyUp={() => { trigger("Received_Evaluation_On");}}/>
                          <label htmlFor="sourcereceivedevaluatedddate">Received Evaluation On</label>
                          {errors.Received_Evaluation_On && (<small className='text-danger'>{errors.Received_Evaluation_On.message}</small>)}
                    </div>

                    <div className="form-floating mb-3">
                          
                          <input type="text" className="form-control  shadow border border-black rounded " id="sourceevaluatedby"  placeholder="Enter evaluated person name" {...register("Evaluated_By",{required:"Evaluated person name is required"})} onKeyUp={() => { trigger("sourceevaluatedby");}}/>
                          <label htmlFor="sourceevaluatedby" className='d-inline'>Evaluated By</label>
                          {errors.sourceevaluatedby && (<small className='text-danger'>{errors.sourceevaluatedby.message}</small>)}
                    </div>
                    
                    <div className="form-floating mb-3">
                    
                          <textarea className="form-control  shadow border border-black rounded" id="Feedback"  placeholder=" Feedback" {...register("Internal_Evaluation_Feedback",{required:"Internal evaluation feedback is required"})} onKeyUp={() => { trigger("feedback");}}/>
                          <label htmlFor="feedback">Internal Evaluation Feedback</label>
                          {errors.feedback && (<small className='text-danger'>{errors.feedback.message}</small>)}
                            
                    </div>

                    {/* <div className="form-floating mb-3">
                    <select defaultValue={'select'} className="form-select shadow border border-black rounded"  {...register("Profileselected",{required:"Either Yes/No"})}>
                              <option value="select" hidden >Select</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                            <label className="pr-3"  htmlFor="Profileselected" name="ProfileSelected">Profile Selected</label>
                    </div> */}
                    {/* <div className="form-floating mb-3 shadow border border-black rounded">
                            <select defaultValue={'selectcust'} className="form-select"  placeholder="Customer Evaluation Required"{...register("CustomerEvaluationReq",{required:"selection status is required"})}>
                              <option value="selectcust" hidden >select</option>
                              <option value="Yes"> Yes</option>
                              <option value="No" > No</option>
                            </select>
                            <label className="pr-3" htmlFor="CustomerEvaluationReq" name="Customer Evaluation Required">Customer Evaluation Required </label>
                    </div> */}
  <div className="form-floating mb-3">
                          <input type="date" className="form-control shadow border border-black rounded" id="Customer_Interview_Date"  placeholder="Customer Interview Date" {...register("Customer_Interview_Date",{required:"Customer Interview Date is required"})} onKeyUp={() => { trigger("Sent_For_Evaluation_On");}}/>
                          <label htmlFor="Customer_Interview_Date">Customer Interview Date</label>
                          {errors.Customer_Interview_Date && (<small className='text-danger'>{errors.Customer_Interview_Date.message}</small>)}
                    </div>


<div className="form-floating mb-3">
                    
                    <textarea className="form-control  shadow border border-black rounded" id="customer"  placeholder="Customer Evaluation" {...register("Customer_Evaluation",{required:"Customer evaluation is required"})} onKeyUp={() => { trigger("customer");}}/>
                    <label htmlFor="customer">Customer Evaluation</label>
                    {errors.customer && (<small className='text-danger'>{errors.customer.message}</small>)}
                      
              </div>
                    
                    {/* <div className="form-floating mb-3 shadow border border-black rounded">
                            <select defaultValue={'selectcust'} className="form-select"  placeholder="CutomerSelection"{...register("CustomerSelection",{required:"Either Yes/No"})}>
                              <option value="selectcust" hidden >select</option>
                              <option value="Yes"> Yes</option>
                              <option value="No" > No</option>
                            </select>
                            <label className="pr-3" htmlFor="CustomerSelection" name="CustomerSelection">Customer Selection</label>
                    </div> */}
                    <div className="form-floating mb-3 shadow border border-black rounded">
                            <select defaultValue={'selected'} className="form-select"  placeholder="Select status"{...register("Selection_Status",{required:"selection status is required"})}>
                              <option value="selected" hidden >select status</option>
                              <option value="Selected">Selected</option>
                              <option value="Not Considered" >Not Considered</option>
                            </select>
                            <label className="pr-3" htmlFor="exampleInputstatus" name="status">Status </label>
                    </div>

                    </div>
                    <div className="text-center pt-2">
                          <input type="submit" className='btn btn-primary' value="Submit"/> 
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
            </form>
                </div>
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div> */}
                </div>
            </div>
            
            </>
    );
}
              