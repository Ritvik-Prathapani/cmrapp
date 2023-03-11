import React, { useEffect, useState } from "react";
import { Posts } from "../../Data/DummyPosts";
import { Coursel, PrincipleModel } from "../../components/index";
import { ImSpinner2 } from "react-icons/im";
import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import { img4 } from "../../images/index";
import { data } from "../../Data/CourselData";
export default function Hod() {
  const [ismodel, setIsmodel] = useState(false);
  const [isloading, setIsloading] = useState(false);
  // loader
  useEffect(() => {
    const interval = setIsloading(true);
    setInterval(() => {
      setIsloading(false);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // Toggle_model
  const handleshowmodel = () => {
    setIsmodel(true);
  };
  return (
    <body className="bg-slate-100">
      {isloading ? (
        <>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex flex-col items-center">
              <ImSpinner2 size={55} color="#3b82f6" className="animate-spin" />
              <h1 className="text-lg my-1 text-slate-700">Welcome</h1>
            </div>
          </div>
        </>
      ) : (
        <>
          <header>
            <div className="flex items-center p-2">
              <img
                src={img4}
                className="w-8 h-8 rounded-full"
                alt="collagelogo"
              />
              <h1 class="text-[15px] p-3">CMR Collage</h1>
              <BiChevronDown size={20} />
            </div>
            <Coursel data={data} imagesize={90} />
          </header>
          <div>
            <h1 className="m-4 text-[20px] font-medium">Activites 🔥 </h1>
          </div>
          <main className="flex flex-col my-5 justify-center items-center gap-y-4">
            {ismodel ? (
              <PrincipleModel ismodel={ismodel} setIsmodel={setIsmodel} />
            ) : null}
            {Posts.map((item) => {
              return (
                <div className="px-3">
                  <div className="bg-white p-2 shadow-md rounded-xl">
                    <div className="flex items-center  space-x-3 px-2 py-1">
                      <img
                        src={img4}
                        alt="poster"
                        className="w-9 h-9 rounded-full"
                      />
                      <div>
                        <h1 className="text-[17px] font-semibold">Principle</h1>
                        <h1 className="text-[10px]  text-gray-500">
                          5 min ago
                        </h1>
                      </div>
                      <h1 className="-translate-y-1 text-sm"></h1>
                    </div>
                    <div>
                      <h1 className="max-w-md m-2 text-sm">{item.Tittle}</h1>
                      <div>
                        <img
                          src={item.image}
                          alt="Post"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </main>
          <footer>
            <nav className="flex justify-around fixed bottom-0 left-0 items-center bg-gray-100  shadow-xl shadow-slate-900 p-1 w-full">
              <div className="flex flex-col items-center space-y-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="skyblue"
                  className="w-6 h-6 border-b-2 border-sky-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <small>Home</small>
              </div>
              <div
                className="flex flex-col items-center space-y-1"
                onClick={handleshowmodel}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="skyblue"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                  />
                </svg>
                <small>Post</small>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Link to={"/PrincipleSort"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="skyblue"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </Link>
                <small>Sort</small>
              </div>
            </nav>
          </footer>
        </>
      )}
    </body>
  );
}
