import localeReducer, { initialState } from 'containers/AppContainer/reducer';
import { SET_LOCALE } from 'containers/AppContainer/constants';

describe('localeReducer', () => {
  it('should return the initial state', () => {
    expect(localeReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_LOCALE', () => {
    const action = { type: SET_LOCALE, payload: 'ja' };
    const expectedState = { locale: 'ja' };

    expect(localeReducer(undefined, action)).toEqual(expectedState);
  });
});
