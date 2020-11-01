// import { initialState } from "redux/reducer";
import { createReducer } from "redux/reducer-helper";

export const SET_DARK_MODE = "SET_DARK_MODE";

const initialState = {
  darkMode: true,
};

const setDarkMode = (state, payload) => {
  return { ...state, darkMode: payload };
};

const appReducer = createReducer(
  {
    [SET_DARK_MODE]: setDarkMode,
  },
  initialState
);

export default appReducer;
