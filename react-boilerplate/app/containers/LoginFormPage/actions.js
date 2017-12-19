/*
 *
 * LoginForm actions
 *
 */

import {
  LOGIN_CLICK,
} from './constants';

export function loginClickAction(name, password) {
  return {
    type: LOGIN_CLICK,
    user: {
      name:name,
      password: password
    }
  };
}
