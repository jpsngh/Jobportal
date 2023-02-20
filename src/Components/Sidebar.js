import React, { useContext, useEffect, useState } from 'react'
import { FcHome } from "react-icons/fc";
import { FcAdvertising,FcBusinessContact,FcFaq } from "react-icons/fc";
import "../Styles/Sidebar.css"
import { Link } from 'react-router-dom';
import ProfileLayout from './ProfileLayout';
import DetailContext from '../DetailContext';

function Sidebar() {
  useEffect(() => {
    
  }, [])
  

  return (
    <div> 
    <div className='sidebar' id={"open"}>
    <h1 className="logo"> Portal</h1>
    <ProfileLayout></ProfileLayout>
    <div className="menu">
        <Link className='a' to="/"><FcHome>  </FcHome>Home</Link>
        <Link className='a' to="/advertising"><FcAdvertising> </FcAdvertising>Advertising</Link>
        <Link className='a' to="https://stackoverflow.com"><FcFaq> </FcFaq>Faqs</Link>
        
        
    </div>
    
    </div>
 
    </div>
  )
}

export default Sidebar