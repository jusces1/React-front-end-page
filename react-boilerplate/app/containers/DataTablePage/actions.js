/*
 *
 * DataTable actions
 *
 */

import {
  ADD_ROW_ACTION,
  REQUEST_DATA,
  RESPONSE_SUCCESS,
  UPDATE_ROW_ACTION,
} from './constants';

export function addRowAction(data) {
  return {
    type: ADD_ROW_ACTION,
    data: data
  };
}
export function updateRowAction(row) {
  return {
    type: UPDATE_ROW_ACTION,
    row: row
  };
}
export function requestData() {
  return {
    type: REQUEST_DATA,
  };
}
export function responseSuccess(data, headers) {
  return {
    type: RESPONSE_SUCCESS,
    data: data,
    headers: headers
  };
}