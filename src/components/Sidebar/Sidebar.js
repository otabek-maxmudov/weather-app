import { lazy } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { icons } from "../../functions/Icons";
import { getCurrentAstronomy, getCurrentForecast } from "../../Redux/Actions/Actions";

const SearchInput = lazy(() => import("./SearchInput"));

const Sidebar = ({ currentForecast, currentLocation, degree_C }) => {
  const { temp_c, temp_f, last_updated, condition, feelslike_c, feelslike_f } = currentForecast;

  return (
    <div className="flex flex-wrap justify-center relative w-1/3 md:w-1/4 md:h-screen sm:h-screen sm:w-1/4 p-3 dark:bg-gray-700 dark:text-gray-200 transition-colors">
      <SearchInput />
      <img
        src={condition && icons.find(icon => icon.name === condition?.text)?.url}
        className="w-42 md:w-56 sm:w-full"
        alt="weather icon"
      />
      <div className="w-48 md:w-60 sm:w-full">
        <div>
          {degree_C ? (
            <p className="text-4xl md:text-6xl relative mb-6">
              {temp_c?.toFixed()} &#176; <sup className="absolute top-1 text-3xl md:text-4xl">C</sup>
            </p>
          ) : (
            <p className="text-4xl md:text-6xl relative mb-6 ">
              {temp_f?.toFixed()} &#176; <sup className="absolute top-1 text-3xl md:text-4xl">F</sup>
            </p>
          )}
          <p className="text-base md:text-lg">
            {moment().format("dddd")},{" "}
            <span className="text-gray-400">{last_updated && moment(last_updated).format("H:MM")}</span>
          </p>
        </div>
        <div className="border-t pt-4 text-xs md:text-sm">
          <div className="flex justify-between">
            <p className="font-semibold">Condition: </p>
            <p className="p-0 m-0">{condition && condition.text}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Feels like: </p>
            {degree_C ? (
              <p className="p-0 m-0">{feelslike_c?.toFixed()} &#176;C</p>
            ) : (
              <p className="p-0 m-0">{feelslike_f?.toFixed()} &#176;F</p>
            )}
          </div>
        </div>
      </div>
      <div className="w-56 md:w-60 h-20 md:h-24 text-xs md:text-sm rounded-2xl flex justify-center items-center">
        <p className="text-center">
          {currentLocation.name}, {currentLocation.region}, <br />
          {currentLocation.country}
        </p>
      </div>
    </div>
  );
};

export default connect(({ app }) => ({ ...app }), {
  getCurrentForecast,
  getCurrentAstronomy,
})(Sidebar);
