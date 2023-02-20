import React from "react";
import Layout from "./Layout.js"
import Sidebar from "./Sidebar"
import DetailsLayout from './DetailsLayout';
import  DetailContext from '../DetailContext.js';

import FullDetail from './FullDetail.js';
function Application() {
  
  return (
    <div>
      <FullDetail></FullDetail>
      <DetailsLayout></DetailsLayout>

     <Sidebar></Sidebar>
     <Layout></Layout>


  
    </div>
  )
}

export default Application