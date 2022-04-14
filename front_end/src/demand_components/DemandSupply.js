import React, {useState, useLayoutEffect} from 'react';
import {BsCreditCard} from 'react-icons/bs'
import {FaBalanceScale} from 'react-icons/fa'
import {MdSavings} from 'react-icons/md'
import {RiBankFill} from 'react-icons/ri'
import {TiGroup} from 'react-icons/ti'
import * as ReactBootStrap from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {MdAlternateEmail} from 'react-icons/md';


import axios from 'axios';
// import SourceLab from './SourceLab';
import './DemandSupply.css';
import NavBarDashboard from './NavBarDashboard';






export default function DemandSupply() {
    
 

   
   

   
      
      const [demand,setDemand]= useState([{

      }])
    useLayoutEffect(() => {
        axios.get('http://localhost:7000/getdemand')
        .then(response => setDemand(response.data))
        .catch((err) => {console.log(err)});
        
    }, [])
    const [supply,setSupply]= useState([{

    }])
    useLayoutEffect(() => {
        axios.get('http://localhost:7000/getsupply')
        .then(response => setSupply(response.data))
        .catch((err) => {console.log(err)});
        
    }, [])
    
    var bankingfulon=0;
    var bankingfuloff=0;
    var cardsfuloff =0;
    var cardsfulon =0;
    var savingsfulon=0;
    var savingsfuloff=0;
    var loansfulon=0;
    var loansfuloff=0;
    var oiefulon=0;
    var oiefuloff=0;
    var personalisationfuloff=0;
    var personalisationfulon=0;
    var digicommsfuloff=0;
    var digicommsfulon=0;
    var docservicefulon=0;
    var docservicefuloff=0;
    ////////////////////////////for loop for fullfilled column////////////////////////////////////////////////////
    for(let s of supply)
    {
        if(s.Labs1==="Banking" && (s.Location1==="Onshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            bankingfulon+=1;
        }
        if(s.Labs1==="Banking" && (s.Location1==="Offshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            bankingfuloff+=1;
        }
        if(s.Labs1==="Cards" && (s.Location1==="Offshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            cardsfuloff+=1;
        }
        if(s.Labs1==="Cards" && (s.Location1==="Onshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            cardsfulon+=1;
        }
        if(s.Labs1==="Savings" && (s.Location1==="Offshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            savingsfuloff+=1;
        }
        if(s.Labs1==="Savings" && (s.Location1==="Onshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            savingsfulon+=1;
        }
        if(s.Labs1==="Loans" && (s.Location1==="Onshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            loansfulon+=1;
        }
        if(s.Labs1==="Loans" && (s.Location1==="Offshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            loansfuloff+=1;
        }
        if(s.Labs1==="OIE" && (s.Location1==="Offshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            oiefuloff+=1;
        }
        if(s.Labs1==="OIE" && (s.Location1==="Onshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            oiefulon+=1;
        }
        if(s.Labs1==="Digi.Comms" && (s.Location1==="Offshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            digicommsfuloff+=1;
        }
        if(s.Labs1==="Digi.Comms" && (s.Location1==="Onshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            digicommsfulon+=1;
        }
        if(s.Labs1==="Doc.Services" && (s.Location1==="Offshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            docservicefuloff+=1;
        }
        if(s.Labs1==="Doc.Services" && (s.Location1==="Onshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            docservicefulon+=1;
        }
        if(s.Labs1==="Personalisation" && (s.Location1==="Offshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            personalisationfuloff+=1;
        }
        if(s.Labs1==="Personalisation" && (s.Location1==="Onshore" && ((s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="No") || (s.Profileselected ==="Yes" && s.CustomerEvaluationReq ==="Yes" && s.CustomerSelection === "Yes")))) 
        {
            personalisationfulon+=1;
        }
        
    }
  


    var cardsoff =0;
    var cardson = 0;
    var bankingoff = 0;
    var bankingon = 0;
    var loanoff = 0;
    var loanon = 0;
    var savingsoff = 0;
    var savingson = 0;
    var oieoff = 0;
    var oieon = 0;
    var personalisationoff = 0;
    var personalisationon = 0;
    var digicommson =  0;
    var digicommsoff = 0;
    var docserviceoff = 0;
    var docserviceeon = 0;
    var totaloff = 0;
    var totalon = 0;
    var cardsoffs =0;
    var cardsons =0;
    var bankingoffs = 0;
    var bankingons = 0;
    var loanoffs = 0;
    var loanons = 0;
    var savingsoffs = 0;
    var savingsons = 0;
    var oieoffs = 0;
    var oieons = 0;
    var personalisationoffs = 0;
    var personalisationons = 0;
    //var oieoff = Object.keys(demand.filter((d) => d["Labs"] === "OIE" & d["Location"]==="Offshore")).length;
    var digicommsons =  0;
    var digicommsoffs = 0;
   // var oieon = Object.keys(demand.filter((d) => d["Labs"] === "OIE" & d["Location"]==="Onshore")).length;
    var docserviceoffs = 0;
    var docserviceeons = 0;
    var totaloffs = 0;
    var totalons = 0;
    

var v = demand.filter((d) => d["Labs"] === "Cards" & d["Location"]==="Offshore");
var a = demand.filter((d) => d["Labs"] === "Cards" & d["Location"]==="Onshore");
var b = demand.filter((d) => d["Labs"] === "Banking" & d["Location"]==="Offshore");
var c = demand.filter((d) => d["Labs"] === "Banking" & d["Location"]==="Onshore");
var p = demand.filter((d) => d["Labs"] === "Loans" & d["Location"]==="Offshore");
var e = demand.filter((d) => d["Labs"] === "Loans" & d["Location"]==="Onshore");
var f = demand.filter((d) => d["Labs"] === "Savings" & d["Location"]==="Offshore");
var g = demand.filter((d) => d["Labs"] === "Savings" & d["Location"]==="Onshore");
var h =demand.filter((d) => d["Labs"] === "Personalisation" & d["Location"]==="Offshore");
var i = demand.filter((d) => d["Labs"] === "Personalisation" & d["Location"]==="Onshore");
var j = demand.filter((d) => d["Labs"] === "Digi.Comms" & d["Location"]==="Offshore");
var k =demand.filter((d) => d["Labs"] === "Digi.Comms" & d["Location"]==="Onshore");
var l =demand.filter((d) => d["Labs"] === "Doc.Services" & d["Location"]==="Offshore");
var m =demand.filter((d) => d["Labs"] === "Doc.Services" & d["Location"]==="Onshore");
var n =demand.filter((d) => d["Labs"] === "OIE" & d["Location"]==="Offshore");
var o =demand.filter((d) => d["Labs"] === "OIE" & d["Location"]==="Onshore");
var r = demand.filter((d) => d["Location"]==="Offshore");
var q = demand.filter((d) => d["Location"]==="Onshore");


var vs = supply.filter((d) => d["Labs1"] === "Cards" & d["Location1"]==="Offshore");
var as = supply.filter((d) => d["Labs1"] === "Cards" & d["Location1"]==="Onshore");
var bs = supply.filter((d) => d["Labs1"] === "Banking" & d["Location1"]==="Offshore");
var cs = supply.filter((d) => d["Labs1"] === "Banking" & d["Location1"]==="Onshore");
var ps = supply.filter((d) => d["Labs1"] === "Loans" & d["Location1"]==="Offshore");
var es = supply.filter((d) => d["Labs1"] === "Loans" & d["Location1"]==="Onshore");
var fs = supply.filter((d) => d["Labs1"] === "Savings" & d["Location1"]==="Offshore");
var gs = supply.filter((d) => d["Labs1"] === "Savings" & d["Location1"]==="Onshore");
var hs=supply.filter((d) => d["Labs1"] === "Personalisation" & d["Location1"]==="Offshore");
var is = supply.filter((d) => d["Labs1"] === "Personalisation" & d["Location1"]==="Onshore");
var js = supply.filter((d) => d["Labs1"] === "Digi.Comms" & d["Location1"]==="Offshore");
var ks =supply.filter((d) => d["Labs1"] === "Digi.Comms" & d["Location1"]==="Onshore");
var ls =supply.filter((d) => d["Labs1"] === "Doc.Services" & d["Location1"]==="Offshore");
var ms =supply.filter((d) => d["Labs1"] === "Doc.Services" & d["Location1"]==="Onshore");
var ns = supply.filter((d) => d["Labs1"] === "OIE" & d["Location1"]==="Offshore");
var os =supply.filter((d) => d["Labs1"] === "OIE" & d["Location1"]==="Onshore");
var rs = supply.filter((d) => d["Location1"]==="Offshore");
var qs = supply.filter((d) => d["Location1"]==="Onshore");




for(let d of v)
{
    cardsoff+=Number(d.NoofPosition);
    
}

for(let d of a)
{
    cardson+=Number(d.NoofPosition);
}


for(let d of b)
{
    bankingoff+=Number(d.NoofPosition);
}
for(let d of c)
{
    bankingon+=Number(d.NoofPosition);
}
for(let d of p)
{
    loanoff+=Number(d.NoofPosition);
}
for(let d of e)
{
    loanon+=Number(d.NoofPosition);
}
for(let d of f)
{
    savingsoff+=Number(d.NoofPosition);
}
for(let d of g)
{
    savingson+=Number(d.NoofPosition);
}
for(let d of h)
{
    personalisationoff+=Number(d.NoofPosition);
}
for(let d of i)
{
   personalisationon+=Number(d.NoofPosition);
}
for(let d of j)
{
  digicommsoff+=Number(d.NoofPosition);
}
for(let d of k)
{
    digicommson+=Number(d.NoofPosition);
}
for(let d of l)
{
    docserviceoff+=Number(d.NoofPosition);
}
for(let d of m)
{
    docserviceeon+=Number(d.NoofPosition);
}
for(let d of n)
{
    oieoff+=Number(d.NoofPosition);
}
for(let d of o)
{
    oieon+=Number(d.NoofPosition);
}
for(let d of r)
{
    totaloff+=Number(d.NoofPosition);
}
for(let d of q)
{
    totalon+=Number(d.NoofPosition);
}

///////////////////////////////////////////////////////////

var totalfulloff=savingsoffs+loansfuloff+personalisationfuloff+bankingfuloff+oiefuloff+digicommsfuloff+docservicefuloff+cardsfuloff;
var totalfullon= savingsons+loansfulon+personalisationfulon+bankingfulon+oiefulon+digicommsfulon+docservicefulon+cardsfulon;

for(let d of vs)
{
    Number(cardsoffs+=1);
    
}

for(let d of as)
{
    cardsons+=1;
}


for(let d of bs)
{
    Number(bankingoffs+=1);
}
for(let d of cs)
{
    Number(bankingons+=1);
}
for(let d of ps)
{
    loanoffs+=1;
}
for(let d of es)
{
    loanons+=1;
}
for(let d of fs)
{
    savingsoffs+=1;
}
for(let d of gs)
{
    savingsons+=1;
}
for(let d of hs)
{
    personalisationoffs+=1;
}
for(let d of is)
{
   personalisationons+=1;
}
for(let d of js)
{
  digicommsoff+=1;
}
for(let d of ks)
{
    digicommsons+=1;
}
for(let d of ls)
{
    docserviceoffs+=1;
}
for(let d of ms)
{
    docserviceeons+=1;
}
for(let d of ns)
{
    oieoff+=1;
}
for(let d of os)
{
    oieons+=1;
}
for(let d of rs)
{
    totaloffs=Number(cardsoffs+loanoffs+savingsoffs+oieoffs+personalisationoffs+docserviceoffs+digicommsoffs+bankingoffs);
}
for(let d of qs)
{
    totalons=Number(cardsons+loanons+savingsons+oieons+personalisationons+bankingons+digicommsons+docserviceeons);
}

const tabledata = [
    {
        "S.No":1,
        "Labs":"Cards",
        "Demand Onshore":cardson,
        "Demand Offshore":cardsoff,
        "Supply Onshore":cardsons,
        "Supply Offshore":cardsoffs,
        "Fullfilled Onshore":cardsfulon,
        "Fullfilled Offshore":cardsfulon
    },
    {
        "S.No":2,
        "Labs":" Banking",
        "Demand Onshore":bankingon,
        "Demand Offshore":bankingoff,
        "Supply Onshore":bankingons,
        "Supply Offshore":bankingoffs,
        "Fullfilled Onshore":bankingfulon,
        "Fullfilled Offshore":bankingfuloff
    },
    {
        "S.No":3,
        "Labs":"Digi Comms",
        "Demand Onshore":digicommson,
        "Demand Offshore":digicommsoff,
        "Supply Onshore":digicommson,
        "Supply Offshore":digicommsoffs,
        "Fullfilled Onshore":digicommsfulon,
        "Fullfilled Offshore":digicommsfuloff
    },
    {
        "S.No":4,
        "Labs":"Doc.Services",
        "Demand Onshore":docserviceeon,
        "Demand Offshore":docserviceoff,
        "Supply Onshore":docserviceeons,
        "Supply Offshore":docserviceoffs,
        "Fullfilled Onshore":docservicefulon,
        "Fullfilled Offshore":docservicefuloff
    },
    {
        "S.No":5,
        "Labs":"OIE",
        "Demand Onshore":oieon,
        "Demand Offshore":oieoff,
        "Supply Onshore":oieons,
        "Supply Offshore":oieoffs,
        "Fullfilled Onshore":oiefulon,
        "Fullfilled Offshore":oiefuloff
    },
    {
        "S.No":6,
        "Labs":"Personalisation",
        "Demand Onshore":personalisationon,
        "Demand Offshore":personalisationoff,
        "Supply Onshore":personalisationons,
        "Supply Offshore":personalisationoffs,
        "Fullfilled Onshore":personalisationfulon,
        "Fullfilled Offshore":personalisationfuloff
    },
    {
        "S.No":7,
        "Labs":"Savings",
        "Demand Onshore":savingson,
        "Demand Offshore":savingsoff,
        "Supply Onshore":savingsons,
        "Supply Offshore":savingsoffs,
        "Fullfilled Onshore":savingsfulon,
        "Fullfilled Offshore":savingsfuloff
    },
    {
        "S.No":8,
        "Labs":"Loans",
        "Demand Onshore":loanon,
        "Demand Offshore":loanoff,
        "Supply Onshore":loanons,
        "Supply Offshore":loanoffs,
        "Fullfilled Onshore":loansfulon,
        "Fullfilled Offshore":loansfuloff
    },
    {
        "S.No":'',
        "Labs":"Total",
        "Demand Onshore":totalon,
        "Demand Offshore":totaloff,
        "Supply Onshore":totalons,
        "Supply Offshore":totaloffs,
        "Fullfilled Onshore":totalfullon,
        "Fullfilled Offshore":totalfulloff
    }
]
    

   
    


  return (
      <>
        {/* <div className="spinner-border text-primary">
          {lyrics}
         
          {loading?(lyrics):<ReactBootStrap.Spinner animation="border"/>}
      </div> */}
        {/* <header className=" py-5  text-white rounded " style={{marginTop:"50px", marginRight:"0px", backgroundColor:"#0b7024"}}>
      <div className="container-fluid px-0">
          <div className="row">
              <div className="col-12 col-md-3 align-self-center " >
                  <img className="p-3" src="./Lloyds.png" alt="lloyds-logo" width="250px"/>
              </div>
              <div className="col-12 col-md-3 align-self-center" style={{marginTop: "85px", color: "black"}}>
                  <h2>Lloyds Banking Group</h2>
              </div>
              <div className="col-12 col-md-4 mx-2 "></div>
              <div className=" row col-12 col-md-2 align-self-center ml-3 text-dark ">
              <div className="col-12"><Demand /></div>
              <div className="col-12 mt-4"><Supply /></div>
              </div>
             
              </div>
              </div>
              
              </header> */}

       <NavBarDashboard tabledata={tabledata}/>
              
               
       
      
      <div className='container-fluid mar4'>
       <div className='row '>
          
       <div className="table-responsive mx-auto my-5 pt-5 col-md-10 text-center mar6" >
           <h2 className="p4 text-white"><strong>OCC-Demand and Supply Dashboard</strong></h2>
        
        <table className="table table-striped table-hover table-bordered  mar5 " >
        
        <thead className="table-dark">
        <tr>
            <th scope="col" className="text-center "><strong>S.no</strong></th>
            <th scope="col" className="text-center " ><strong>Labs</strong></th>
            <th scope="col" colSpan="2" className="text-center "><Link to="/DemandDetails"><strong>Demand</strong></Link></th>
            <th scope="col" colSpan="2" className="text-center "><Link to="/Sourcing"  state={{"demand": demand}}><strong>Supply</strong></Link></th>
            <th scope="col" colSpan="2" className="text-center "><strong>Fulfilled</strong></th>

           
        </tr>
        <tr>
            <th></th>
            <th></th>
        <th scope="col" className="text-center "><strong>Onshore</strong></th>
        <th scope="col"className="text-center "><strong>Offshore</strong></th>
        <th scope="col"className="text-center "><strong>Onshore</strong></th>
        <th scope="col"className="text-center "><strong>Offshore</strong></th>
        <th scope="col"className="text-center"><strong>Onshore</strong></th>
        <th scope="col"className="text-center"><strong>Offshore</strong></th>
        
         
        </tr>
        </thead>
        <tbody>
            <tr> 
                
                <td className="text-center"><strong>1</strong></td>
                <td className='text-start'><Link to="/Banking1" className="text-decoration-none text-dark   "  state={{"demand": demand,"supply":supply}} ><RiBankFill/><strong> Banking</strong></Link></td>
                <td className="text-center" ><strong> {bankingon}</strong></td>
                <td className="text-center"><strong>{bankingoff}</strong></td>
                <td className="text-center" ><strong>{bankingons}</strong></td>
                <td className="text-center"><strong>{bankingoffs}</strong></td>
                <td className="text-center" ><strong>{bankingfulon}</strong></td>
                <td className="text-center"><strong>{bankingfuloff}</strong></td>
            </tr>
            <tr>
                <td className="text-center"><strong>2</strong></td>
                <td className='text-start'><Link to="/Cards1" className="text-decoration-none text-dark text-start" state={{"demand": demand,"supply":supply}}><BsCreditCard/> <strong>Cards</strong></Link></td>
                <td className="text-center "><strong>{cardson}</strong></td>
                <td className="text-center"><strong>{cardsoff}</strong></td>
                <td className="text-center"><strong>{cardsons}</strong></td>
                <td className="text-center"><strong>{cardsoffs}</strong></td>
                <td className="text-center"><strong>{cardsfulon}</strong></td>
                <td className="text-center"><strong>{cardsfuloff}</strong></td>
            </tr>
            <tr>
                <td className="text-center"><strong>3</strong></td>
                <td className='text-start'><Link to="/Digicomms1" className="text-decoration-none text-dark"  state={{"demand": demand,"supply":supply}}><TiGroup/><strong>Digi Comms</strong></Link></td>
                <td className="text-center"><strong>{digicommson}</strong></td>
                <td className="text-center"><strong>{digicommsoff}</strong></td>
                <td className="text-center"><strong>{digicommsons}</strong></td>
                <td className="text-center"><strong>{digicommsoffs}</strong></td>
                <td className="text-center"><strong>{digicommsfulon}</strong></td>
                <td className="text-center"><strong>{digicommsfuloff}</strong></td>
            </tr>
            <tr> 
                <td className="text-center"><strong>4</strong></td>
                <td className='text-start'><Link to="/Docservices1" className="text-decoration-none text-dark" state={{"demand": demand,"supply":supply}}><i class="bi bi-files"></i><strong>Doc.Services</strong></Link></td>
                <td className="text-center"><strong>{docserviceeon}</strong></td>
                <td className="text-center"><strong>{docserviceoff}</strong></td>
                <td className="text-center"><strong>{docserviceeons}</strong></td>
                <td className="text-center"><strong>{docserviceoffs}</strong></td>
                <td className="text-center"><strong>{docservicefulon}</strong></td>
                <td className="text-center"><strong>{docservicefuloff}</strong></td>
            </tr>
            <tr>
                <td className="text-center"><strong>5</strong></td>
                <td className='text-start'><Link to="/OIE1" className="text-decoration-none text-dark"state={{"demand": demand,"supply":supply}}><TiGroup/><strong>OIE</strong></Link></td>
                <td className="text-center"><strong>{oieon}</strong></td>
                <td className="text-center"><strong>{oieoff}</strong></td>
                <td className="text-center"><strong>{oieons}</strong></td>
                <td className="text-center"><strong>{oieoffs}</strong></td>
                <td className="text-center"><strong>{oiefulon}</strong></td>
                <td className="text-center"><strong>{oiefuloff}</strong></td>
            </tr>
            <tr>
                <td className="text-center"><strong>6</strong></td>
                <td className='text-start'><Link to="/Personalisation1" className="text-decoration-none text-dark" state={{"demand": demand,"supply":supply}}><TiGroup/><strong>Personalisation</strong></Link></td>
                <td className="text-center"><strong>{personalisationon}</strong></td>
                <td className="text-center"><strong>{personalisationoff}</strong></td>
                <td className="text-center"><strong>{personalisationons}</strong></td>
                <td className="text-center"><strong>{personalisationoffs}</strong></td>
                <td className="text-center"><strong>{personalisationfulon}</strong></td>
                <td className="text-center"><strong>{personalisationfuloff}</strong></td>
            </tr>
            
            <tr>
                <td className="text-center"><strong>7</strong></td>
                <td className='text-start'><Link to="/Savings1" className="text-decoration-none text-dark" state={{"demand": demand,"supply":supply}}><MdSavings/><strong>Savings</strong></Link></td>
                <td className="text-center"><strong>{savingson}</strong></td>
                <td className="text-center"><strong>{savingsoff}</strong></td>
                <td className="text-center"><strong>{savingsons}</strong></td>
                <td className="text-center"><strong>{savingsoffs}</strong></td>
                <td className="text-center"><strong>{savingsfulon}</strong></td>
                <td className="text-center"><strong>{savingsfuloff}</strong></td>
            </tr>
            <tr>
                <td className="text-center"><strong>8</strong></td>
                <td className='text-start'><Link to="/Loans1" className="text-decoration-none text-dark"state={{"demand": demand,"supply":supply}}><FaBalanceScale/><strong>Loans</strong></Link></td>
                <td className="text-center"><strong>{loanon}</strong></td>
                <td className="text-center"><strong>{loanoff}</strong></td>
                <td className="text-center"><strong>{loanons}</strong></td>
                <td className="text-center"><strong>{loanoffs}</strong></td>
                <td className="text-center"><strong>{loansfulon}</strong></td>
                <td className="text-center"><strong>{loansfuloff}</strong></td>
            </tr>
            <tr>
                <td></td>
                <td className='text-start'><strong><strong>Total</strong></strong></td>
                <td className="text-center"><strong>{totalon}</strong></td>
                <td className="text-center"><strong>{totaloff}</strong></td>
                <td className="text-center"><strong>{totalons}</strong></td>
                <td className="text-center"><strong>{totaloffs}</strong></td>
                <td className="text-center"><strong>{totalfullon}</strong></td>
                <td className="text-center"><strong>{totalfulloff}</strong></td>
            </tr>

        </tbody>
        
      </table>
      </div>
      </div>
      </div>
      
      
  
   
   

              
        
      </>
  );
}