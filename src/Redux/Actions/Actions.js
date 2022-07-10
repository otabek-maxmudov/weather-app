import api from "../../functions/api";
import {
  SET_CURRENT_MODE,
  SET_CURRENT_FORECAST,
  SET_LOCATION,
  SET_SEARCH_RESULT,
  SET_ASTRO_DATA,
  SET_WEEKDAYS_FORECAST,
  SET_DEGREE,
  SET_CORDINATES,
} from "./Types";

export const getCurrentForecast = (url, params) => async dispatch => {
  const res = await api(url, "GET", params, "wa");

  if (res && res.status === 200) {
    dispatch({
      type: SET_CURRENT_FORECAST,
      payload: res.data.current,
    });
    dispatch({
      type: SET_LOCATION,
      payload: res.data.location,
    });
    dispatch({
      type: SET_ASTRO_DATA,
      payload: res.data.astronomy?.astro,
    });
  }
};

export const getCurrentAstronomy = (url, params) => async dispatch => {
  const res = await api(url, "GET", params, "wa");

  if (res && res.status === 200) {
    dispatch({
      type: SET_ASTRO_DATA,
      payload: res.data.astronomy.astro,
    });
  }
};

export const setCurrentMode = data => dispatch => {
  dispatch({
    type: SET_CURRENT_MODE,
    payload: data,
  });
};

export const setDegreeMode = data => dispatch => {
  dispatch({
    type: SET_DEGREE,
    payload: data,
  });
};

export const setCordinates = data => dispatch => {
  dispatch({
    type: SET_CORDINATES,
    payload: data,
  });
};

export const getSearchResult = (url, params) => async dispatch => {
  const res = await api(url, "GET", params, "wa");

  if (res && res.status === 200) {
    dispatch({
      type: SET_SEARCH_RESULT,
      payload: res.data,
    });
  }
};

export const getWeekdaysForecast = (url, params) => async dispatch => {
  const res = await api(url, "GET", params, "owm");

  if (res && res.status === 200) {
    dispatch({
      type: SET_WEEKDAYS_FORECAST,
      payload: res.data.list,
    });
  }
};
