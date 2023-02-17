
import React, { useContext } from "react";
import { useNavigate } from "react-router";
import "../Styles/Card.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import DetailContext from "../DetailContext";
function Card(props) {
const navigate = useNavigate();
const detailState = useSelector(state=>state)
const dispatch = useDispatch();
 const {image,company,field,desc,qualification,posted,applicants,location} = props
 const {setDetailState} = useContext(DetailContext);
  return (
    <div className="wrapper">
      
      <div className="card" onClick={()=>{ 
       const update = {
        data:{
          image:image,
          company:company,
          desc:desc,
          field:field,
          qualification:qualification
        }
       }
       return setDetailState(update);
      
      }}
      >
        <div className="card-left blue-bg">
          <img src={props.image} alt="helllo"></img>
       
       </div>
       <div className="card-center">
        <h3>{props.company}</h3>
        <p className="card-detail"> {field}</p>
        <p className="card-loc"> {location}</p>
        <div className="card-sub">
            <p>{posted}</p>
            <p> Full Time</p>
            <p> {applicants}</p>
        </div>


       </div>
       <div className="card-right">
        <div className="tag">
          <h5>Division</h5>
          <a href="#"> <p>{field}</p></a>
           
        </div>
        <div className="card-salary">
          <p><b>$70k</b> / <span>year</span></p>
        </div>
      </div>
      </div>
    
    </div>
  );
}

export default Card;
