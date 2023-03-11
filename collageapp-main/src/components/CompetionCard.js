import React from "react";
import { Link, useNavigate } from "react-router-dom";
export default function CompetionCard({ filter, filtervalue }) {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/4384141/pexels-photo-4384141.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Software development",
      Intro:
        "Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor ",
    },
    {
      image:
        "https://images.pexels.com/photos/4384141/pexels-photo-4384141.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Ml develpment",
      Intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor",
    },
    {
      image:
        "https://images.pexels.com/photos/4384141/pexels-photo-4384141.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "Web develpment",
      Intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor    ",
    },
    {
      image:
        "https://images.pexels.com/photos/4384141/pexels-photo-4384141.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "App development",
      Intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor  ",
    },
    {
      image:
        "https://images.pexels.com/photos/4384141/pexels-photo-4384141.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "AI development",
      Intro:
        "Lorem ipsum dolor sit amet consectetur adipisicing.Lorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor sit amet consectetur adipisicingLorem ipsum dolor",
    },
  ];
  return (
    <div className="my-5 flex justify-center gap-y-4 flex-col items-center">
      {filter
        ? data
            .filter((item) => {
              if (item.Tittle.includes(filtervalue)) {
                return item;
              }
            })
            .map((item, i) => {
              return (
                <Link
                  to={{
                    pathname: "/details",
                  }}
                  state={{
                    image: item.image,
                    Tittle: item.Tittle,
                    Para: item.Intro,
                  }}
                >
                  <div className="bg-gray-100 shadow-lg rounded-xl p-3" key={i}>
                    <img
                      src={item.image}
                      alt="posts"
                      className="rounded-xl max-w-[85vw]"
                    />
                    <div className="my-2 py-1 px-2">
                      <h1 className="text-[10px] font-semibold text-blue-700">
                        #{item.Tittle}
                      </h1>
                    </div>
                  </div>
                </Link>
              );
            })
        : data.map((item, i) => {
            return (
              <Link
                to={{
                  pathname: "/details",
                }}
                state={{
                  image: item.image,
                  Tittle: item.Tittle,
                  Para: item.Intro,
                }}
              >
                <div className="bg-gray-100 shadow-lg rounded-xl p-3" key={i}>
                  <img
                    src={item.image}
                    alt="posts"
                    className="rounded-xl max-w-[85vw]"
                  />
                  <div className="my-2 py-1 px-2">
                    <h1 className="text-[10px] font-semibold text-blue-700">
                      #{item.Tittle}
                    </h1>
                  </div>
                </div>
              </Link>
            );
          })}
    </div>
  );
}
