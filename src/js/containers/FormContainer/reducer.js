import { ADD_ARTICLE } from './constants';

export const initialState = {
  articles: [],
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default formReducer;
