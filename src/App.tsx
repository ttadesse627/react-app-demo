import "./styles/App.css";
import "react-toastify/ReactToastify.css";

import RootLayout from "./RootLayout";
import Header from "./Components/Header/Header";
import Home from "./Components/Menus/HomeMenu/Home";
import ApplicantList from "./Components/Menus/Applicant/ApplicantList";
import LookupList from "./Components/Menus/Lookup/LookupList";
import LookupRegistration from "./Components/Menus/Lookup/LookupRegistration";
import LookupEdit from "./Components/Menus/Lookup/LookupEdit";
import PageNotFound from "./Components/Menus/PageNotFound";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LookupRoutes from "./Components/Menus/Lookup/LookupRoutes";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="applicants" element={<ApplicantList />} />
        <Route path="lookups" element={<LookupRoutes />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <div className="app-container">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
