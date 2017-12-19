
import { fromJS } from 'immutable';
import registrationReducer from '../reducer';

describe('registrationReducer', () => {
  it('returns the initial state', () => {
    expect(registrationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
