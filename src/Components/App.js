import React from 'react';
import Landingpage from '../Components/Landingpage.js'
import Footer from '../Components/Footer.js'
import Nav from '../Components/Nav.js'
import Dashboard from '../Components/Dashboard'
import '../index.css';
function App() {
  return (
  
      <div className="text-black  font-bold text-3xl ">
      {/* <Nav />
      <Landingpage />
      <Footer />  */}
      <Dashboard />
    </div>
  )
}
export default App