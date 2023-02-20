import React, { useContext, useState,useRef } from "react";
import "../Styles/Layout.css";
import { TbMenu2, TbSearch } from "react-icons/tb";

import Wrapper from "./Wrapper";
import Card from "./Card";
import jobs from "../data";
import DetailContext from "../DetailContext";
function Layout() {

  const {setMenuButton,test,color} = useContext(DetailContext)
  console.log (document.documentElement.innerWidth)
  
  const card = (data, key) => {
 

    
    return (
      <Card 
        image={data.image}
        company={data.company}
        field={data.field}
        desc={data.desc}
        qualification={data.qualification}
        location={data.location}
        posted={data.posted}
        applicants={data.applicants}
        link = {data.link}
        key={key}
      ></Card>
    );
  };

  const [state, setState] = useState("S");
  const [jobState, setJobState] = useState();
  
  const onChange = (e) => {
    if (isNaN(e.target.value)) {
      setState(e.target.value.toUpperCase());
    }
  };

  const clickHandle = (e) => {
    const arr = jobs.filter((data, key) => {
      console.log("handle", data.field, state);

      return data.field.toUpperCase().slice(0, 3) === state.slice(0, 3);
    });
    return setJobState(arr);
  };
  return (

    <div className="main" ref={test}>
      <div className="main-header">
        
        <div className="search">
          <input
            type="text"
            onChange={(e) => {
              return onChange(e);
            }}
            className="search-in"
            placeholder="Search "
          ></input>
          <button
            className="btn-search"
            onClick={(e) => {
              return clickHandle(e);
            }}
          >

            <TbSearch></TbSearch>
          </button>
        </div>
      </div>
      <Wrapper state={state} state2={jobState}></Wrapper>
      {jobState && jobState.length >= 1
        ? jobState.map((data, key) => card(data, key))
        : jobs.map((data, key) => card(data, key))}
    </div>
  );
}

export default Layout;
