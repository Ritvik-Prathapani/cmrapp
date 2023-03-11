import React from "react";
import { useParams } from "react-router-dom";
import { Principle, Hod, Faculty } from "../pages/StaffPages/index";
export default function StaffViewPage() {
  const { staff } = useParams();
  switch (staff) {
    case "Principle":
      return <Principle />;
    case "Hod":
      return <Hod />;
    case "Faculty":
      return <Faculty />;
    default:
      return <h1>Page does not exist</h1>;
  }
}
