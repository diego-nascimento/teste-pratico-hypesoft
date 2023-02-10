
import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './ducks/rootSagas'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: false
  }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)
