import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import DisplayBrand from "../../components/DisplayBranch";
export default function PrincipleSort() {
  const [selectvalue, setselectvalue] = useState();
  return (
    <>
      <div className="flex justify-center space-x-5 p-4 my-5">
        <div className=" w-[80vw] flex items-center">
          <select
            className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-blue-500"
            onChange={(e) => {
              setselectvalue(e.target.value);
            }}
          >
            <option>Select Year</option>
            <option>1st Year</option>
            <option>2nd Year</option>
            <option>3rd Year</option>
            <option>4th Year</option>
          </select>
          <AiOutlineDown className="-translate-x-7" />
        </div>
      </div>
      <DisplayBrand value={selectvalue} />
    </>
  );
}
