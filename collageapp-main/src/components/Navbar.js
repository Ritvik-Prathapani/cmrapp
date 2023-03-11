import React from "react";
import { CgProfile } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
export default function Navbar({ Home, Event, profile }) {
  const Year = localStorage.getItem("Year");
  const branch = localStorage.getItem("branch");
  const Name = localStorage.getItem("Name");
  return (
    <>
      <nav className="flex justify-around fixed bottom-0 left-0 items-center bg-slate-100 p-2.5 w-full shadow-xl">
        <div className="flex flex-col items-center space-y-1 ">
          <Link to={`/student/${Name}/${Year}/${branch}`}>
            <AiFillHome size={23} color="gray" />
          </Link>
          {Home ? (
            <div className="bg-gray-400 w-1.5 h-1.5 rounded-full"></div>
          ) : null}
        </div>
        <div className="flex flex-col items-center space-y-1">
          <Link to={`/profile/${Name}/Competions`}>
            <MdOutlineEmojiEvents size={26} color="gray" />
          </Link>
          {Event ? (
            <div className="bg-gray-400 w-1.5 h-1.5 rounded-full"></div>
          ) : null}
        </div>
        <Link to={`/profile/${Name}`}>
          <div className="flex flex-col items-center space-y-1">
            <CgProfile size={25} color="gray" />
            {profile ? (
              <div className="bg-gray-400 w-1.5 h-1.5 rounded-full"></div>
            ) : null}
          </div>
        </Link>
      </nav>
    </>
  );
}
