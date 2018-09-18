import formReducer, { initialState } from 'containers/FormContainer/reducer';
import { ADD_ARTICLE } from 'containers/FormContainer/constants';

describe('formReducer', () => {
  it('should return the initial state', () => {
    expect(formReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_ARTICLE', () => {
    const action = { type: ADD_ARTICLE, payload: { title: 'hoge', id: '1' } };
    const expectedState = {
      articles: [
        {
          title: 'hoge',
          id: '1',
        },
      ],
    };

    expect(formReducer(undefined, action)).toEqual(expectedState);
  });
});
