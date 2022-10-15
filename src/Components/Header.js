import React from 'react';

function Header() {
  return (
    <div  className="flex top-0 bg-red-200 h-20 justify-between"> 
    <div>
        <h1 className="text-4lg mx-2 text-red-700 font-bold"> ELP </h1> 
        <p className="text-sm my-4 mx-2 font-normal" > Transforming Africa </p>
    </div> 
      <div> 
            <h2 className="text-2lg font-normal mx-3">John Doe</h2>
            <button className="text-lg shadow-2xl w-20 bg-white rounded-md  font-normal mx-10 hover:text-white hover:bg-black hover:shadow-lg">LOGOUT </button>
     </div>
    </div>
  )
}
export default Header