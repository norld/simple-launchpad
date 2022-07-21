import * as t from './homeTypes';
import { GET } from '../../../utils/network/baseRequest.utils'
import api from '../../../utils/network/baseUrl.utils'
// import { HeaderAuth } from '../../../utils/network/headers.utils'

// kode2 ini digunain buat action untuk dispatch / get reducer untuk namespace addForm
// seharusnya digunakan setiap ada flow validasi form, contoh : 
// input name[UI] -> error[reducers] -> display error true[actions]
export const getProjectsList = (isLoading = false, data = {}) => {
  return async (dispatch) => {
    const tokenList = await GET(api.BASE_URL + api.ENDPOINT.tokenInfo + '?' + api.ENDPOINT.populate + 'TokenLogo&' + api.ENDPOINT.populate + 'chain' + api.ENDPOINT.sortAsc)
    const launchpadList = await GET(api.BASE_URL + api.ENDPOINT.launchpad + '?' + api.ENDPOINT.populate + 'token&pagination[page]=1' + api.ENDPOINT.sortAsc)
    await dispatch({
      type: t.GET_PROJECTS_LIST,
      data: [launchpadList.data,tokenList.data],
    });
  }
}