import { AiOutlineClear } from "react-icons/ai";
import { AutoComplete } from "antd";
import moment from "moment";
import { connect } from "react-redux";
import {
  getCurrentAstronomy,
  getCurrentForecast,
  getSearchResult,
  getWeekdaysForecast,
} from "../../Redux/Actions/Actions";
import { memo } from "react";

const SearchInput = ({
  getCurrentForecast,
  getSearchResult,
  searchResult,
  getCurrentAstronomy,
  getWeekdaysForecast,
}) => {
  const onSearch = searchText => getSearchResult("search.json", { q: searchText });

  const onSelect = data => {
    getCurrentForecast("current.json", { q: data });
    getCurrentAstronomy("astronomy.json", {
      q: data,
      dt: moment().format("YYYY-MM-DD"),
    });
    getWeekdaysForecast("forecast/daily", { q: data });
  };

  return (
    <AutoComplete
      options={searchResult}
      onSelect={onSelect}
      onSearch={onSearch}
      notFoundContent={"No Data"}
      allowClear
      bordered={false}
      placeholder="Search for places ..."
      className="h-6 md:h-8 sm:h-10 w-full dark:text-gray-200 bg-gray transition-colors rounded-lg"
      clearIcon={<AiOutlineClear />}
    />
  );
};

export default connect(({ app }) => ({ ...app }), {
  getCurrentForecast,
  getSearchResult,
  getCurrentAstronomy,
  getWeekdaysForecast,
})(memo(SearchInput));
