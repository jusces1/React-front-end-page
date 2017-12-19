/*
 *
 * LoginForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN_CLICK,
} from './constants';

const initialState = fromJS({
  user: ""
});

function loginFormReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_CLICK:
      return state.set("user", { name: action.user.name, password: action.user.password})
    default:
      return state;
  }
}

export default loginFormReducer;
