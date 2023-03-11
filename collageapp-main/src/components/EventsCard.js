import React from "react";
import { Activites } from "../Data/Activites";

export default function EventsCard() {
  return (
    <>
      <div className="grid grid-cols-2 gap-x-5 gap-y-3 justify-center p-3 place-items-center">
        {Activites.map((item) => {
          return (
            <>
              <div
                key={item.id}
                className={`bg-${item.BgColor}-600 bg-opacity-75 w-[48vw] p-5 rounded-lg`}
              >
                <div>
                  <h1 className="text-white font-semibold">{item.Tittle}</h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
