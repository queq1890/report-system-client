import { addArticle } from 'containers/FormContainer/actions';

describe('actions', () => {
  it('returns correct type & payload', () => {
    const payload = { article: 'en' };
    const action = addArticle(payload);

    expect(action).toEqual({
      type: 'ADD_ARTICLE',
      payload,
    });
  });
});
