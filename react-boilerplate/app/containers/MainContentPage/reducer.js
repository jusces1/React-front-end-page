/*
 *
 * MainContent reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_TABLE_ACTION,
} from './constants';

const initialState = fromJS({
  data: ""
});

function mainContentReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TABLE_ACTION:
      return state.set("data", action.data);
    default:
      return state;
  }
}

export default mainContentReducer;
