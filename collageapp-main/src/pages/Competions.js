import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar, CompetionCard } from "../components";
export default function Competions() {
  const [filtervalue, setfiltervalue] = useState();
  const [filter, setfilter] = useState(false);
  const Params = useParams();

  const data = [
    {
      category: "Web develpment",
    },

    {
      category: "App development",
    },

    {
      category: "Software development",
    },

    {
      category: "AI develpment",
    },

    {
      category: "Ml develpment",
    },

    {
      category: "DL develpment",
    },
  ];

  return (
    <>
      <header>
        <div className="p-5">
          <div className="space-y-3">
            <h1 className="text-lg">Hi,{Params.studentname}</h1>
            <p className="text-2xl font-bold">Hackatons Competions</p>
          </div>
        </div>
        <div className="flex  flex-nowrap overflow-x-scroll hide-scroll-bar scroll-smooth gap-x-4 px-3">
          {data.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  className="bg-blue-600 text-white px-5 py-2 rounded-full text-center"
                  onClick={() => {
                    setfiltervalue(item.category);
                    setfilter(true);
                  }}
                >
                  <h1 className="text-[10px] font-semibold">{item.category}</h1>
                </div>
              </>
            );
          })}
        </div>
      </header>
      <main>
        <CompetionCard filter={filter} filtervalue={filtervalue} />
      </main>
      <footer>
        <Navbar Event="true" />
      </footer>
    </>
  );
}
