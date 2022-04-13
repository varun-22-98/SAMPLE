import React from "react";

const Alert = ({ alert })=>{
    return (
        alert !== null  && (
            <div className={`alert alert-${alert.type}`}>
                <i className='bi bi-info-circle-fill' /> {alert.msg}
            </div>
        )
    );
};

export default Alert