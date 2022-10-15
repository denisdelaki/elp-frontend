import React from 'react';
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import Home from '../Components/Home'
import Chapters from '../Components/Chapters'
import Events from '../Components/Events'
import Hub from '../Components/Hub'
import Opportunities from '../Components/Opportunities'
import Aboutus from '../Components/Aboutus'
import { Routes, Route } from "react-router-dom";
function Dashboard() {
  return (
    <div> 
        <Sidebar />
        <Header />
        <div className="relative left-20 top-2">
            <Routes>
        <Route
          exact
          path="/"
          element={<Home />}
        ></Route>
        <Route
          exact
          path="/chapters"
          element={<Chapters />}
        ></Route>
        <Route
          exact
          path="/events"
          element={<Events />}
        ></Route>
        <Route
          exact
          path="/opportunities"
          element={<Opportunities />}
        ></Route>
        <Route
          exact
          path="/hub"
          element={<Hub />}
        ></Route>
        <Route
          exact
          path="/aboutus"
          element={<Aboutus />}
        ></Route>
        </Routes>
         </div>
    </div>
  )
}
export default Dashboard