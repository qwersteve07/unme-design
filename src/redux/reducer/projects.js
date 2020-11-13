// import { initialState } from "redux/reducer";
import { createReducer } from "redux/reducer-helper";

export const SET_FILTER = "SET_FILTER";
export const SET_SUB_FILTER = "SET_SUB_FILTER";

const initialState = {
  // projects
  filters: [
    {
      id: "all",
      name: "All Project 全部",
    },
    {
      id: "brand Domain",
      name: "Brand Domain Design 品牌空間設計",
    },
    {
      id: "interior",
      name: "Interior Deisgn 空間設計",
    },
    {
      id: "cis",
      name: "CIS Design 品牌設計",
    },
  ],
  subFilters: [
    {
      id: "all",
      name: "全部",
    },
    {
      id: "commercial",
      name: "商空設計",
    },
    {
      id: "showcase",
      name: "專櫃設計",
    },
    {
      id: "restaurant",
      name: "餐廳設計",
    },
    {
      id: "office",
      name: "辦公室設計",
    },
  ],
  currentFilter: "brand Domain",
  currentSubFilter: "all",
};

const setFilter = (state, payload) => {
  return { ...state, currentFilter: payload };
};

const setSubFilter = (state, payload) => ({
  ...state,
  currentSubFilter: payload,
});

const projectsReducer = createReducer(
  {
    [SET_FILTER]: setFilter,
    [SET_SUB_FILTER]: setSubFilter,
  },
  initialState
);

export default projectsReducer;
