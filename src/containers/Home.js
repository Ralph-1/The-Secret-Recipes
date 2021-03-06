import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getCategories from '../actions/fetchCategories';
import Category from '../components/Categories';
import Loading from '../components/loading';
import {
  getProductsError,
  getProductsPending,
  getCategoriesList,
  categoryName,
  categoryDetails,
  categoryImage,
} from '../config/index';

const AllCategories = (props) => {
  const { getCategories, categories, pending } = props;
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const shouldComponentRender = () => {
    if (pending === true || categories.length === 0) return false;
    return true;
  };

  if (!shouldComponentRender()) {
    return (<Loading />);
  }

  return (
    <div>
      <div className="_header pt-2 my-2">
        <h1 className="h5"> EXPLORE THE WORLD&apos;S BEST RECIPES</h1>
        <p>Pick your scecret category</p>
      </div>
      <div className="container grid">
        {categories.map((item) => <Link key={item.idCategory} to={`/category/${item.strCategory}`}><Category name={categoryName(item)} description={categoryDetails(item)} src={categoryImage(item)} /></Link>)}
      </div>
    </div>
  );
};

AllCategories.propTypes = {
  pending: PropTypes.bool.isRequired,
  categories: PropTypes.instanceOf(Object).isRequired,
  getCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getCategories,
};

const mapStateToProps = (state) => {
  const { categories } = state;
  return (
    {
      error: getProductsError(categories),
      categories: getCategoriesList(categories),
      pending: getProductsPending(categories),
    }
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AllCategories);
