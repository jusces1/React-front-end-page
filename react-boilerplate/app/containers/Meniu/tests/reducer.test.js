
import { fromJS } from 'immutable';
import meniuReducer from '../reducer';

describe('meniuReducer', () => {
  it('returns the initial state', () => {
    expect(meniuReducer(undefined, {})).toEqual(fromJS({}));
  });
});
