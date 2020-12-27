// import { initialState } from "redux/reducer";
import { createReducer } from "redux/reducer-helper";

export const SET_FILTER = "SET_FILTER";
export const SET_SUB_FILTER = "SET_SUB_FILTER";

const initialState = {
  // projects
  filters: [
    {
      id: "all",
      nameEn: "All Projects",
      nameCn: "全部",
    },
    {
      id: "cis",
      nameEn: "CIS Design",
      nameCn: "品牌設計",
    },
    {
      id: "interior",
      nameEn: "Interior Deisgn",
      nameCn: "室內設計",
    },
    {
      id: "literature",
      nameEn: "Product Literature Design",
      nameCn: "文宣設計",
    },
    {
      id: "space-branding",
      nameEn: "Space Branding Design",
      nameCn: "品牌空間設計",
    },
  ],
  currentFilter: "all",
};

const setFilter = (state, payload) => {
  return { ...state, currentFilter: payload };
};

const projectsReducer = createReducer(
  {
    [SET_FILTER]: setFilter,
  },
  initialState
);

export default projectsReducer;
