import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './reducers';
import rootSaga from './saga';

const middlewareComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  middlewareComposer(applyMiddleware(...middlewares, sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
// const action = type => store.dispatch({ type });

export default store;