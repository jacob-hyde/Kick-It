import {
  CURRENT_FORM
} from './../Actions/Types';

const INITIAL_STATE = {
  current_form: ''
};

export default function (state = INITIAL_STATE, action){
	switch(action.type){
		case CURRENT_FORM:
			return {...state, current_form: action.payload};
		default:
			return state;
	}
}
