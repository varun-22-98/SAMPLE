import React, {useState, useLayoutEffect} from 'react'
import axios from "axios";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export default function Email({tabledata}) {

    
 

  const fileType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (apiData) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { demand: ws }, SheetNames: ["demand"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const demand = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(demand, 'OCC-Demand SupplyDashboard' + fileExtension);
  };

 
  const onsend = () => {
    

    
    
    
    exportToCSV(tabledata);
    const mailto: string =
    "mailto:?subject=Result" ;
   window.location.href=mailto;
 

  }
  

    return (
        <div>
        <button onClick={onsend} className="btn btn-success y w-50 "> <i class="bi bi-at"></i>  Email
        </button>
        </div>
    )
}
