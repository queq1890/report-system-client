import { setLocale } from 'containers/AppContainer/actions';

describe('actions', () => {
  it('returns correct type & payload', () => {
    const payload = { locale: 'en' };
    const action = setLocale(payload);

    expect(action).toEqual({
      type: 'SET_LOCALE',
      payload,
    });
  });
});
