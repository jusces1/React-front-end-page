/*
 *
 * MainContent actions
 *
 */

import {
  LOAD_TABLE_ACTION,
} from './constants';

export function loadTableAction(data) {
  return {
    type: LOAD_TABLE_ACTION,
    data: data
  };
}
