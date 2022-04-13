import React,{useState,useLayoutEffect} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Lab from './components/Lab';
import Spinner from './components/Spinner';
import axios from 'axios';
import SecondPage from './components/SecondPage';




function App() {

  const [data, setData] = useState(null)

  // const [d, setD] = useState([{
  //   "Employee Name": " ",
  //   "Employee ID": 0,
  //   "Lab": ""
  // }])

  useLayoutEffect(() => {
    axios.get('https://back-end-tlwrpe5ptq-el.a.run.app/getdata')
    .then(response => setData(response.data))
    .catch((err) => {console.log(err)});
  }, [])



  return (
    <>
    {/* {console.log(data)} */}


    {/* {data?<Spinner/>:<Spinner/>} */}
    {data?<Dashboard data={data}/>:<Spinner/>}

    
    </>
  );
}

export default App;
