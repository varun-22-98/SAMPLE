import React, {useState, useEffect} from 'react'
import axios from "axios";
const FileSaver = require('file-saver');
const XLSX = require('xlsx');
// import * as FileSaver from 'file-saver'
// import * as XLSX from 'xlsx'

export default function Download({supplyData,fileName}) {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:7000/${supplyData}`).then((response) => {
          setData(response.data);
          // console.log(response.data);
        })
      },[data]);
      
  const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data : ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

 
  const onDownload = () => {
    console.log(data);

    function removeColumn(obj){
      delete obj._id;
      delete obj.__v;
      delete obj.dec;
      delete obj.id;
    }
    
    setData(data.map(removeColumn));
    exportToCSV(data);
  }

    return (
        <div>
        <button onClick={onDownload} className="btn btn-success"> <i className="bi bi-cloud-download"></i>  Download
        </button>
        </div>
    )
}
