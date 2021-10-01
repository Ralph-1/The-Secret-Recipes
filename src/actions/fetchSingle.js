import axios from 'axios';
import {
  fetchProductsError,
  fetchProductsePending,
  fetchSingleMeal,
} from './index';

const fetchMeal = id => {
  return dispatch => {
    dispatch(fetchProductsePending);
    axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw(res.error)
        };
        fetchSingleMeal(res.meals[0]);
      })
      .catch(error => {
        dispatch(fetchProductsError);
      });
  };
};

export default fetchMeal;
