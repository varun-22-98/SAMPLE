import React, {useState} from 'react'
import {BiCaretDown, BiSearch, BiCheck} from "react-icons/bi"
// import './Search.css'

const Dropdown = ({toggle, sortBy, onSortChange, orderBy, onOrderChange}) => {
    return(
        <div>
        {toggle && 
        <div className="origin-top-right absolute right-0 mt-2 w-56
        rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div onClick={() => onSortChange('petName')}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem">Pet Name {(sortBy === 'petName') && <BiCheck />}</div>
          <div onClick={() => onSortChange('ownerName')}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem">Owner Name {(sortBy === 'ownerName') && <BiCheck />}</div>
          <div onClick={() => onSortChange('aptDate')}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem">Date {(sortBy === 'aptDate') && <BiCheck />}</div>
          <div onClick={() => onOrderChange('asc')}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
            role="menuitem">Asc {(orderBy === 'asc') && <BiCheck />}</div>
          <div onClick={() => onOrderChange('desc')}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
            role="menuitem">Desc {(orderBy === 'desc') && <BiCheck />}</div>
        </div>
      </div>}
        </div>
    )
}

// export default function Search({query, onQueryChange}) {
//     let [toggleSort, setToggleSort] = useState(false);
//     return (
      
//         <div className="p-2">

// <nav className="navbar navbar-warning bg-warning">
//   <form className="container-fluid">
//     <div className="input-group">
//       <span className="input-group-text" id="basic-addon1"><BiSearch /></span>
//       <input type="text" value={query} onChange={(e)=> {onQueryChange(e.target.value)}} className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
//     </div>
//   </form>
// </nav>

//       </div>
//     )
// }

export default function Search({query, onQueryChange}) {
  let [toggleSort, setToggleSort] = useState(false);
  return (
    
      <div className="p-2">

{/* <nav className="navbar navbar-warning bg-warning"> */}
<form className="container-fluid">
  <div className='row justify-content-center align-items-center'>
    <div className='col-12 col-md-6'>
      <div className="input-group">
        <span className="input-group-text btn-warning rounded-circle" id="basic-addon1"><BiSearch /></span>
        <input type="text" value={query} onChange={(e)=> {onQueryChange(e.target.value)}} className="form-control border-warning rounded-pill" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"></input>
      </div>
    </div>
  </div>
</form>
{/* </nav> */}

    </div>
  )
}
