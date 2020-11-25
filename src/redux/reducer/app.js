// import { initialState } from "redux/reducer";
import { createReducer } from "redux/reducer-helper";

export const SET_DARK_MODE = "SET_DARK_MODE";
export const SET_NAVIGATING = "SET_NAVIGATING";

const initialState = {
  darkMode: true,
  navigating: false,
};

const setDarkMode = (state, payload) => ({ ...state, darkMode: payload });
const setNavigating = (state, payload) => ({ ...state, navigating: payload });

const appReducer = createReducer(
  {
    [SET_DARK_MODE]: setDarkMode,
    [SET_NAVIGATING]: setNavigating,
  },
  initialState
);

export default appReducer;
