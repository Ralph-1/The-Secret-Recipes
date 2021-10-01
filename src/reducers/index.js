import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CategoriesReducer from './Cartegories';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
