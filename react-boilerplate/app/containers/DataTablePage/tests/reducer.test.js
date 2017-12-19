
import { fromJS } from 'immutable';
import dataTableReducer from '../reducer';

describe('dataTableReducer', () => {
  it('returns the initial state', () => {
    expect(dataTableReducer(undefined, {})).toEqual(fromJS({}));
  });
});
