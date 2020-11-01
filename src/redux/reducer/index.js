import { combineReducers } from "redux";
import projectsReducer from "redux/reducer/projects";
import appReducer from "redux/reducer/app";

const reducer = combineReducers({
  appReducer,
  projectsReducer,
});

export default reducer;
