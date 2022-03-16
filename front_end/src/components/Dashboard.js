import React, {useState, useLayoutEffect} from 'react';
import {BsCreditCard} from 'react-icons/bs'
import {FaBalanceScale} from 'react-icons/fa'
import {MdSavings} from 'react-icons/md'
import {RiBankFill} from 'react-icons/ri'
import {TiGroup} from 'react-icons/ti'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Chartjs from './Chartjs';
import NavBarDashboad from './NavBarDashboad';
import './Dashboard.css';

export default function Dashboard() {

    const [cardsCount, setCardsCount] = useState(0)
    const [loansCount, setLoansCount] = useState(0)
    const [savingsCount, setSavingsCount] = useState(0)
    const [bankingCount, setBankingCount] = useState(0)
    const [zoomerskoolCount, setZoomerskoolCount] = useState(0)
 

    const [data, setData] = useState([{
        "Employee Name": " ",
        "Employee ID": 0,
        "Lab": ""
      }])

    useLayoutEffect(() => {
        axios.get('https://back-end-tlwrpe5ptq-el.a.run.app/getdata')
        .then(response => setData(response.data))
        .catch((err) => {console.log(err)});
    }, [])

    const count = Object.keys(data).length;

    
    var cardsoff = Object.keys(data.filter((d) => d["Lab"] === "Cards" & d["location"]==="Offsite")).length;
    var loansoff = Object.keys(data.filter((d) => d["Lab"] === "Loans" & d["location"]==="Offsite")).length;
    var savingsoff = Object.keys(data.filter((d) => d["Lab"] === "Savings" & d["location"]==="Offsite")).length;
    var bankingoff = Object.keys(data.filter((d) => d["Lab"] === "Banking" & d["location"]==="Offsite")).length;
    var zoomeroff = Object.keys(data.filter((d) => d["Lab"] === "Zoomerskool" & d["location"]==="Offsite")).length;
    var cardson = Object.keys(data.filter((d) => d["Lab"] === "Cards" & d["location"]==="Onsite")).length;
    var loanson = Object.keys(data.filter((d) => d["Lab"] === "Loans" & d["location"]==="Onsite")).length;
    var savingson = Object.keys(data.filter((d) => d["Lab"] === "Savings" & d["location"]==="Onsite")).length;
    var bankingon = Object.keys(data.filter((d) => d["Lab"] === "Banking" & d["location"]==="Onsite")).length;
    var zoomeron = Object.keys(data.filter((d) => d["Lab"] === "Zoomerskool" & d["location"]==="Onsite")).length;


    useLayoutEffect(() => {
        for(let d of data){
            if(d.Lab === "Cards"){
                setCardsCount(pre => pre+1);
            }else if(d.Lab === "Loans"){
                setLoansCount(pre => pre+1);
            }else if(d.Lab === "Banking"){
                setBankingCount(pre => pre+1);
            }else if(d.Lab === "Savings"){
                setSavingsCount(pre => pre+1);
            }else if(d.Lab === "Zoomerskool"){
                setZoomerskoolCount(pre => pre+1);
            }
        }
    },[data])
    
    


  return (
      <>
      <NavBarDashboad/>
      <div className="container-fluid pad4">
          
          <div className='row'>
              <div className="table-responsive pt-5 col-md-6 pad6" >
                  <h2 className="pad6"> Labs in LBG</h2>
                  <table className="table table-striped table-hover pad5">
                  <thead className="table-dark">
                  <tr>
                      <th>Lab no</th>
                      <th>Team Name</th>
                      <th>Number of employees</th>
                  </tr>
                  </thead>
                  <tbody>
                <tr>
                  <th>1</th>
                    <th> <BsCreditCard/> Cards</th>
                    <th> <Link to="/cards" state={{"data": data}}>{cardsCount}</Link> </th>
                </tr>
                <tr>
                    <th>2</th>
                    <th> <FaBalanceScale/> Loans</th>
                    <th> <Link to="/loans" state={{"data": data}}>{loansCount}</Link> </th>
                </tr>
                <tr>
                    <th>3</th>
                    <th><MdSavings/> Savings</th>
                    <th> <Link to="/savings" state={{"data": data}}>{savingsCount}</Link> </th>
                </tr>
                <tr>
                    <th>4</th>
                    <th> <RiBankFill/> Banking</th>   
                    <th> <Link to="/banking" state={{"data": data}}>{bankingCount}</Link> </th>
                </tr>
                <tr>
                    <th>5</th>
                    <th> <TiGroup/> Zoomerskool</th>
                    <th> <Link to="/zoomerskool" state={{"data": data}}>{zoomerskoolCount}</Link> </th>
                </tr>
                <tr>
                    <th></th>
                    <th>Total</th>
                    <th><Link to="/total" state={{"data": data}}>{count}</Link></th>
                </tr>
                  </tbody>
                  </table>
                  </div>
                  {/* <div className='col-md-1'></div> */}

                  <div className='col-md-5 mt-5 pad7' style={{width:"550px",marginTop:"60px"}}>
                  <Chartjs values = {[cardsoff,loansoff,savingsoff,bankingoff,zoomeroff]} value={[cardson,loanson,savingson,bankingon,zoomeron]} count = {count}/>
                  </div>
          </div>
      </div>

        
        
      </>
  );
}
