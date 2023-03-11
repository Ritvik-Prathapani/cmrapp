import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineBell } from "react-icons/ai";
import { HiOutlineBellAlert } from "react-icons/hi2";

import { useNavigate, useParams } from "react-router-dom";
import { Card, Navbar } from "../components/index";

export default function StudentProfile() {
  const { studentname } = useParams();
  const [isnotify, setIsNotify] = useState(false);
  const navigate = useNavigate();
  const Year = localStorage.getItem("Year");
  const branch = localStorage.getItem("branch");
  const Notify = () => {
    setIsNotify(!isnotify);
  };
  return (
    <>
      <header className="bg-blue-600 w-screen h-[25vh] rounded-b-[40px]">
        <div className="flex justify-around items-center p-5 ">
          <div className="my-6">
            <AiOutlineArrowLeft
              onClick={() =>
                navigate(`/student/${studentname}/${Year}/${branch}`)
              }
              color="white"
              size={30}
              cursor="pointer"
            />
          </div>
          <div>
            <h1 className="text-white text-lg">Your Profile</h1>
          </div>
          {isnotify ? (
            <HiOutlineBellAlert
              onClick={Notify}
              color="white"
              size={28}
              cursor="pointer"
            />
          ) : (
            <AiOutlineBell
              color="white"
              size={28}
              cursor="pointer"
              onClick={Notify}
            />
          )}
        </div>
        <div className="bg-white max-w-[73vw] mx-auto rounded-xl shadow-lg p-10">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-16 h-16  rounded-full object-cover"
              alt="ProfilePic"
            />
            <h1 className="font-semibold  my-2">{studentname}</h1>
            <p className="text-[13px]  text-slate-500">
              {branch} Branch {Year} Year
            </p>
          </div>
        </div>
      </header>
      <main>
        <Card />
      </main>
      <footer>
        <Navbar profile="true" />
      </footer>
    </>
  );
}
