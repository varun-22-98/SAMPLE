import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Lab from './components/Lab'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Breadcrumbs from './components/Breadcrumbs';
import Employee from './components/Employee';
import Login from './components/Login';
import Protected from './components/Protected';
import ForgotPassword from './components/ForgotPassword';

ReactDOM.render(
  <BrowserRouter>
  
  <Breadcrumbs/>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route element={<Protected/>}>
        <Route path="/dashboard" element={<App/>}/>
        <Route path="/cards" element={<Lab title="Cards"/>}/>
        <Route path="/loans" element={<Lab title="Loans"/>}/>
        <Route path="/banking" element={<Lab title="Banking"/>}/>
        <Route path="/savings" element={<Lab title="Savings"/>}/>
        <Route path="/zoomerskool" element={<Lab title="Zoomerskool"/>}/>
        <Route path="/total" element={<Lab title="OCC"/>}/>
        <Route path="/employee" element={<Employee />}/>
      </Route>
      {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
    </Routes>
  
  </BrowserRouter>,
  document.getElementById('root')
);
