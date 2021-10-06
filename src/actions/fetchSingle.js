import axios from 'axios';
import {
  fetchProductsError,
  fetchProductsPending,
  fetchSingleMeal,
} from './index';

const fetchMeal = (id) => (dispatch) => {
  dispatch(fetchProductsPending);
  axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=${id}`)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw (res.error);
      }
      fetchSingleMeal(res.meals[0]);
    })
    .catch((error) => {
      dispatch(fetchProductsError(error));
    });
};

export default fetchMeal;
