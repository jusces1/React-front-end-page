/*
 *
 * Registration actions
 *
 */

import {
  BUTTON_CLICK_ACTION,
} from './constants';

export function buttonClickAction(name, password, age, img, hidden) {

  return {
    type: BUTTON_CLICK_ACTION,
    obj: {
      name: name,
      password: password,
      age: age,
      img: img,
      hidden: hidden
    }
  };
}
