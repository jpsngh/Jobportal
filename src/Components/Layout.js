import React, { useState } from 'react'
import "../Styles/Layout.css"
import { TbMenu2,TbSearch} from "react-icons/tb";
import Sidebar from './Sidebar';
import Wrapper from './Wrapper';
import Card from './Card';
import jobs from "../data"
function Layout() {
  const card = (data,key)=>{
    return  <Card 
          image={data.image}
          company={data.company}
          field ={data.field}
          desc = {data.desc}
          qualification = {data.qualification}
          location = {data.location}
          posted = {data.posted}
          applicants = {data.applicants}
          key = {key}
          
          ></Card>


  }
  let arr = [1,2,3,4]
  const [state,setState]=useState("S");
  const [jobState,setJobState]=useState()
  {console.log(jobState)}
  const onChange=(e)=>{
    if(isNaN((e.target.value)) ){
   setState((e.target.value).toUpperCase());
    }
  }
  
  const clickHandle=(e)=>{
    
  const arr =  jobs.filter((data,key)=>{
    console.log("handle",data.field,state)
     return (data.field).toUpperCase().slice(0,3)=== state.slice(0,3)
      
    
    
    
   })
   return setJobState(arr);
  }
  return (
    

    <div className='main'>
        <div className='main-header'>
            <a className='menu-bar'><TbMenu2 > </TbMenu2> </a>
            <div className='search'>
            <input type="text" onChange={(e)=>{
           return onChange(e);
            }} className='search-in' placeholder='Search '></input>
            <button className='btn-search' onClick={(e)=>{
              return clickHandle(e)

            }} ><TbSearch></TbSearch></button>
            </div>
        </div>
        <Wrapper state={state} state2={jobState}></Wrapper>
        { jobState && jobState.length >=1 ? jobState.map((data,key)=>card(data,key)):jobs.map((data,key)=>card(data,key))}
        
        
    </div>
  
    
  )
}

export default Layout