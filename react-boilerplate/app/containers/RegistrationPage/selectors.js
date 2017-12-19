import { createSelector } from 'reselect';

/**
 * Direct selector to the registration state domain
 */
const selectRegistrationDomain = (state) => state.get('registration');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Registration
 */

const makeSelectRegistration = () => createSelector(
  selectRegistrationDomain,
  (substate) => substate.toJS()
);

export default makeSelectRegistration;
export {
  selectRegistrationDomain,
};
