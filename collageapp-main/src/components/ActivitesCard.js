import React from "react";
import { Posts } from "../Data/DummyPosts";
import { img4 } from "../images/index";

export default function ActivitesCard() {
  return (
    <div>
      {Posts.map((item) => {
        return (
          <div className="px-3 my-5">
            <div className="bg-white p-2 shadow-md rounded-xl">
              <div className="flex items-center  space-x-3 px-2 py-1">
                <img src={img4} alt="" className="w-9 h-9 rounded-full" />
                <div>
                  <h1 className="text-[17px] font-semibold">Principle</h1>
                  <h1 className="text-[10px] text-gray-500">5 min ago</h1>
                </div>
                <h1 className="-translate-y-1 text-sm"></h1>
              </div>
              <div>
                <h1 className="w-[60vw] m-3 text-sm">{item.Tittle}</h1>
                <div>
                  <img src={item.image} alt="Post" className="rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
