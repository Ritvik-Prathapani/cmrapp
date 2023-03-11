import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { img6 } from "../images/index";
import { motion } from "framer-motion";

export default function Login() {
  const { id } = useParams();
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    navigate(`/StaffViewPage/${id}`);
  };
  return (
    <>
      <div className="p-5">
        <img src={img6} className="my-2 w-[80vw] mx-auto" alt="login" />
        <div className="text-center space-y-3 p-2">
          <h1 className="text-xl font-bold">Hello!</h1>
          <p className="max-w-md font-light text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            tempora atque repudiandae asperiores,
          </p>
        </div>
      </div>
      <form className="flex flex-col justify-center  gap-y-5 items-center">
        <div className="border-2 border-slate-200 flex justify-center px-7 py-2 rounded-full gap-x-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="#5e92f8"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          <input
            type="text"
            className=" outline-none "
            placeholder="Your@Cmrid"
          />
        </div>
        <div className="border-2 border-slate-200 flex justify-center px-7 py-2 rounded-full gap-x-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="#5e92f8"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <input
            type="text"
            className="outline-none "
            placeholder="Your@adminpass"
          />
        </div>
        <motion.div whileTap={{ scale: 0.8 }}>
          <button
            onClick={loginUser}
            className="bg-blue-500  p-3 w-[80vw] shadow-lg shadow-slate-300 font-semibold text-white rounded-full"
          >
            login
          </button>
        </motion.div>
      </form>
      <div className="my-7">
        <h1 className="text-center text-gray-400">
          Powered By <span className="text-slate-400 font-semibold">CMR</span>
        </h1>
      </div>
    </>
  );
}
