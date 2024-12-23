import React from 'react'
import "./style.css"
function TabSelector({Tab1, Tab2, Tab3}) {
  return (
    <div className="tabSelector">
        {/* <div>TabSelector</div> */}
        <button onClick={Tab1} className='poppins poppins-medium active' tab="All">
            All
        </button>
        <button onClick={Tab2} className='poppins poppins-medium' tab="Active">
            Active
        </button>
        <button onClick={Tab3} className='poppins poppins-medium' tab="Complete"> 
            Complete            
        </button>
    </div>
  )
}

export default TabSelector