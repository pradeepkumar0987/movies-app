import {
  Dispatch,
  Middleware,
  applyMiddleware,
  configureStore,
} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';
import {persistStore} from 'redux-persist';
import createSagaMiddleware, {SagaMiddleware} from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

// Type definition for middleware with unknown action type
type UnknownAction = {type: unknown};

const loggerMiddleware: Middleware<
  {},
  any,
  Dispatch<UnknownAction>
> = createLogger({
  collapsed: true,
  duration: false,
  timestamp: false,
  stateTransformer: (state: any) => state,
  actionTransformer: (action: any) =>
    action && action.payload ? {...action, payload: action.payload} : action,
  predicate: (getState, action) => {
    // Specify the action types you want to exclude from logging
    const excludedActionTypes = ['START_LOADER', 'STOP_LOADER'];

    // Return false if the action type is in the exclusion list
    return !excludedActionTypes.includes(action.type);
  },
});

const sagaMiddleware: SagaMiddleware<{}> = createSagaMiddleware();

const middlewareEnhancer = applyMiddleware(sagaMiddleware, loggerMiddleware);

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware, loggerMiddleware),
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export {persistor, store};
