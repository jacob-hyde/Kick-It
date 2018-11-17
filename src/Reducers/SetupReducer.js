import {
  ACCEPTED_TERMS
} from './../Actions/Types';

const INITIAL_STATE = {
  accepted_terms: false
};

export default function(state = INITIAL_STATE, action){
	switch(action.type){
		case ACCEPTED_TERMS:
			return {...state, accepted_terms: action.payload};
		default:
			return state;
	}
}
