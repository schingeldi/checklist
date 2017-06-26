import { combineReducers } from 'redux';
import * as entriesReducer from './entries'


export default combineReducers(Object.assign(
    entriesReducer,
));
