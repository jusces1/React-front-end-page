/*
 *
 * Meniu reducer
 *
 */

import { fromJS } from 'immutable';
import {
  OPEN_CLOSE_MENU_ACTION,
} from './constants';

const initialState = fromJS({
  open: false
});

function meniuReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_CLOSE_MENU_ACTION:
      return state.set("open", action.open);
    default:
      return state;
  }
}

export default meniuReducer;
