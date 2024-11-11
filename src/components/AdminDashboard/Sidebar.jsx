import React from 'react'

const Sidebar = ({setSelction}) => {
  return (
    <div className="sidebar-container">
        <div onClick={()=>setSelction('profile')} className="sidebar-profile">Profile</div>
        <div onClick={()=>setSelction('products')} className="sidebar-products">Products</div>
        <div onClick={()=>setSelction('complaints')} className="sidebar-complaints">Complaints</div>
        <div onClick={()=>setSelction('logout')} className="sidebar-logout">Logout</div>
        
    </div>
  )
}

export default Sidebar