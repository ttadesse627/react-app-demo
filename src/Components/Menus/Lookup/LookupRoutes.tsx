import React from "react";
import { Route, Routes } from "react-router-dom";
import LookupList from "./LookupList";
import LookupRegistration from "./LookupRegistration";
import LookupEdit from "./LookupEdit";

function LookupRoutes(props: any) {
  return (
    <Routes>
      <Route index element={<LookupList />} />
      <Route path="add-new" element={<LookupRegistration />} />
      <Route path="edit/:type" element={<LookupEdit />} />
    </Routes>
  );
}

export default LookupRoutes;
