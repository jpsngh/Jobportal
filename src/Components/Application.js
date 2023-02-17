import React from 'react'
import Layout from "./Layout.js"
import Sidebar from "./Sidebar"
import DetailsLayout from './DetailsLayout';
import  DetailContext from '../DetailContext.js';
import { useState } from 'react';
function Application() {

  
  const initialState = {

    data:{
   
    image:"https://cutewallpaper.org/cdn-cgi/mirage/879d3f56044898301ccabab4a8a90586cd5663eca603a14193df05b49a03034b/1280/24/google-+-logo-png/colorful-google-logo-design-on-transparent-png-similar-png.png",
    company:"Microsoft",
    field:"Data Science",
    desc:"The Google Cloud team helps companies, schools, and government seamlessly make the switch to Google products and supports them along the way. You listen to the customer and swiftly problem-solve technical issues to show how our products can make businesses more productive, collaborative, and innovative. You work closely with a cross-functional team of web developers and systems administrators, not to mention a variety of both regional and international customers. Your relationships with customers are crucial in helping Google grow its Cloud business and helping companies around the world innovate.",
    qualification:" Bachelor's degree in Computer Science, Information Systems, related technical field, or equivalent practical experience  3 years of experience developing/deploying machine learning and time series forecasting models using statistical software ,Python, R 3 years of experience applying statistical modeling, hypothesis testing, and experimentation, 3 years of experience analyzing data, working with SQL and databases",
    location:"Toronto",
    posted :" 50 mins ago",
    applicants:"20",
    }
}
  const [detailState,setDetailState] = useState(initialState);
 const  contextValue = {detailState,setDetailState} 
  return (
    <div>
    <DetailContext.Provider value={contextValue}>
     <Sidebar></Sidebar>
     <DetailsLayout></DetailsLayout>
     <Layout></Layout>
     </DetailContext.Provider>
    </div>
  )
}

export default Application