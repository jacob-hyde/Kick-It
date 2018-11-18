import {
  INITIAL_VIEW,
  INITIAL_SWITCH
} from './../Actions/Types';

const INITIAL_STATE = {
  switch: 'Setup',
  view: 'WelcomeView'
};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case INITIAL_VIEW:
			return {...state, view: action.payload};
    case INITIAL_SWITCH:
      return {...state, switch: action.payload};
		default:
			return state;
	}
}
