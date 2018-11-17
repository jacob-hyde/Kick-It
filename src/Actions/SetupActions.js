import {
  ACCEPTED_TERMS
} from './Types';

export const didAcceptTerms = () => {
  return {
      type: ACCEPTED_TERMS,
      payload: true
    };
};
