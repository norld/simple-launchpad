import * as t from './addFormTypes';

const initialState = {
  provider: null,
  chains: []
};

const addFormReducers = (state = initialState, action) => {
  switch (action.type) {
    case t.GET_CHAINS_LIST:
      return {
        ...state,
        chains: action.data,
      };
    default:
      return {
        ...state,
      };
  }
};

export default addFormReducers;
