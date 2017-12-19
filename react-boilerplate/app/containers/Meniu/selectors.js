import { createSelector } from 'reselect';

/**
 * Direct selector to the meniu state domain
 */
const selectMeniuDomain = (state) => state.get('meniu');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Meniu
 */

const makeSelectMeniu = () => createSelector(
  selectMeniuDomain,
  (substate) => substate.toJS()
);

export default makeSelectMeniu;
export {
  selectMeniuDomain,
};
