
import { combineReducers } from 'redux';
import palettes from './palettes/reducer';
import selected from './selected/reducer';

export default combineReducers({ palettes, selected });