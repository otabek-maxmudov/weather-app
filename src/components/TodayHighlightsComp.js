const TodayHighlightsComp = ({ title, children, numbers, measure, progressIndicator, icon, wind_dir }) => {
  return (
    <div
      className={`lg:h-40 sm:h-36 rounded-2xl bg-white dark:bg-gray-700 py-3 lg:px-5 sm:px-4 text-gray-400 transition-colors`}>
      <p className="lg:text-sm sm:text-xs">{title}</p>
      {progressIndicator ? (
        <div className="flex justify-between items-center">
          <h1 className="lg:text-5xl sm:text-3xl font-semibold lg:mt-10 sm:mt-14 dark:text-gray-100 transition-colors relative">
            {numbers} <span className="lg:text-2xl sm:text-xl font-normal absolute top-0">{measure}</span>
          </h1>
          <div className="w-7 h-20 border rounded-full rotate-180 py-1 ">
            <div
              style={{ width: "100%", height: `${numbers > 100 ? 100 : numbers}%` }}
              className={"relative pt-2 pb-2 flex justify-center"}>
              <span className="w-4 h-4 rounded-full bg-blue-600 absolute bottom-0"></span>
            </div>
          </div>
        </div>
      ) : children ? (
        children
      ) : (
        <div className="h-24 flex lg:flex-row sm:flex-col lg:items-end sm:items-center justify-between">
          <h1 className="lg:text-5xl sm:text-3xl m-0 font-semibold dark:text-gray-100 transition-colors">
            {numbers} <span className="lg:text-base sm:text-xs font-normal">{measure}</span>
          </h1>
          <span className="w-16 sm:w-20 flex justify-between">
            {icon}
            {wind_dir}
          </span>
        </div>
      )}
    </div>
  );
};

export default TodayHighlightsComp;
