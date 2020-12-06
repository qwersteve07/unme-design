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
  subFilters: [
    {
      id: "all",
      nameEn: "All",
      nameCn: "全部",
    },
    {
      id: "0d",
      nameEn: "0 Dimension",
      nameCn: "品牌理念定位",
    },
    {
      id: "1d",
      nameEn: "1st Dimension",
      nameCn: "環境定位分析",
    },
    {
      id: "2d",
      nameEn: "2nd Dimension",
      nameCn: "2維設計",
    },
    {
      id: "3d",
      nameEn: "3rd Dimension",
      nameCn: "3維設計",
    },
    {
      id: "4d",
      nameEn: "4th Dimension",
      nameCn: "維度設計",
    },
  ],
  currentFilter: "all",
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
