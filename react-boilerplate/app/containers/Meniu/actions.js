/*
 *
 * Meniu actions
 *
 */

import {
  OPEN_CLOSE_MENU_ACTION,
} from './constants';

export function openCloseAction(open) {
  return {
    type: OPEN_CLOSE_MENU_ACTION,
    open: open
  };
}
