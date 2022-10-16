import React from 'react';
import { FiPhoneIncoming } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
function Aboutus() {
  return (
    <div>
      <h1 className="">WHO ARE WE?</h1>
      <p className="text-xl relative font-normal -mx-4 p-4 w-10/12 ">
        Equity Leadership Program(ELP) is a program that entails beneficiaries
        selected by Equity Group whom they feel will exploit the opportunity
        presented for maximum benefit of not just themselves but the society as
        well. Each year, the bank develops a selection-criteria for new scholars
        based on these factors:{" "}
      </p>
      <ul className="text-xl font-normal mx-60">
        <li>General KSCE performance</li>
        <li>Distribution of Equity Bank Branches</li>
        <li>Performance of graduating Wings to Fly scholars</li>
        <li>
          Performance categories i.e. top nationally, top in county and top in
          sub-county
        </li>
      </ul>
      <h2 className="text-2xl">What Does it entail to be an ELP scholar?</h2>
      <div className="flex justify-evenly mt-4 ">
        <div className="text-lg font-normal h-max  w-96 shadow-2xl rounded-t-2xl border">
          <h1 className="font-bold text-xl m-2">Local University Scholars </h1>
          <h3 className="m-2 font-semibold"> University Chapters </h3>
          <p className="mx-2">
            Chapters operate as clubs aimed at expansion of avenues for
            leadership, professional development and financial support for Wings
            to Fly and ELP scholars.
          </p>
          <h3 className="font-semibold m-2"> Centres Of Excellence</h3>
          <p className="mx-2">
            Centre of excellence is a highly competitive program in which the
            bank provides mentorship to successful applicants for one term each
            year. ELP Scholars offer academic and value-based mentorship to the
            selected COE centres.
          </p>
        </div>
        <div className="text-lg font-normal h-max shadow-2xl rounded-t-2xl border w-96 m-2 ">
          <h1 className="font-bold text-2xl m-2">Global University Scholars</h1>
          <p className="mx-2">
            In order to increase their global exposure, ELP scholars who wish to
            study abroad are taken through a month-long residential training
            program that covers critical thinking, college application processes
            and exposure to what global universities have to offer. 600+
            scholars have secured admission in over 130 leading global
            universities across 25 different countries including Ivy league
            universities. ELP graduates from these institutions have proceeded
            to have fulfilling careers in leading global institutions in the
            fields of Finance, Health, IT, among others.
          </p>
        </div>
        <div className="text-lg font-normal h-max w-96  shadow-2xl rounded-t-2xl border">
          <h1 className="font-bold text-2xl m-2"> Internship Programs</h1>
          <p className="mx-3">
            After the pre-university internships, the scholars join various
            universities abroad. During the long break, they get an opportunity
            to apply back to the bank for a paid internship, which is made
            available based on the business need.{" "}
          </p>
        </div>
      </div>
      <div className=" fixed bottom-0 -z-0 h-40 bg-red-200 w-screen -mx-4 grid grid-cols-3  ">
        <div className="mx-10">
          <h3 className="text-2xl">Equity Leadership Program</h3>
          <ul className="text-lg font-normal my-2 ">
            <li className="cursor-pointer my-1">About us</li>
            <li className="cursor-pointer my-1">Our Services</li>
            <li className="cursor-pointer my-1">Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="mx-14">Contact Us</h3>
          <ul className='text-lg mx-20 my-2'>
            <i>{FiPhoneIncoming} 0763000000</i>
            <li>{AiOutlineMail} elp@gmail.com</li>
            <li></li>
          </ul>
        </div>
        <div className="mx-16">
          <h3>Follow Us</h3>
        </div>
      </div>
    </div>
  );
}
export default Aboutus