import { applyMiddleware, compose, createStore } from 'redux';
import { start, Middleware } from './middleware/socketMiddleware';
import buttonReducer from './reducer/button-reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(buttonReducer, composeEnhancers(applyMiddleware(Middleware)));

start(store);

window.__store__ = store;

export default store;
