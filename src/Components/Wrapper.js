import React,{useEffect} from 'react'
import "../Styles/Wrapper.css"
import jobRec from "./jobRec"
const Wrapper = (props) => {
  const jobstatus = props.state2
  const filter = props.state
  const filter2 = filter.slice(0,1)
  useEffect(() => {
   
    
  }, [props.state])
  const fill = jobRec.map((data,key)=>{
    return data[filter2];
  })
  
 
  return (

    <div>
          {console.log("jobwrapper",jobstatus,filter)}
    <div className='filter-wrapper'>
      <p>Recommendation</p>
      <div className='filter'></div>
     
       { fill[0] ?
       fill[0].map((element,index)=> {
           return   <button className="btn-filter" key={index}> { props.state ? element : "Web Developer" }</button>
       })
      : <button className="btn-filter">  Web Developer</button>}

         <div className='filter-wrapper'>  { jobstatus && jobstatus.length<1? <button> No Jobs Found</button>:""}</div>
       
        
       

      </div>
      <div className='sort'>
        <p>Sort</p>
        <div className='sort-list'>
            <select>
                <option value="0"> All</option>
                <option value="1"> Newest</option>
                <option value="2"> Oldest</option>
                <option value="3"> Highest</option>
            </select>

        </div>

      </div>
    </div>
    
  )
}

export default Wrapper
