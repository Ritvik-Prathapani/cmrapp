import React from "react";
import {
  Welcome,
  SelectUser,
  Loginuser,
  StaffCategory,
  Createaccount,
  StaffViewPage,
  PrincipleSort,
  Yearndbranch,
  StudentProfile,
  Competions,
  Competiondetails,
} from "../pages/index";
import { Routes, Route } from "react-router-dom";
export default function Stacknavigator() {
  return (
    <>
      {}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/selectuser" element={<SelectUser />} />
        <Route path="/staffcategory/" element={<StaffCategory />} />
        <Route path="/Loginuser/:id" element={<Loginuser />} />
        <Route path="/Createaccount" element={<Createaccount />} />
        <Route path="/StaffViewPage/:staff" element={<StaffViewPage />} />
        <Route path="/PrincipleSort" element={<PrincipleSort />} />
        <Route path="/student/:name/:year/:branch" element={<Yearndbranch />} />
        <Route path="/profile/:studentname" element={<StudentProfile />} />
        <Route
          path="/profile/:studentname/Competions"
          element={<Competions />}
        />
        <Route path="/details" element={<Competiondetails />} />
      </Routes>
    </>
  );
}
