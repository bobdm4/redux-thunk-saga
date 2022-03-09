import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cashReducer } from './cashReducer'
import { customerReducer } from './customerReducer'
import { counterReducer } from './conterReducer'
import createSagaMiddleware from 'redux-saga'
import { usersReducer } from './usersReduser'
import { rootWatcher } from '../saga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  cash: cashReducer,
  customers: customerReducer,

  counter: counterReducer,
  users: usersReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)))

sagaMiddleware.run(rootWatcher)
