import * as t from './detailTypes';
import { GET } from '../../../utils/network/baseRequest.utils'
import api from '../../../utils/network/baseUrl.utils'
// import {
//   Header,
//   HeaderAuth,
//   HeaderCmc,
//   HeaderFile,
// } from '../../../utils/network/headers.utils';

// kode2 ini digunain buat action untuk dispatch / get reducer untuk namespace addForm
// seharusnya digunakan setiap ada flow validasi form, contoh : 
// input name[UI] -> error[reducers] -> display error true[actions]
export const getTheProject = (isLoading = false, data = {}) => {
  return async (dispatch) => {
    const theLaunchpad = await GET(api.BASE_URL + api.ENDPOINT.launchpad + `/${data.id}?` + api.ENDPOINT.populate + 'token')
    // console.log(theLaunchpad, "@13");
    const theToken = await GET(api.BASE_URL + api.ENDPOINT.tokenInfo + `/${theLaunchpad.data.data.attributes.token.data.id}?` + api.ENDPOINT.populate + 'chain&' + api.ENDPOINT.populate + 'TokenLogo')
    // console.log(theToken, "@14");
    await dispatch({
      type: t.GET_THE_PROJECT,
      data: [theLaunchpad.data, theToken.data],
    });
  }
}