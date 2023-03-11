import { BiChevronDown } from "react-icons/bi";
import { img4 } from "../../images/index";
import {  useParams } from "react-router-dom";
import {
  Navbar,
  ActivitesCard,
  CampusStarCard,
  EventsCard,
} from "../../components/index";

export default function Yearndbranch() {
  const { year, branch, name } = useParams();
  // saving_studentdata_to_localstorage
  localStorage.setItem("Year", year);
  localStorage.setItem("branch", branch);
  localStorage.setItem("Name", name);

  return (
    <body className="bg-slate-100 h-full">
      <header>
        <div className="flex items-center p-4 space-x-3">
          <img src={img4} className="w-8 h-8" alt="Events" />
          <h1>CMR Collage {branch} Branch</h1>
          <BiChevronDown size={20} />
        </div>
        <EventsCard />
        <h1 className="px-5 py-2 font-semibold">The Campus Stars 🧑‍🎓</h1>
        <CampusStarCard />
      </header>
      <main>
        <div>
          <p className="px-4 my-4 font-semibold">Latest Activites 🔥</p>
        </div>
        <ActivitesCard />
      </main>
      {/* Bottom_Nav_bar */}
      <footer>
        <Navbar Home="true" />
      </footer>
    </body>
  );
}
