import React,{useContext} from 'react'
import { useLocation } from 'react-router'
import "../Styles/Detail.css"
import { useSelector } from "react-redux";
import DetailContext from '../DetailContext';
const DetailsLayout = () => {
 const {detailState} = useContext(DetailContext)
    const detail = useSelector(state=>state.data)
  
  return (
    <div className='detail'>
        <b className='detail-close'>x</b>
        <div className='detail-header'>
        <img src={detailState.data.image} alt=""></img>
        <h2>{detailState.data.company}</h2>
        <p>{detailState.data.field}</p>
       
        </div>
        <hr className='divider'></hr>
        <div className='detail-desc'> 
        <div className='about'>
            <h4>Job Description</h4>
            <p> {detailState.data.desc} </p>
                <span>     </span>
                <a href='#' >read more...</a>
                <hr className='divider'></hr>
                <h4>Qualifications</h4>
                <p> {detailState.data.qualification}</p>

           
            <div className='btn-apply'>
                <button className='btn'> Apply Now </button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default DetailsLayout
