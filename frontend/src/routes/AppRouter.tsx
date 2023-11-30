import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Criterias from "../pages/Criterias";
import CriteriaDetails from "../pages/CriteriaDetails";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:criteriaId" element={<Criterias />} />
      <Route path="/:criteriaId/:variableId" element={<CriteriaDetails />} />
    </Routes>
  );
};

export default AppRouter;