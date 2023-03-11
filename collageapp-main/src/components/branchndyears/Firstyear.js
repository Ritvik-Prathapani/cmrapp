import React from "react";
import { Link } from "react-router-dom";
import { Firstyearbranches } from "../branchndyears/branchdata/FirstYear";
export default function Firstyear() {
  return (
    <>
      {Firstyearbranches.map((item) => {
        return (
          <Link to={`/student/${item.Year}/${item.Branch}`}>
            <div
              key={item.id}
              className="flex justify-center flex-col items-center my-3"
            >
              <img src={item.image} alt="" className="w-[90vw] rounded-xl" />
            </div>
          </Link>
        );
      })}
    </>
  );
}
