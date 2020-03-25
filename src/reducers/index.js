import { combineReducers } from 'redux';
import postReducer from './postReducer';
const AppReducers = combineReducers({
    PostReducer: postReducer
});

export default AppReducers;
