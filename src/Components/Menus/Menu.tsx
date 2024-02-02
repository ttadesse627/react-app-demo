import { Route, Routes } from "react-router-dom";
import Home from "./HomeMenu/Home";
import PageNotFound from "./PageNotFound";
import ApplicantList from "./Applicant/ApplicantList";
import LookupList from "./Lookup/LookupList";
import LookupRegistration from "./Lookup/LookupRegistration";

function Menu() {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applicant/list" element={<ApplicantList />} />
        <Route path="/lookup/list" element={<LookupList />} />
        <Route path="/lookup/add-new" element={<LookupRegistration />} />
        <Route Component={PageNotFound} />
      </Routes>
    </div>
  );
}

export default Menu;
