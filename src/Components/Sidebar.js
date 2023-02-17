import React from 'react'
import { FcHome } from "react-icons/fc";
import { FcAdvertising,FcBusinessContact,FcFaq } from "react-icons/fc";
import "../Styles/Sidebar.css"
import { Link } from 'react-router-dom';
import ProfileLayout from './ProfileLayout';
function Sidebar() {
  return (
    <div> 
    <div className='sidebar'>
    <h1 className="logo"> Portal</h1>
    <ProfileLayout></ProfileLayout>
    <div className="menu">
        <Link className='a' to="/"><FcHome>  </FcHome>Home</Link>
        <Link className='a' to={"google"}><FcAdvertising> </FcAdvertising>Advertising</Link>
        <Link className='a' to={"google"}><FcFaq> </FcFaq>Faqs</Link>
        <Link className='a' to={"google"}><FcBusinessContact></FcBusinessContact>Contact Us</Link>
        
    </div>
    
    </div>
 
    </div>
  )
}

export default Sidebar