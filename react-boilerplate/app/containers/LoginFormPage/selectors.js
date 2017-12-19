import { createSelector } from 'reselect';

/**
 * Direct selector to the loginForm state domain
 */
const selectLoginFormDomain = (state) => state.get('loginForm');



const makeSelectLoginForm = () => createSelector(
  selectLoginFormDomain,
  (substate) => substate ? substate.toJS() : null
);

export default makeSelectLoginForm;
export {
  selectLoginFormDomain,
};
