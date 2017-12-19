/*
 *
 * DataTable reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_ROW_ACTION,
  REQUEST_DATA,
  RESPONSE_SUCCESS,
  UPDATE_ROW_ACTION 
} from './constants';


const initialState = fromJS({
  data: null,
  headers: null,
  actions: "",
  row: null
});

function dataTableReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ROW_ACTION:
      return state.set("data", action.data);
    case REQUEST_DATA:
      return state.set("data", null) 
    case RESPONSE_SUCCESS:
      return state.set("data", action.data).set("headers", action.headers)
    case UPDATE_ROW_ACTION:
      return state.set("row", action.row)                       
    default:
      return state;
  }
}

export default dataTableReducer;
