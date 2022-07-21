import * as t from "./detailTypes";

const initialState = {
  theProject: [],
};

const DetailReducers = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_THE_PROJECT:
      return {
        ...state,
        theProject: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default DetailReducers;
