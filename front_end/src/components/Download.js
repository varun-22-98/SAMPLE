import React, {useState, useEffect} from 'react'
import axios from "axios";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export default function Download() {

    const [data, setData] = useState(null);
    useEffect(() => {
        axios.get('https://back-end-tlwrpe5ptq-el.a.run.app/getdata').then((response) => {
          setData(response.data);
        })
      },[data]);

  const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, 'EmployeeDetails' + fileExtension);
  };

 
  const onDownload = () => {
    console.log(data);

    function removeColumn(obj){
        delete obj._id;
        delete obj.__v;
        delete obj.dec
    }
    
    setData(data.map(removeColumn));
    exportToCSV(data);

  }

    return (
        <div>
        <button onClick={onDownload} className="btn btn-success"> <i class="bi bi-cloud-download"></i>  Download
        </button>
        </div>
    )
}
