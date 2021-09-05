import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers';

export const history: any = createBrowserHistory();

export enum Actions {}

const initialState = {};

const composeEnhancers = composeWithDevTools({
  realtime: true,
  port: 1024,
});

export const store = createStore(
  rootReducer(history),
  initialState,
  composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);
