import { Route, Routes } from "react-router-dom";
import DepartmentRegistration from "./Department/DepartmentRegistration";
import Home from "./HomeMenu/Home";
import DepartmentList from "./Department/DepartmentList";
import StudentsList from "./Student/StudentsList";
import StudentRegistration from "./Student/StudentRegistration";

function Menu() {
  return (
    <div className="routes">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<DepartmentList />} />
        <Route
          path="/departments/add-new"
          element={<DepartmentRegistration />}
        />
        <Route path="/students" element={<StudentsList />} />
        <Route path="/students/add-new" element={<StudentRegistration />} />
      </Routes>
    </div>
  );
}

export default Menu;
