import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import { Students } from "../Data/CampusStar";

export default function CampusStarCard() {
  return (
    <>
      <div className="flex gap-x-2 px-4 overflow-x-scroll hide-scroll-bar">
        {Students.map((item) => {
          return (
            <>
              <div
                key={item.id}
                className="shadow-lg bg-white rounded-lg my-3 px-12 py-5 flex flex-col items-center justify-center hide-scroll-bar"
              >
                <AiOutlineFire
                  size={20}
                  className="-translate-x-11"
                  fill="red"
                />
                <img
                  src={item.img}
                  className="w-12 h-12 rounded-full object-cover"
                  alt="Student"
                />
                <div className="text-center my-2">
                  <h1 className="font-semibold">{item.Name}</h1>
                  <small className="text-slate-400 my-2 text-[12px]">
                    Dance
                  </small>
                  <p className="font-bold my-1 bg-blue-500 px-5 py-1 text-[10px] rounded-full text-white">
                    {item.Branch}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
