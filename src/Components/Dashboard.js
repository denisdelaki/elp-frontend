import React from 'react';
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import Home from '../Components/Home'
import Chapters from '../Components/Chapters'
import Events from '../Components/Events'
import Hub from '../Components/Hub'
import Opportunities from '../Components/Opportunities'
import Aboutus from '../Components/Aboutus'
function Dashboard() {
  return (
    <div> 
        <Sidebar />
        <Header />
        <div>
            <Home /> 
            <Chapters /> 
            <Events /> 
            <Opportunities /> 
            <Hub /> 
            <Aboutus />
         </div>
    </div>
  )
}
export default Dashboard