import React from "react";
import { Studentdata } from "../../Data/StudentPersonl";
export default function Card() {
  return (
    <>
      <div className="my-40 mb-24">
        <div className="grid grid-cols-2 gap-y-3 justify-center place-items-center">
          {Studentdata.map((item) => {
            return (
              <>
                <div
                  className=" shadow-md  p-4 rounded-xl flex flex-col justify-center items-center space-y-3"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt="picture"
                    className="max-w-[35vw] mx-auto"
                  />
                  <h1>{item.Tittle}</h1>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
