import React, { useState } from "react";
import { login, logout } from "../redux/slices/Loginndout";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { img3 } from "../images/index";
export default function Createaccount() {
  const disptach = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Name: "",
    Branch: "",
    Year: "",
  });
  // Creating_user_account
  const Createuseraccount = (e) => {
    e.preventDefault();
    navigate(`/student/${user.Name}/${user.Year}/${user.Branch}`);
    // if ((user.Name, user.CMRID, user.Branch, user.Year !== "")) {
    //   const AccountCreated = new Promise((resolve, reject) => {
    //     resolve(disptach(login(user)));
    //   });
    //   AccountCreated.then((res) => {
    //     // Saving_user_info_to_localstorage
    //     localStorage.setItem("user", JSON.stringify(res));
    //   });
    //   AccountCreated.catch((err) => {
    //     console.error("There was an error creating the account", err);
    //   });
    // } else {
    //   alert("Please enter Your details");
    // }
    console.log(user);
  };

  return (
    <>
      <div className="px-2 py-3">
        <h1 className="text-xl">Create account to Continue</h1>
      </div>
      <div className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div>
          <img src={img3} alt="logo" className="max-w-[40vw] mx-auto" />
        </div>
        <div className="bg-white  rounded-t-xl -mt-5 px-10">
          <form className="flex flex-col justify-center my-10 items-center gap-y-5">
            <div className="space-y-3">
              <input
                id="Name"
                className="bg-transparent text-sm p-3 rounded-3xl border-2 border-slate-300 outline-none w-[80vw]"
                type="text"
                value={user.Name}
                placeholder="Name"
                onChange={(e) => setUser({ ...user, Name: e.target.value })}
              />
            </div>
            <div className="space-y-3">
              <select
                id="Branch"
                name="year"
                value={user.Branch}
                onChange={(e) => setUser({ ...user, Branch: e.target.value })}
                className="bg-slate-200 w-[80vw] p-3 outline-none rounded-full"
              >
                <option>Branch</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="MECH">MECH</option>
                <option value="CIVIL">CIVIL</option>
              </select>
            </div>
            <div className="space-y-3">
              <select
                name="year"
                className="bg-slate-200 w-[80vw] p-3 outline-none rounded-full"
                value={user.Year}
                onChange={(e) => setUser({ ...user, Year: e.target.value })}
              >
                <option>Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="my-3">
              <button
                onClick={Createuseraccount}
                className="bg-blue-600 font-semibold text-sm py-3 text-white w-[60vw] rounded-full"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
        <footer>
          <center>
            <div className="space-y-3 p-1">
              <h1 className="text-slate-500">Community Guildlines</h1>
              <p className="text-[10px] max-w-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
                esse in perferendis a eveniet nesciunt minima provident qui,
                quis dolor.
              </p>
            </div>
          </center>
        </footer>
      </div>
    </>
  );
}
