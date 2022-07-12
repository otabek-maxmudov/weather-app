import { Spin } from "antd";
import moment from "moment";
import { lazy, Suspense, useCallback, useEffect } from "react";
import { RiLoader2Fill } from "react-icons/ri";
import { connect } from "react-redux";
import { getCurrentAstronomy, getCurrentForecast, getWeekdaysForecast } from "./Redux/Actions/Actions";
import "./App.css";

const Mainpage = lazy(() => import("./components/MainPage"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));

const App = ({ currentMode, getCurrentAstronomy, getCurrentForecast, getWeekdaysForecast, cords }) => {
  const fetchData = useCallback(() => {
    getCurrentForecast("current.json", { q: `${cords[0]},${cords[1]}` });
    getCurrentAstronomy("astronomy.json", { q: `${cords[0]},${cords[1]}`, dt: moment().format("YYYY-MM-DD") });
    getWeekdaysForecast("forecast/daily", { lat: cords[0], lon: cords[1] });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const renderLoader = () => (
    <div className="w-full h-screen flex justify-center items-center">
      <Spin indicator={<RiLoader2Fill className="animate-spin" />} spinning tip="Loading..." />
    </div>
  );

  return (
    <div className={`flex w-full h-screen md:h-full sm:h-full ${currentMode}`}>
      <Sidebar />
      <Suspense fallback={renderLoader()}>
        <Mainpage />
      </Suspense>
    </div>
  );
};

export default connect(({ app }) => ({ ...app }), {
  getCurrentAstronomy,
  getCurrentForecast,
  getWeekdaysForecast,
})(App);
