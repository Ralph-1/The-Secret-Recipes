import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CategoriesReducer from './Categories';
import SingleRecipeReducer from './SingleRecipe';
import RecipesReducer from './Recipes';

const rootReducer = combineReducers({
  categories: CategoriesReducer,
  singleMeal: SingleRecipeReducer,
  allMeals: RecipesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
