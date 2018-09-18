import { SET_LOCALE } from './constants';

export const initialState = {
  locale: 'en',
};

const localeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCALE:
      return {
        ...state,
        locale: action.payload,
      };
    default:
      return state;
  }
};

export default localeReducer;
