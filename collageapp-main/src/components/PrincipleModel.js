import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineUpload } from "react-icons/ai";

export default function PrincipleModel(props) {
  const [isdone, setIsdone] = useState(false);
  const cancelmodel = () => {
    props.setIsmodel(!props.ismodel);
  };
  const Postsucess = () => {
    setIsdone(!isdone);
  };
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-30 h-screen backdrop-blur-sm">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-xl p-5 -translate-y-1/2 bg-gray-100 w-[90vw]">
          {isdone ? (
            <>
              <div className="text-center p-2 ">
                <div className="flex justify-end ">
                  <RxCross1 size={20} onClick={cancelmodel} />
                </div>
                <div className="my-4">
                  <h1 className="text-xl text-sky-500">
                    Post Uploaded sucessfully
                  </h1>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-end ">
                <RxCross1 size={20} onClick={cancelmodel} />
              </div>
              <div className="flex flex-col justify-center items-center ">
                <AiOutlineUpload
                  className="border-4 p-4 rounded-full"
                  size={90}
                  color="#c7cfd7"
                />
                <input type="file" id="file-upload" />
                <label
                  htmlFor="file-upload"
                  className="bg-blue-500 px-20 py-3 my-4 rounded-3xl text-white text-sm font-semibold"
                >
                  Upload Image
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  placeholder="Wite a Message"
                  className="p-3 outline-none rounded-xl my-4"
                  rows="8"
                ></textarea>
                <div>
                  <button
                    onClick={Postsucess}
                    className="bg-blue-500 w-[70vw] p-3 rounded-3xl text-white text-sm font-semibold"
                  >
                    Post
                  </button>
                </div>
                <h1 className="text-center my-3 text-gray-400">
                  Powered By{" "}
                  <span className="text-slate-400 font-semibold ">CMR</span>
                </h1>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
