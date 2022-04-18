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
import  Demandonshoreoffshore from './demand_components/Demandonshoreoffshore';
import './App.css';
import Sourcing from './supply_components/Sourcing';
import Fullfilled from './supply_components/Fullfilled';

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
        <Route path="/Banking1" element={< Demandonshoreoffshore Lab="Banking" Location="Onshore"/>}/>
        <Route path="/Cards1" element={< Demandonshoreoffshore Lab="Cards" Location="Onshore"/>}/>
        <Route path="/Savings1" element={< Demandonshoreoffshore Lab="Savings" Location="Onshore"/>}/>
        <Route path="/Loans1" element={< Demandonshoreoffshore Lab="Loans" Location="Onshore"/>}/>
        <Route path="/Digicomms1" element={< Demandonshoreoffshore Lab="Digi.Comms" Location="Onshore"/>}/>
        <Route path="/Docservices1" element={< Demandonshoreoffshore Lab="Doc.Services" Location="Onshore"/>}/>
        <Route path="/OIE1" element={< Demandonshoreoffshore Lab="OIE" Location="Onshore"/>}/>
        <Route path="/Personalisation1" element={< Demandonshoreoffshore Lab="Personalisation" Location="Onshore"/>}/> 
       
        

        <Route path="/Banking2" element={< Demandonshoreoffshore Lab="Banking" Location="Offshore"/>}/>
        <Route path="/Cards2" element={< Demandonshoreoffshore Lab="Cards" Location="Offshore"/>}/>
        <Route path="/Savings2" element={< Demandonshoreoffshore Lab="Savings" Location="Offshore"/>}/>
        <Route path="/Loans2" element={< Demandonshoreoffshore Lab="Loans" Location="Offshore"/>}/>
        <Route path="/Digicomms2" element={< Demandonshoreoffshore Lab="Digi.Comms" Location="Offshore"/>}/>
        <Route path="/Docservices2" element={< Demandonshoreoffshore Lab="Doc.Services" Location="Offshore"/>}/>
        <Route path="/OIE2" element={< Demandonshoreoffshore Lab="OIE" Location="Offshore"/>}/>
        <Route path="/Personalisation2" element={< Demandonshoreoffshore Lab="Personalisation" Location="Offshore"/>}/> 
        <Route path="/DemandDetails" element={<SourceLab />}/>
        <Route path="/Sourcing" element={<Sourcing/>}/>
        <Route path="/Fullfilled" element={<Fullfilled/>}/>
      </Route>
      {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
    </Routes>
  
  </BrowserRouter>,
  document.getElementById('root')
);
