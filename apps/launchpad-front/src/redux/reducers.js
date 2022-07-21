import { combineReducers } from 'redux';
import addFormReducers from '../pages/addForm/storage/addFormReducer';
import homeReducers from '../pages/home/storage/homeReducer';
import detailReducers from '../pages/detail/storage/detailReducer';

const rootReducers = combineReducers({
  addFormReducers: addFormReducers,
  homeReducers: homeReducers,
  detailReducers: detailReducers, 
});

export default rootReducers;
