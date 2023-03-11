import React from "react";
export default function PrincipleCoursel({ data, imagesize }) {
  return (
    <div className="flex overflow-x-scroll hide-scroll-bar scroll-smooth w-[100vw] mx-auto gap-x-1 ">
      {data.map((item) => {
        return (
          <img
            src={item.image}
            alt=""
            className={`w-[${imagesize}vw] px-2 rounded-3xl`}
          />
        );
      })}
    </div>
  );
}
