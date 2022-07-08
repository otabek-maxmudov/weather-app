import moment from "moment";
import { connect } from "react-redux";
import { getWeekdaysForecast } from "../../Redux/Actions/Actions";
import { icons } from "../../functions/Icons";

const Weekdays = ({ weekdaysForecast, degree_C }) => {
  return (
    <div className="grid grid-cols-7 mt-4 font-semibold gap-x-24 lg:gap-x-2 overflow-scroll xl:overflow-visible">
      {weekdaysForecast.length > 0 &&
        weekdaysForecast.map((item, index) => (
          <div
            className="flex justify-between flex-col w-20 lg:w-24 md:w-20 h-28 lg:h-32 md:h-28 rounded-2xl bg-white dark:bg-gray-700 dark:text-gray-200 text-center py-2 transition-colors text-xs md:text-sm "
            key={index}>
            <p className="m-0">{moment.unix(item.dt).format("ddd")}</p>
            <img
              src={icons?.find(i => i.second_name === item.weather[0].main).url}
              alt="weather_condition"
              className="w-12 mx-auto"
            />
            <div>
              <span>
                {degree_C ? item.temp.min.toFixed() : ((item.temp.min.toFixed() * 9) / 5 + 32).toFixed()} &#176;{" "}
              </span>
              <span className="text-gray-300 dark:text-gray-500 transition-colors ml-2">
                {degree_C ? item.temp.max.toFixed() : ((item.temp.max.toFixed() * 9) / 5 + 32).toFixed()}&#176;
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default connect(({ app }) => ({ ...app }), { getWeekdaysForecast })(Weekdays);
