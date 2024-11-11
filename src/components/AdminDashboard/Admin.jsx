import React, { useState } from 'react'
import Complaints from './Complaints';
import Profile from './Profile';
import Products from './Products';
import Logout from './Logout';
import Sidebar from './Sidebar';
import "./Dashboard.css"
const Admin = () => {
    const [currentSelection,setCurrentSelection]=useState('complaints');
    const recentSelection=()=>{
        switch (currentSelection){
            case 'complaints':
                return <Complaints/>
            case 'profile':
                return <Profile/>
            case 'products':
                return <Products/>
            case 'logout':
                return <Logout/>
            default:
                return <Profile/>
        }
    }
  return (
    <div className="dashboard-container">
        <div className="sidebar">
            <Sidebar setSelction={setCurrentSelection}/>
        </div>
        <div className="dashboard-right">
            {
                recentSelection()
            }
        </div>
    </div>
  )
}

export default Admin