import React from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function DeleteSupply({_id,showAlert}) {
    const {handleSubmit,reset} = useForm();

    const onSubmit = (data,e) =>{
        e.preventDefault();
        console.log(_id);
        axios.delete('http://localhost:7000/deleteSupply', {data: {id: _id}});
        showAlert('Details Deleted Successfully','danger');
        reset();
      };

    return (
        <form role="form" onSubmit={handleSubmit(onSubmit)}>
           <button className="btn btn-link p-0" style={{color:'#DC3545',fontSize:'12px',fontWeight:'bold'}} href='#'>
              <i className="bi bi-trash d-md-flex">Delete</i>
              </button>
        </form>
    )
}