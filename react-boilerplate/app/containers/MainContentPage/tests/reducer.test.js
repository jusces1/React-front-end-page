
import { fromJS } from 'immutable';
import mainContentReducer from '../reducer';

describe('mainContentReducer', () => {
  it('returns the initial state', () => {
    expect(mainContentReducer(undefined, {})).toEqual(fromJS({}));
  });
});
