import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import reducer from './reducer';
import middleware from './middleware';

export default () => createStore(reducer, composeWithDevTools(middleware));
