import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  ADD_FORM_PATH,
  HOME_PATH,
  DETAIL_PATH,
} from 'common/constants/routers';
import Page404 from 'components/Page404/Page404';
import AddForm from 'pages/addForm/AddForm';
import Detail from 'pages/detail/Detail';
import Home from 'pages/home/Home';

export default function AppRoutes(props) {
  return (
    <Routes>
      {/* add your route here!! */}
      <Route
        exact
        path={ADD_FORM_PATH}
        element={<AddForm props={props} />}
      ></Route>
      <Route exact path={HOME_PATH} element={<Home props={props} />}></Route>
      <Route
        exact
        path={DETAIL_PATH}
        element={<Detail props={props} />}
      ></Route>
      <Route path={'/*'} element={<Page404 />}></Route>
    </Routes>
  );
}
