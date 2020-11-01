// import { initialState } from "redux/reducer";
import { createReducer } from "redux/reducer-helper";

export const SET_FILTER = "SET_FILTER";

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
      subs: [
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
    },
    {
      id: "cis",
      name: "CIS Design 品牌設計",
    },
  ],
  currentFilter: "all",
  currentSubFilter: "",
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

// const projectsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "":
//       return { ...state, count: state.count + 1 };
//     default:
//       return state;
//   }
// };

export default projectsReducer;
