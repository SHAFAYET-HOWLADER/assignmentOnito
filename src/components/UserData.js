import React from 'react'
import "./UserData.css"
const UserData = () => {
  return (
    <section id="user_data">
        <div className="container">
           <div className='registration_area'>
              <div className='personal_details'>
                  <h4><u>Personal Details</u></h4>
                  <div className=''>
                     <label>Name</label>
                      <input type="text" placeholder='Enter Name' />
                     <label>Date of Birth or Age</label>
                      <input type="text" placeholder='DD/MM/YYYY or age in years' />
                      <label>Sex</label>
                      <select>
                        <option>Enter Sex</option>
                      </select>
                  </div>
                  <div className=''>
                     <label>Mobile</label>
                      <input type="text" placeholder='Enter Mobile' />
                     <label>Govt Issued ID</label>
                     <select>
                        <option>ID Type</option>
                      </select>
                     <input type="text" placeholder='Enter Govt ID'/>
                  </div>
              </div>
           </div>
        </div>
    </section>
  )
}

export default UserData