import { connect } from "react-redux";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { lazy, useEffect } from "react";
import { ImCompass } from "react-icons/im";
import sunriseIcon from "../../icons/sunrise.png";
import sunsetIcon from "../../icons/sunset.png";

const TodaysReport = lazy(() => import("../TodayHighlightsComp"));

const TodaysHighlights = ({ currentMode, currentForecast, astro_data }) => {
  const { uv, wind_kph, wind_dir, wind_degree, humidity, vis_km, air_quality } = currentForecast;
  const { sunrise, sunset } = astro_data;

  useEffect(() => {
    document.getElementById("compass").style.transform = `rotate(${wind_degree}deg)`;
  }, [wind_degree]);

  return (
    <div className="mt-4">
      <h1 className="lg:text-xl sm:text-lg font-bold dark:text-gray-200 transition-colors">Today's Highlight</h1>

      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <TodaysReport title={"UV Index"}>
          <div className={"lg:w-36 sm:w-20 mx-auto lg:mt-5 sm:mt-10"}>
            <CircularProgressbar
              className="dark:text-gray-200 transition-colors"
              text={uv}
              value={uv}
              minValue={0}
              maxValue={15}
              circleRatio={0.5}
              strokeWidth={6}
              styles={buildStyles({
                strokeLinecap: "round",
                rotation: 0.75,
                pathColor: "#ffb703",
                trailColor: "#F4F4F5",
                textColor: `${currentMode === "dark" ? "#e5e7eb" : "#000"}`,
              })}
            />
          </div>
        </TodaysReport>
        <TodaysReport
          title={"Wind Status"}
          numbers={wind_kph}
          measure={"km/h"}
          wind_dir={wind_dir}
          icon={<ImCompass className="lg:w-5 lg:h-5 sm:w-8 sm:h-8 text-blue-600" id="compass" />}
        />
        <TodaysReport title={"Sunrise & Sunset"}>
          <div className="sm:block lg:text-base sm:text-xs">
            <div className="flex justify-between items-center">
              <img src={sunriseIcon} alt="sunrise" className="lg:w-12 sm:w-10" />
              <h1 className="font-semibold mt-2 dark:text-gray-200 transition-colors">{sunrise}</h1>
            </div>
            <div className="flex justify-between items-center">
              <img src={sunsetIcon} alt="sunset" className="lg:w-12 sm:w-10" />
              <h1 className="font-semibold mt-2 dark:text-gray-200 transition-colors">{sunset}</h1>
            </div>
          </div>
        </TodaysReport>
        <TodaysReport title={"Humidity"} numbers={humidity} measure={"%"} progressIndicator />
        <TodaysReport title={"Visibility"} numbers={vis_km} measure={"km"} />
        <TodaysReport title={"Air Quality"} numbers={air_quality?.o3.toFixed()} progressIndicator />
      </div>
    </div>
  );
};

export default connect(({ app }) => ({ ...app }))(TodaysHighlights);
