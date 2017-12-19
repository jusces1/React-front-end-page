
import { fromJS } from 'immutable';
import addNewRowPageReducer from '../reducer';

describe('addNewRowPageReducer', () => {
  it('returns the initial state', () => {
    expect(addNewRowPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
