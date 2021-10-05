import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import MealPreview from '../components/Recipe';
import fetchAllMeals from '../actions/fetchAll';
import fetchMeal from '../actions/fetchSingle';
import {
  getProductsError,
  getProducts,
  getProductsPending
} from '../config/index';
import { UPDATE_CATEGORY } from '../actions/index';
import Loading from '../components/loading';
import { PropTypes } from 'react-bootstrap/esm/Image';

const MealsList = ({
  products, pending, fetchAllMeals,category
}) => {
  useEffect(() => {
    fetchAllMeals(category);
  }, [category, fetchAllMeals]);

  const shouldComponenRender = () => {
    if (category === undefined || pending === true) return false;
    return true;
  };

  if (!shouldComponenRender()) { <Loading /> }
  return (
    <div>
      <div className="container">
        {products.map(item => (
          <Link to={`/meal/${item.idMeal}`} key={Math.floor(Math.random * 1000)}>
            <MealPreview
              src={item.strMealThumb}
              name={item.strMeal}
              id={item.idMeal}
            />
          </Link>
        ))}
      </div>
    </div>
  )
};


MealsList.defaultProps = {
  products: [''],
};

MealsList.propTypes = {
  pending: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  fetchAllMeals: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(string),
};

const MapStateToProps = state => {
  const { allMeals } = state;
  return (
    {
      error: getProductsError(allMeals),
      products: getProducts(allMeals),
      pending: getProductsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchAllMeals,
  addFilter: UPDATE_CATEGORY,
  fetchMeal,
};

export default connect(
  MapStateToProps,
  mapDispatchToProps
)(MealsList);
