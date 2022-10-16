import React, { useEffect, useState } from 'react';

function Chapters() {
  const [chapter, setChapter]=useState([])
  useEffect(() => {
    fetch("").then((response) => {
      if (response.ok) {
        response.json().then((chapter) => {
          setChapter(chapter)
        })
      }
    })
  }, [])
  return (
    <div className='grid grid-cols-5'>
      <div className='border h-72 w-96 my-4 shadow-xl '>
        <h2 className='text-2xl text-center font-bold'>Nairobi ELP Chapter</h2>
        <h3 className='text-xl font-semibold mx-4'>Officials</h3>
        <p className='text-lg font-normal mx-2'>President:</p>
        <p className="text-lg font-normal mx-2">V. President:</p>
        <p className="text-lg font-normal mx-2"> Secretary:</p>
        <p className='text-lg font-normal mx-2'>Treasurer:</p>
        <p className="text-lg font-normal m-1">Members: <span className='bg-gray-300 '>200</span></p>
         <button className='h-10 w-14 border-none relative  text-white  text-lg bg-red-600 shadow-xl drop-shadow-xl rounded-2xl mx-2 hover:text-red-600 hover:bg-black hover:shadow-xl'>Join</button>
      </div>
    </div>
  )
}
export default Chapters