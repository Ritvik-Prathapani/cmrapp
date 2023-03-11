import {
  Firstyear,
  Fouthyear,
  Secondyear,
  Thirdyear,
} from "../components/index";
export default function DisplayBrand({ value }) {
  switch (value) {
    case "1st Year":
      return <Firstyear />;
    case "2nd Year":
      return <Secondyear />;
    case "3rd Year":
      return <Thirdyear />;
    case "4th Year":
      return <Fouthyear />;
    default:
      return (
        <>
          <h1 className="text-center text-lg">Please Select Year</h1>
        </>
      );
  }
}
