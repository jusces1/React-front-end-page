/*
 *
 * Registration reducer
 *
 */

import { fromJS } from 'immutable';
import {
  BUTTON_CLICK_ACTION,
} from './constants';

const initialState = fromJS({
  obj: {
    name: "",
    password: "",
    age: "",
    img: "",
    hidden: true
  }
});

function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case BUTTON_CLICK_ACTION: 
      let newObj = { name: action.obj.name, password: action.obj.password, age: action.obj.age, img: action.obj.img, hidden: action.obj.hidden };
      return state.set("obj",newObj);
    default:
      return state;
  }
}

export default registrationReducer;
