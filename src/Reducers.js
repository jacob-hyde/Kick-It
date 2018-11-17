import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import SetupReducer from './Reducers/SetupReducer';
import InitialViewReducer from './Reducers/InitialViewReducer';

export default combineReducers({
  form: formReducer,
  setup: SetupReducer,
  view: InitialViewReducer
});
