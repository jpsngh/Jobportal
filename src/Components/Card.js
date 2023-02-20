import React, { useContext,useEffect,useState } from "react";
import { useNavigate } from "react-router";
import "../Styles/Card.css";
import DetailContext from "../DetailContext";
import FullDetail from "./FullDetail";
import { Navigate } from "react-router";
function Card(props) {
  const [dimensions,setDimensions] = useState();
 const [state,setState] = useState(null);
 const [cstate,setCState] = useState();
  useEffect(()=>{


    function handleResize() {
   setDimensions(window.innerWidth)
      }


    window.addEventListener('resize', handleResize)
    const color = document.documentElement
 
    if (parseInt(color.clientWidth)<700)
    {
      if(state){
     const z =cstate[0].getElementsByClassName("detail-close")
        
       z[0].addEventListener("click",(()=>{
       
        return cstate[0].style.setProperty("display","none")
       }))
       if (parseInt(z[0].clientWidth)<700){
        z[0].style.setProperty("display","flex")
      }
      }
    setState(true)
   
    }
   
    const de = document.documentElement.getElementsByClassName("detail");
    setCState(de)
    if (parseInt(color.clientWidth)>700)
    {
      if(cstate){
      cstate[0].style.setProperty("display","none");
      
   

    setState(false)
    }}

   },[state,cstate,dimensions]) 
  const navigate = useNavigate()

  const {
    image,
    company,
    field,
    desc,
    qualification,
    posted,
    applicants,
    location,
    link,
  } = props;
  const { setDetailState, setFullDetails,reference,color,detailState } = useContext(DetailContext);
  function send(update){
   console.log(state<700);

   if(state){
    setDetailState(update)

     cstate[0].style.setProperty("display","block");
     cstate[0].style.setProperty("width","100%");
     cstate[0].style.setProperty("height","100%");
     cstate[0].style.setProperty("z-index","1");
     setState(color.clientWidth);
   }
   setState(color.clientWidth);
     return setDetailState(update);
  }

  return (
    <div className="wrapper">
       
      <div
    
        className="card"
        onClick= {() => {
          var update = {
            data: {
              image: image,
              company: company,
              desc: desc,
              field: field,
              qualification: qualification,
              link:link
            },
          };
         
          return send(update);
        }}
      >
        <div className="card-left blue-bg">
          <img src={props.image}  alt="hello" ></img>
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
            <a >
              {" "}
              <p>{field}</p>
            </a>
          </div>
          <div className="card-salary">
            <p>
              <b>$70k</b> / <span> year</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
