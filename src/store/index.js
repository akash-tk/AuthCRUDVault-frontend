import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;