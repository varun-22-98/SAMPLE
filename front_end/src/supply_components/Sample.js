import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import Alert from './Alert';
import axios from 'axios';


export default function Sample () {
    const {register, handleSubmit,formState:{errors},reset,trigger} = useForm();
    const [alert,setAlert] = useState(null);

    const showAlert = (msg,type) =>{
      setAlert({ msg , type })
      setTimeout(function() {
        setTimeout(function() {
          window.location.reload(false)
        },1000)
        setAlert(null)
      },2000)
    };
    const onSubmit = (data,e) =>{
        e.preventDefault();
        const supplyDetails = {"data": data}
        // console.log(supplyDetails);
        axios.post('http://localhost:7000/addSupply', supplyDetails);
        showAlert('Details Added Successfully','success');
        reset();
      };
    
    return (
        <div className="me-md-5">
            <button type="button" className="btn btn-primary mb-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Details
            </button>
              <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-xl text-black fs-5.5 fw-bold fst-sans-serif">
              <div className="modal-content  bg-white" >
                  <Alert alert={alert} />
                  <div className="modal-header">
                  <h5 className="modal-title fw-bold w-100 text-center" id="exampleModalLabel">ENTER CANDIDATE DETAILS</h5> 
                  <button type="button" className="btn-close btn-danger" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                  
            <form role="form" onSubmit={handleSubmit(onSubmit)}>

            <div className="row">
              <div className='col-12 col-md-1'></div>
                <div className='col-12 col-md-5 '>
                    <div className="form-floating mb-3">
                            <select defaultValue={'Source'} id='Source' className="form-select shadow border border-black rounded"  {...register("Source",{required:"Source is required"})}>
                              <option value="Source" hidden >select source</option>
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
                          {errors.Source && (<small className='text-danger'>{errors.Source.message}</small>)}
                          
                          {/* <input type="text" className="form-control  shadow border border-black rounded " id="sourcesource"  placeholder="Enter Source" {...register("sourcesource",{required:"source is required"})} onKeyUp={() => { trigger("sourcesource");}}/>
                          <label htmlFor="sourcesource" className='d-inline'>Source</label>
                          {errors.sourcesource && (<small className='text-danger'>{errors.sourcesource.message}</small>)} */}
                    </div>
        
                    <div className="form-floating mb-3">
                            <select defaultValue={'Location'} className="form-select shadow border border-black rounded"  {...register("Location",{required:"Location is required"})}>
                            <option value="Location" hidden >select location</option>
                              <option value="Onshore">Onshore</option>
                              <option value="Offshore">Offshore</option>
                            </select>
                            <label className="pr-3"  htmlFor="exampleInputlocation" name="location">Location </label>
                          {errors.Location && (<small className='text-danger'>{errors.Location.message}</small>)}
                    </div>

                    <div className="form-floating mb-3">
                            <select defaultValue={'selectmedium'} className="form-select  shadow border border-black rounded"  {...register("Received_via",{required:"Received via is required"})}>
                            <option value="selectmedium" hidden >select the medium</option>
                              <option value="Knome">Knome</option>
                              <option value="LinkedIn">LinkedIn</option>
                              <option value="External Profile">External Profile</option>
                              <option value="Internal">Internal</option>
                            </select>
                            <label className="pr-3 " htmlFor="Received_via" name="receivedvia">Received Via</label>
                          {errors.Received_via && (<small className='text-danger'>{errors.Received_via.message}</small>)}
                    </div>

                    <div className="form-floating mb-3">
                            <select defaultValue={'Internal_External'} className="form-select shadow border border-black rounded"  {...register("Internal_External",{required:"Internal/External is required"})}>
                            <option value="Internal_External" hidden >select internal or external</option>
                              <option value="Internal">Internal</option>
                              <option value="External">External</option>
                            </select>
                            <label className="pr-3 " htmlFor="exampleInputinternalexternal" name="internalexternal">Internal/External</label>
                    </div>
        
                    <div className="form-floating mb-3">
                          <input type="date" className="form-control  shadow border border-black rounded" id="Received_Date"  placeholder="Received Date" {...register("Received_Date",{required:"Received date is required"})} onKeyUp={() => { trigger("Received_Date");}}/>
                          <label htmlFor="Received_Date" className='d-inline'>Received Date</label>
                          {errors.Received_Date && (<small className='text-danger'>{errors.Received_Date.message}</small>)}
                    </div>
                    
                    <div className="form-floating mb-3">
                            
                            <select defaultValue={'Lab'}  className="form-select shadow border border-black rounded"  {...register("Lab",{required:"Lab is required"})}>
                            <option value="Lab" hidden >select lab</option>
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
            </div>
        
                    <div className="col-12 col-md-5">
                    
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

                    <div className="form-floating mb-3">
                    
                          <textarea className="form-control  shadow border border-black rounded" id="customer"  placeholder="Customer Evaluation" {...register("Customer_Evaluation",{required:"Customer evaluation is required"})} onKeyUp={() => { trigger("customer");}}/>
                          <label htmlFor="customer">Customer Evaluation</label>
                          {errors.customer && (<small className='text-danger'>{errors.customer.message}</small>)}
                            
                    </div>
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
            </form>
                </div>
                </div>
                {/* <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div> */}
                </div>
            </div> 
            </div>
    )
}