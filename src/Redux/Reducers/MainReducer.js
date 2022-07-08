import {
  SET_CURRENT_MODE,
  SET_CURRENT_FORECAST,
  SET_LOCATION,
  SET_SEARCH_RESULT,
  SET_ASTRO_DATA,
  SET_WEEKDAYS_FORECAST,
  SET_DEGREE,
  SET_CORDINATES,
  SET_LOADING,
} from "../Actions/Types";

/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  currentMode: "light",
  currentForecast: {},
  currentLocation: {},
  searchResult: [],
  astro_data: {},
  weekdaysForecast: [],
  degree_C: true,
  cords: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_MODE:
      return {
        ...state,
        currentMode: action.payload,
      };
    case SET_CURRENT_FORECAST:
      return {
        ...state,
        currentForecast: action.payload,
      };
    case SET_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
      };
    case SET_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload.map(item => ({ name: item.name, value: item.name })),
      };
    case SET_ASTRO_DATA:
      return {
        ...state,
        astro_data: action.payload ? { ...action.payload } : {},
      };
    case SET_WEEKDAYS_FORECAST:
      return {
        ...state,
        weekdaysForecast: action.payload,
      };
    case SET_DEGREE:
      return {
        ...state,
        degree_C: action.payload,
      };
    case SET_CORDINATES:
      return {
        ...state,
        cords: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
