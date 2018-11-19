import {
  CURRENT_FORM
} from './Types';

export const setCurrentForm = (name) => {
  return {
      type: CURRENT_FORM,
      payload: name
    };
};
