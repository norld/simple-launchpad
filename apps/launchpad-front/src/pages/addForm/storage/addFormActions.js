import * as t from "./addFormTypes";
import { GET } from "../../../utils/network/baseRequest.utils";
import api from "../../../utils/network/baseUrl.utils";
// import axios from "axios";
// import {
//   Header,
//   HeaderAuth,
//   HeaderCmc,
//   HeaderFile,
//   HeaderFile2,
// } from "../../../utils/network/headers.utils";

// kode2 ini digunain buat action untuk dispatch / get reducer untuk namespace addForm
// seharusnya digunakan setiap ada flow validasi form, contoh :
// input name[UI] -> error[reducers] -> display error true[actions]
export const getData = (isLoading = false, data = {}) => {
  return {
    type: t.GET_DATA,
    data,
  };
};

export const getChainsList = (isLoading = false, data = {}) => {
  return async (dispatch) => {
    const chainsList = await GET(
      api.BASE_URL + api.ENDPOINT.chain
    );
    await dispatch({
      type: t.GET_CHAINS_LIST,
      data: chainsList.data.data,
    });
  };
};
