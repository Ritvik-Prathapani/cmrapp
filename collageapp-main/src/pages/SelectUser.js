import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { category } from "../Data/SelectCategory";
export default function SelectUser() {
  // Greet_the_user
  const date = new Date();
  const hours = date.getHours();
  let greet;
  if (hours < 12) {
    greet = "Good Morning";
  } else if (hours < 17) {
    greet = "Good Afternoon";
  } else {
    greet = "Good Evening";
  }

  const btnstyles = "bg-blue-600 text-white px-24 py-2 rounded-full";

  return (
    <>
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={easeInOut}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-4xl text-center font-semibold">{greet}</h1>
          <p className="text-center text-[15px] my-4 text-slate-600">
            Let us Know How You Are
          </p>
          <div className="flex flex-col justify-center items-center my-5 gap-y-4">
            <Link to={"/staffcategory"}>
              <button className={btnstyles}>Staff</button>
            </Link>
            <Link to={"/Createaccount"}>
              <button className={btnstyles}>Student</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
