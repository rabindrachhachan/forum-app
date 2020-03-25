import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';

const loggerMiddleware = createLogger({
    predicate: (getState, action) => __DEV__,
});
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
    const enhancer = compose(applyMiddleware(loggerMiddleware, sagaMiddleware));
    const store = createStore(reducer, initialState, enhancer);
    sagaMiddleware.run(rootSaga);
    return {
        store,
    };
}

