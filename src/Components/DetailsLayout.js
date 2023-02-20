import React, { useContext,useRef,useEffect ,useState} from "react";

import "../Styles/Detail.css";
import { AiOutlineClose } from "react-icons/ai";
import DetailContext from "../DetailContext";
const DetailsLayout = () => {
  const [active,setActive]= useState(false);
  const { detailState} = useContext(DetailContext);
  useEffect(()=>{
    const color = document.documentElement.getElementsByClassName("detail")
    console.log( parseInt(color[0].clientWidth))
    if(parseInt(color[0].clientWidth)<700){
      setActive(true)
    }else {
      setActive(false)
    }

    console.log(document.documentElement.getElementsByClassName("detail"));
   },[])

   
 
  return (
    
    <div className="detail"  >
      <b className={active===true?"detail-close":"bb"}><AiOutlineClose></AiOutlineClose></b>
      <div className="detail-header">
      {    console.log(document.documentElement.clientWidth)}
        <img src={detailState.data.image} alt=""></img>
        <h2>{detailState.data.company}</h2>
        <p>{detailState.data.field}</p>
      </div>
      <hr className="divider"></hr>
      <div className="detail-desc">
        <div className="about">
          <h4>Job Description</h4>
          <p> {detailState.data.desc} </p>
          <span> </span>
          <a href={detailState.data.link}> read more... </a>
          <hr className="divider"></hr>
          <h4>Qualifications</h4>
          <p> {detailState.data.qualification}</p>

          <div className="btn-apply">
            <a href={detailState.data.link}>
            <button className="btn">Apply Now </button> </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsLayout;
