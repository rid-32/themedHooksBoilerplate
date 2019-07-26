import { fetchData } from 'ducks/fetch'

import * as api from 'api/application'
import * as CONST from './const'
import * as selectors from './selectors'

export const fetchMyData = () => dispatch => {
  const config = {
    name: CONST.DATA,
    apiMethod: api.fetchData,
    selector: selectors.getData,
  }

  dispatch(fetchData(config))
}
