import { createSelector } from 'reselect';
import {selectDataTableDomain} from '../DataTablePage/selectors'
/**
 * Direct selector to the addNewRowPage state domain
 */
const selectAddNewRowPageDomain = (state) => state.get('addNewRowPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddNewRowPage
 */

const makeSelectAddNewRowPage = () => createSelector(
  selectAddNewRowPageDomain,
  selectDataTableDomain,
  (substate, tableDataState) => tableDataState ? Object.assign(tableDataState.toJS() ,substate.toJS()) : null
);



export default makeSelectAddNewRowPage;
export {
  selectAddNewRowPageDomain,
};
