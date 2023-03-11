import React from "react";
import { useLocation } from "react-router-dom";

export default function Competiondetails() {
  const data = useLocation();
  const { image, Tittle, Para } = data.state;
  const random = Math.floor(Math.random() * 10);
  return (
    <>
      <div>
        <div>
          <img src={image} alt="poster" className="w-full object-cover" />
        </div>
        <div>
          <h1 className="text-2xl p-4 font-semibold">{Tittle}</h1>
          <p className="text-sm px-3 text-slate-600">{Para}</p>
        </div>
      </div>
      <div className="bg-gray-100 flex justify-between items-center mx-auto shadow-md rounded-lg max-w-md  my-8 p-5">
        <h1 className="text-center text-lg ">Total Registrations</h1>
        <b className="text-lg">{random}0</b>
      </div>
      <footer className="flex justify-center my-6">
        <button className="bg-blue-600 text-white  w-[90vw] p-3 rounded-full">
          Join Now
        </button>
      </footer>
    </>
  );
}
