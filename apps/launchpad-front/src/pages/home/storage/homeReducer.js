import * as t from "./homeTypes";

const initialState = {
  //   provider: null,
  projects: [],
};

const HomeReducers = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_PROJECTS_LIST:
      return {
        ...state,
        projects: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default HomeReducers;
