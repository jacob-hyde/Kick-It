import {
  INITIAL_VIEW,
  INITIAL_SWITCH
} from './Types';

export const setInitialView = (name) => {
  return {
      type: INITIAL_VIEW,
      payload: name
    };
};

export const setInitialSwitch = (inital_switch) => {
  return {
    type: INITIAL_SWITCH,
    payload: inital_switch
  };
};
