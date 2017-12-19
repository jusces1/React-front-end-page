import { createSelector } from 'reselect';

/**
 * Direct selector to the mainContent state domain
 */
const selectMainContentDomain = (state) => state.get('mainContent');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainContent
 */

const makeSelectMainContent = () => createSelector(
  selectMainContentDomain,
  (substate) => substate.toJS()
);

export default makeSelectMainContent;
export {
  selectMainContentDomain,
};
