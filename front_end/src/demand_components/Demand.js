import React,{useEffect,useState} from 'react';
import './Demand.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
// import Alert from './Alert';





export default function Demand() {
    // const [alert,setAlert]= useState(null);
    const {register, handleSubmit,formState:{errors},reset,trigger} = useForm();
    // const showAlert = (msg,type)=>{
    //   setAlert({msg,type})
    //   setTimeout(()=>setAlert(null),5000)
    // }
     const onSubmit = (data,e) =>{
       e.preventDefault();
        
        const demand = {"data": data}
      axios.post('http://localhost:7000/adddemand', demand)
      
        window.location.reload(false);
        reset();
        
        console.log(demand);
        //alert("Demand Form submitted Successfully");

      };
  return (
    <>
    <button type="button" className="btn btn-primary btn-round w-50 mx-auto" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-briefcase"></i>   Demand
    </button>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Enter Employee Details</h5> 
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          
          <div className="modal-body">
            <form className="col-12" onSubmit={handleSubmit(onSubmit,)} >
              <div className='row '>
                <div className='col-12 '></div>
                  <div className='col '>
                     
                     <div className="form-floating mb-3">
                            
                            <select  className="form-select shadow border border-black rounded"  {...register("Role",{required:"Role is required"})}>
                               
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
                            <label className="pr-3 " htmlFor="Role" name="Role">Role </label>
                            </div>
                     {/* <div className="form-floating mb-3">
                             <input type="text" className="form-control shadow border border-black rounded" id="RequiredSkills"  placeholder="Enter the Required Skill"  {...register("RequiredSkill",{required:"Required Skills are required"})} onKeyUp={() => { trigger("RequiredSkills");}}/>
                             <label htmlFor="RequiredSkills" className='d-inline  '>Required Skills</label>
                             
                             {errors.RequiredSkills && (<small className='text-danger'>{errors.RequiredSkills.message}</small>)}
                    </div> */}
                      <div className="form-floating mb-3">
                            
                            <select  className="form-select shadow border border-black rounded"  {...register("RequiredSkill",{required:"Required Skills are required"})}>
                               
                                <option value="React">React</option>
                                <option value="Vue">Vue</option>
                                <option value="Angular">Angular</option>
                                <option value="Nodejs">Nodejs</option>
                                <option value="MERN">Quality Engineer</option>
                                <option value="MEAN">IOS Developer</option>
                                <option value="Kotlin">Windows Admin</option>
                                <option value="Flutter">Product Owner</option>
                                <option value="Java">Android Developer</option>
                                <option value="Swift">Full Stack Developer</option>
                                <option value="HTML CSS JS">UX Designer</option>
                                <option value="Mavens">Devops Engineer</option>
                                <option value="Jenkins">Mobile Tester</option>
                                <option value="Python">Java Developer</option>
                                <option value="Data Scientist">Data Scientist</option>
                                <option value="Project Manager">Project Manager</option>
                                <option value="Delivery Head">Delivery Head</option>
                                <option value="Release Manager">Release Manager</option>
                            </select>
                            <label className="pr-3 " htmlFor="RequiredSkill" name="RequiredSkill">Required Skills </label>
                            </div>
                    <div className="form-floating mb-3">
                             <input type="number" className="form-control shadow border border-black rounded" id="NoofPosition"  placeholder="Enter the No of Positions"  {...register("NoofPosition",{required:"No of Positions are required"})} onKeyUp={() => { trigger("NoofPosition");}}/>
                             <label htmlFor="NoofPosition" className='d-inline  '>No of Positions</label>
                             
                             {errors.NoofPosition && (<small className='text-danger'>{errors.NoofPosition.message}</small>)}
                    </div>
                    <div className="form-floating mb-3">
                            
                            <select  className="form-select shadow border border-black rounded"  {...register("Labs",{required:"Lab is required"})}>
                               
                                <option value="Cards">Cards</option>
                                <option value="Loans">Loans</option>
                                <option value="Banking">Banking</option>
                                <option value="Savings">Savings</option>
                                <option value="OIE">OIE</option>
                                <option value="Personalisation">Personalisation</option>
                                <option value="Digi.Comms">Digi.Comms</option>
                                <option value="Doc.Services">Doc.Services</option>
                            </select>
                            <label className="pr-3 " htmlFor="Labs" name="Lab">Labs </label>
                    </div>
                    <div className="form-floating mb-3">
                            <select  className="form-select shadow border border-black rounded"  {...register("Location",{required:"Location is required"})}>
                              
                              <option value="Onshore">Onshore</option>
                              <option value="Offshore">Offshore</option>
                            </select>
                            <label className="pr-3"  htmlFor="Location" name="Location">Location </label>
                    </div>
                    <div className="form-floating mb-3">
                            <select  className="form-select shadow border border-black rounded"  {...register("DemandType",{required:"DemandType is required"})}>
                             
                              <option value="New">New</option>
                              <option value="Replacement">Replacement</option>
                              <option value="Placeholder">Placeholder</option>
                            </select>
                            <label className="pr-3"  htmlFor="DemandType" name="DemandType">Demand Type </label>
                    </div>
                    <div className="text-center ">
                    <button className='btn btn-primary'>Submit</button>
                    </div>
              
                  
              
              
               
              </div>
              </div>

              
              </form>
              </div>
              </div>
              </div>
              
  </div>
              
              
              
    </>
  );
}
