import { Spin } from "antd";
import moment from "moment";
import { lazy, Suspense, useEffect } from "react";
import { RiLoader2Fill } from "react-icons/ri";
import { connect } from "react-redux";
import "./App.css";
import { getCurrentAstronomy, getCurrentForecast, getWeekdaysForecast, setCordinates } from "./Redux/Actions/Actions";

const Mainpage = lazy(() => import("./components/MainPage"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));

const App = ({ currentMode, getCurrentAstronomy, getCurrentForecast, getWeekdaysForecast, setCordinates, cords }) => {
  useEffect(() => {
    getCurrentForecast("current.json", { q: `${cords[0]},${cords[1]}` });
    getCurrentAstronomy("astronomy.json", { q: `${cords[0]},${cords[1]}`, dt: moment().format("YYYY-MM-DD") });
    getWeekdaysForecast("forecast/daily", { lat: cords[0], lon: cords[1] });
  }, [cords]);

  const renderLoader = () => (
    <div className="w-full h-screen flex justify-center items-center">
      <Spin indicator={<RiLoader2Fill className="animate-spin" />} spinning tip="Loading..." />
    </div>
  );

  return (
    <Suspense fallback={renderLoader()}>
      <div className={`flex w-full h-screen md:h-full sm:h-full ${currentMode}`}>
        <Sidebar />
        <Mainpage />
      </div>
    </Suspense>
  );
};

export default connect(({ app }) => ({ ...app }), {
  getCurrentAstronomy,
  getCurrentForecast,
  getWeekdaysForecast,
  setCordinates,
})(App);
