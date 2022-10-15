import React from 'react';
import Landingpage from '../Components/Landingpage.js'
import Footer from '../Components/Footer.js'
import Nav from '../Components/Nav.js'
import Sidebar from '../Components/Sidebar'
import '../index.css';
function App() {
  return (
  
      <div className="text-black  font-bold text-3xl ">
      {/* <Nav />
      <Landingpage />
      <Footer />  */}
      <Sidebar />
    </div>
  )
}
export default App