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
import DemandSupply from './demand_components/DemandSupply';
import SourceLab from './demand_components/SourceLab';
import './App.css';
import Sourcing from './supply_components/Sourcing';

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
        <Route path="/demand" element={<DemandSupply/>}/>
        <Route path="/DemandSupply" element={<DemandSupply/>}/>
        {/* <Route path="/Banking1" element={<SourceLab Lab="Banking"/>}/>
        <Route path="/Cards1" element={<SourceLab Lab="Cards"/>}/>
        <Route path="/Savings1" element={<SourceLab Lab="Savings"/>}/>
        <Route path="/Loans1" element={<SourceLab Lab="Loans"/>}/>
        <Route path="/Digicomms1" element={<SourceLab Lab="Digi.Comms"/>}/>
        <Route path="/Docservices1" element={<SourceLab Lab="Doc.Services"/>}/>
        <Route path="/OIE1" element={<SourceLab Lab="OIE"/>}/>
        <Route path="/Personalisation1" element={<SourceLab Lab="Personalisation"/>}/> */}
        <Route path="/DemandDetails" element={<SourceLab />}/>
        <Route path="/Sourcing" element={<Sourcing/>}/>
      </Route>
      {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
    </Routes>
  
  </BrowserRouter>,
  document.getElementById('root')
);
