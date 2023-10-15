import { createStore, combineReducers, applyMiddleware } from 'redux';
import { bankDataReducer } from './reducers/bankReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  bankData: bankDataReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;