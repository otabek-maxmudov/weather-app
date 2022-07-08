import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
const Navbar = lazy(() => import("./Navbar"));
const Today = lazy(() => import("./Today"));
const Week = lazy(() => import("./Week"));

const Mainpage = () => {
  return (
    <div className="w-2/3 h-screen md:w-3/4 sm:w-3/4 bg-gray-100 dark:bg-gray-800 py-4 md:py-5 px-6 md:px-8 transition-colors overflow-y-scroll">
      <Navbar />
      <Routes>
        <Route path="/today" element={<Today />} />
        <Route path="/week" element={<Week />} />
        <Route path="*" element={<Navigate to={"/week"} replace />} />
      </Routes>
    </div>
  );
};

export default Mainpage;
