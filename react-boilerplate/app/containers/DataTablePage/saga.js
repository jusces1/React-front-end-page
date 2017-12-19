import { call, put, takeLatest } from 'redux-saga/effects';
import { getTableData} from '../../API/server';
import { REQUEST_DATA} from './constants'
import { responseSuccess} from './actions';

function removeDuplicates(myArr, prop) {
  return myArr.filter((obj, pos, arr) => {
    return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
  });
}
function* fetchTableData(action) {
  try {
    const response = yield call(getTableData);
    if(response){
      const getHeaders = () => {
        let headers = [];
        response.forEach(dataItem => {
          let keys = Object.keys(dataItem);
          keys.forEach(key => {
              headers.push({ 'Header': key, 'accessor': key});
          });
        });
        let unique = removeDuplicates(headers, 'Header');
        return unique;
      }
      yield put(responseSuccess(response, getHeaders()));
    }
  } catch (e) {
      console.log(e);
  }
}
// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(REQUEST_DATA, fetchTableData);
}
