import { connect } from "react-redux";
import { WiHumidity } from "react-icons/wi";
import { SiRainmeter } from "react-icons/si";
import { GoTelescope } from "react-icons/go";
import { TbBuildingFactory } from "react-icons/tb";
import { MdOutlineVisibility } from "react-icons/md";
import { RiWindyFill, RiCloudyLine, RiDashboard2Line, RiCloudWindyLine } from "react-icons/ri";

const Today = ({ currentForecast, astro_data }) => {
  const {
    wind_mph,
    wind_kph,
    wind_dir,
    pressure_mb,
    pressure_in,
    precip_mm,
    precip_in,
    humidity,
    cloud,
    gust_mph,
    gust_kph,
    vis_km,
    vis_miles,
    air_quality,
  } = currentForecast;

  const { sunrise, sunset, moonrise, moonset, moon_phase, moon_illumination } = astro_data;

  const TodayCard = ({ title, icon, children, extraClass }) => {
    return (
      <div className={`w-auto bg-white dark:bg-gray-700 text-gray-400 rounded-2xl p-4 ${extraClass}`}>
        <h1 className="flex font-semibold text-base sm:text-sm text-black dark:text-gray-100 mb-4">
          <span className="mr-3 text-xl sm:text-lg">{icon}</span>
          {title}
        </h1>
        <div className="flex gap-x-8 sm:text-xs md:text-sm">{children}</div>
      </div>
    );
  };

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4 sm:mb-14 md:h-auto sm:h-screen">
      <TodayCard title={"Wind"} icon={<RiWindyFill />} extraClass={"lg:col-span-2 md:col-span-2 sm:col-span-2"}>
        <p>{wind_mph} m/h</p>
        <p>{wind_kph} km/h</p>
        <p>Direction: {wind_dir}</p>
      </TodayCard>
      <TodayCard
        title={"Pressure"}
        icon={<RiDashboard2Line />}
        extraClass={"lg:col-span-1 md:col-span-1 sm:col-span-1"}>
        <p>Millibars: {pressure_mb}</p>
        <p>Inches: {pressure_in}</p>
      </TodayCard>
      <TodayCard
        title={"Precipitation amount"}
        icon={<SiRainmeter />}
        extraClass={"lg:col-span-1 md:col-span-2 sm:col-span-1"}>
        <p>Millibars: {precip_mm}</p>
        <p>Inches: {precip_in}</p>
      </TodayCard>
      <TodayCard title={"Humidity"} icon={<WiHumidity />} extraClass={"lg:col-span-1 md:col-span-1 sm:col-span-1"}>
        <p>{humidity} %</p>
      </TodayCard>
      <TodayCard title={"Cloud"} icon={<RiCloudyLine />} extraClass={"lg:col-span-1 md:col-span-1 sm:col-span-1"}>
        <p>{cloud} %</p>
      </TodayCard>
      <TodayCard
        title={"Wind gust"}
        icon={<RiCloudWindyLine />}
        extraClass={"lg:col-span-1 md:col-span-1 sm:col-span-1"}>
        <p>{gust_mph} m/h</p>
        <p>{gust_kph} km/h</p>
      </TodayCard>
      <TodayCard
        title={"Visibility"}
        icon={<MdOutlineVisibility />}
        extraClass={"lg:col-span-1 md:col-span-1 sm:col-span-1"}>
        <p>{vis_km} km</p>
        <p>{vis_miles} mi</p>
      </TodayCard>
      <TodayCard title={"Astronomy"} icon={<GoTelescope />} extraClass={"lg:col-span-4 md:col-span-3 sm:col-span-2"}>
        <div className="flex flex-wrap gap-x-14 md:gap-x-10 sm:gap-x-0 text-justify">
          <div className="lg:basis-auto md:basis-1/4 sm:basis-1/3">
            <b>Sunrise</b>
            <p>{sunrise}</p>
          </div>
          <div className="lg:basis-auto md:basis-1/4 sm:basis-1/3">
            <b>Sunset</b>
            <p>{sunset}</p>
          </div>
          <div className="lg:basis-auto md:basis-1/4 sm:basis-1/3">
            <b>Moonrise</b>
            <p>{moonrise}</p>
          </div>
          <div className="lg:basis-auto md:basis-1/4 sm:basis-1/3">
            <b>Moonset</b>
            <p>{moonset}</p>
          </div>
          <div className="lg:basis-auto md:basis-1/4 sm:basis-1/3">
            <b>Moon phase</b>
            <p>{moon_phase}</p>
          </div>
          <div className="lg:basis-auto md:basis-1/4 sm:basis-1/3">
            <b>Moon illumination</b>
            <p>{moon_illumination}</p>
          </div>
        </div>
      </TodayCard>
      <TodayCard
        title={"Air quality"}
        icon={<TbBuildingFactory />}
        extraClass={"lg:col-span-4 md:col-span-3 sm:col-span-2"}>
        <div className="flex flex-wrap gap-x-20 md:gap-x-10 sm:gap-x-0 text-justify">
          <div className=" lg:basis-auto md:basis-1/4 sm:basis-1/3">
            <b>Carbon Monoxide</b>
            <p>{air_quality?.co.toFixed()}</p>
          </div>
          <div className=" lg:basis-auto md:basis-1/4 sm:basis-1/3">
            <b>Nitrogen Dioxide</b>
            <p>{air_quality?.no2.toFixed()}</p>
          </div>
          <div className=" lg:basis-auto md:basis-1/4 sm:basis-1/3">
            <b>Ozone</b>
            <p>{air_quality?.o3.toFixed()}</p>
          </div>
          <div className=" lg:basis-auto md:basis-1/4 sm:basis-1/3">
            <b>Sulfur Dioxide</b>
            <p>{air_quality?.so2.toFixed()}</p>
          </div>
          <div className=" lg:basis-auto md:basis-1/4 sm:basis-1/3">
            <b>PM10</b>
            <p>{air_quality?.pm10.toFixed()}</p>
          </div>
        </div>
      </TodayCard>
    </div>
  );
};

export default connect(({ app }) => ({ ...app }))(Today);
