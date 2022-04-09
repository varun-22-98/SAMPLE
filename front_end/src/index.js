import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Lab from './components/Lab'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Breadcrumbs from './components/Breadcrumbs';
import Employee from './components/Employee';
import Login from './components/Login';
import Protected from './components/Protected';
import ForgotPassword from './components/ForgotPassword';
import SecondPage from './components/SecondPage';

ReactDOM.render(
  <BrowserRouter>
  
  <Breadcrumbs/>
    <Routes>
      
      <Route path="/" element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route element={<Protected/>}>
        <Route path='/second' element={<SecondPage/>}/>
        <Route path="/dashboard" element={<App/>}/>
        <Route path="/cards" element={<Lab title="Cards"/>}/>
        <Route path="/loans" element={<Lab title="Loans"/>}/>
        <Route path="/banking" element={<Lab title="Banking"/>}/>
        <Route path="/savings" element={<Lab title="Savings"/>}/>
        <Route path="/oie" element={<Lab title="OIE"/>}/>
        <Route path="/personalization" element={<Lab title="Personalization"/>}/>
        <Route path="/DIGI_COMMS" element={<Lab title="DIGI COMMS"/>}/>
        <Route path="/DOC_services" element={<Lab title="DOC services"/>}/>
        <Route path="/other" element={<Lab title="Other"/>}/>
        <Route path="/total" element={<Lab title="OCC"/>}/>
        <Route path="/employee" element={<Employee />}/>
      </Route>
      {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
    </Routes>
  
  </BrowserRouter>,
  document.getElementById('root')
);
