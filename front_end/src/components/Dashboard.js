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
import Spinner from './Spinner';

export default function Dashboard({data}) {

    const [cardsCount, setCardsCount] = useState(0)
    const [loansCount, setLoansCount] = useState(0)
    const [savingsCount, setSavingsCount] = useState(0)
    const [bankingCount, setBankingCount] = useState(0)
    const [oieCount, setoieCount] = useState(0)
    const [personalizationCount, setpersonalizationCount] = useState(0)
    const [digiCount, setdigiCount] = useState(0)
    const [docCount, setdocCount] = useState(0)
    const [OtherCount, setOtherCount] = useState(0)


    


 

    // const [data, setData] = useState([{
    //     "Employee Name": " ",
    //     "Employee ID": 0,
    //     "Lab": ""
    //   }])

    // useLayoutEffect(() => {
    //     axios.get('https://back-end-tlwrpe5ptq-el.a.run.app/getdata')
    //     .then(response => setData(response.data))
    //     .catch((err) => {console.log(err)});
    // }, [])

   
    // console.log(data)
    const count = Object.keys(data).length;

    const totaloffcount = Object.keys(data.filter((d) => d["location"]==="Offsite")).length;
    const totaloncount = count - totaloffcount;

    
    var cardsoff = Object.keys(data.filter((d) => d["Lab"] === "Cards" & d["location"]==="Offsite")).length;
    var loansoff = Object.keys(data.filter((d) => d["Lab"] === "Loans" & d["location"]==="Offsite")).length;
    var savingsoff = Object.keys(data.filter((d) => d["Lab"] === "Savings" & d["location"]==="Offsite")).length;
    var bankingoff = Object.keys(data.filter((d) => d["Lab"] === "Banking" & d["location"]==="Offsite")).length;
    var oieoff = Object.keys(data.filter((d) => d["Lab"] === "OIE" & d["location"]==="Offsite")).length;
    var personalizationoff = Object.keys(data.filter((d) => d["Lab"] === "Personalization" & d["location"]==="Offsite")).length;
    var digioff = Object.keys(data.filter((d) => d["Lab"] === "DIGI COMMS" & d["location"]==="Offsite")).length;
    var docoff = Object.keys(data.filter((d) => d["Lab"] === "DOC services" & d["location"]==="Offsite")).length;
    var zoomeroff = Object.keys(data.filter((d) => d["Lab"] === "Other" & d["location"]==="Offsite")).length;

    var cardson = Object.keys(data.filter((d) => d["Lab"] === "Cards" & d["location"]==="Onsite")).length;
    var loanson = Object.keys(data.filter((d) => d["Lab"] === "Loans" & d["location"]==="Onsite")).length;
    var savingson = Object.keys(data.filter((d) => d["Lab"] === "Savings" & d["location"]==="Onsite")).length;
    var bankingon = Object.keys(data.filter((d) => d["Lab"] === "Banking" & d["location"]==="Onsite")).length;
    var oieon = Object.keys(data.filter((d) => d["Lab"] === "OIE" & d["location"]==="Onsite")).length;
    var personalizationon = Object.keys(data.filter((d) => d["Lab"] === "Personalization" & d["location"]==="Onsite")).length;
    var digion = Object.keys(data.filter((d) => d["Lab"] === "DIGI COMMS" & d["location"]==="Onsite")).length;
    var docon = Object.keys(data.filter((d) => d["Lab"] === "DOC services" & d["location"]==="Onsite")).length;
    var zoomeron = Object.keys(data.filter((d) => d["Lab"] === "Other" & d["location"]==="Onsite")).length;


    var cardsoffrat = Math.round((cardsoff/(cardsoff+cardson))*100);
    var loansoffrat = Math.round((loansoff/(loansoff+loanson))*100);
    var savingsoffrat = Math.round((savingsoff/(savingsoff+savingson))*100)
    var bankingoffrat = Math.round((bankingoff/(bankingoff+bankingon))*100)
    var oieoffrat = Math.round((oieoff/(oieoff+oieon))*100)
    var personalizationoffrat = Math.round((personalizationoff/(personalizationoff+personalizationon))*100)
    var digioffrat = Math.round((digioff/(digioff+digion))*100)
    var docoffrat = Math.round((docoff/(docoff+docon))*100)


    var zommeroffrat = Math.round((zoomeroff/(zoomeroff+zoomeron))*100)
    var totaloffrat = Math.round((totaloffcount/(totaloffcount+totaloncount))*100)


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
            }else if(d.Lab === "OIE"){
                setoieCount(pre => pre+1);
            }else if(d.Lab === "Personalization"){
                setpersonalizationCount(pre => pre+1);
            }else if(d.Lab === "DIGI COMMS"){
                setdigiCount(pre => pre+1);
            }else if(d.Lab === "DOC services"){
                setdocCount(pre => pre+1);
            }else if(d.Lab === "Other"){
                setOtherCount(pre => pre+1);
            }
            
        }
    },[data])
    
    


  return (
      <>
      <NavBarDashboad/>
      <div className="container-fluid pad4">
          
          <div className='row'>
              <div className="table-responsive pt-5 col-md-5 pad6" >
                  <h2 className="pad6"> Labs in LBG</h2>
                  <table className="table table-striped table-hover pad5">
                  <thead className="table-dark">
                  <tr>
                      <th  className="text-center">Lab</th>
                      <th>Team Name</th>
                      <th  className="text-center">Total FTE</th>
                      <th  className="text-center">OFL Ratio</th>
                  </tr>
                  </thead> 
                  <tbody>
                <tr>
                  <th  className="text-center">1</th>
                    <th> <BsCreditCard/> Cards</th>
                    <th  className="text-center"> <Link to="/cards" state={{"data": data}}>{cardsCount}</Link> </th>
                    <th  className="text-center"> {cardsoffrat} % </th>
                </tr>
                <tr>
                    <th  className="text-center">2</th>
                    <th> <FaBalanceScale/> Loans</th>
                    <th  className="text-center"> <Link to="/loans" state={{"data": data}}>{loansCount}</Link> </th>
                    <th  className="text-center"> {loansoffrat} % </th>
                </tr>
                <tr>
                    <th  className="text-center">3</th>
                    <th><MdSavings/> Savings</th>
                    <th  className="text-center"> <Link to="/savings" state={{"data": data}}>{savingsCount}</Link> </th>
                    <th  className="text-center"> {savingsoffrat} % </th>
                </tr>

                <tr>
                    <th  className="text-center">4</th>
                    <th> <RiBankFill/> Banking</th>   
                    <th  className="text-center"> <Link to="/banking" state={{"data": data}}>{bankingCount}</Link> </th>
                    <th  className="text-center"> {bankingoffrat} % </th>
                </tr>

                <tr>
                    <th  className="text-center">5</th>
                    <th> <i class="bi bi-cash-coin"></i> OIE </th>   
                    <th  className="text-center"> <Link to="/oie" state={{"data": data}}>{oieCount}</Link> </th>
                    <th  className="text-center"> {oieoffrat} % </th>
                </tr>

                <tr>
                    <th  className="text-center">6</th>
                    <th> <i class="bi bi-safe2"></i> Personalization </th>   
                    <th  className="text-center"> <Link to="/personalization" state={{"data": data}}>{personalizationCount}</Link> </th>
                    <th  className="text-center"> {personalizationoffrat} % </th>
                </tr>

                <tr>
                    <th  className="text-center">7</th>
                    <th> <i class="bi bi-pc-display"></i> DIGI COMMS </th>   
                    <th  className="text-center"> <Link to="/DIGI_COMMS" state={{"data": data}}>{digiCount}</Link> </th>
                    <th  className="text-center"> {digioffrat} % </th>
                </tr>

                <tr>
                    <th  className="text-center">8</th>
                    <th> <i class="bi bi-files"></i> DOC services </th>   
                    <th  className="text-center"> <Link to="/DOC_services" state={{"data": data}}>{docCount}</Link> </th>
                    <th  className="text-center"> {docoffrat} % </th>
                </tr>


                <tr>
                    <th  className="text-center">9</th>
                    <th> <TiGroup/> Other </th>
                    <th  className="text-center"> <Link to="/other" state={{"data": data}}>{OtherCount}</Link> </th>
                    <th  className="text-center"> {zommeroffrat} % </th>
                </tr>
                <tr>
                    <th></th>
                    <th>Total</th>
                    <th  className="text-center"><Link to="/total" state={{"data": data}}>{count}</Link></th>
                    <th  className="text-center"> {totaloffrat} % </th>
                </tr>
                  </tbody>
                  </table>
                  </div>
                  {/* <div className='col-md-1'></div> */}

                  <div className='col-md-7 pad7' style={{width:"700px",marginTop:"120px"}}>
                  <Chartjs values = {[cardsoff,loansoff,savingsoff,bankingoff,oieoff,personalizationoff,digioff,docoff,zoomeroff]} value={[cardson,loanson,savingson,bankingon,oieon,personalizationon,digion,docon,zoomeron]} count = {count} total = {[totaloffcount,totaloncount]}/>
                  </div>
          </div>
      </div>

        
        
      </>
  );
}
