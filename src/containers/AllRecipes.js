import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from '../components/CategoriesFilter';
import fetchMeals from '../actions/fetchAll';
import { getProductsPending } from '../config/index';
import { UPDATE_CATEGORY } from '../actions/index';
import MealsList from './RecipeList';

const AllMeals = (props) => {
  const {
    addFilter, match, current, fetchMeals,
  } = props;

  const { category } = match.params;

  const handleFilterChange = (e) => {
    const newCategory = e.target.value;

    addFilter(newCategory);
    fetchMeals(newCategory);
  };

  return (
    <div>
      <div>
        <div>
          <CategoryFilter onChange={handleFilterChange} value={current} />
        </div>
      </div>
      <MealsList category={category} />
    </div>
  );
};

AllMeals.defaultProps = {
  category: 'beef',
};

AllMeals.propTypes = {
  category: PropTypes.string,
  addFilter: PropTypes.func.isRequired,
  fetchMeals: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
  match: PropTypes.shape().isRequired,
};

const mapStateToProps = (state) => {
  const { allMeals } = state;
  return (
    {
      pending: getProductsPending(allMeals),
      current: allMeals.category,
    }
  );
};

const mapDispatchToProps = {
  fetchMeals,
  addFilter: UPDATE_CATEGORY,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllMeals);
