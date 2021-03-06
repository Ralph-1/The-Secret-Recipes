import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fetchMeal from '../actions/fetchSingle';
import Loading from '../components/loading';
import Image from '../components/RecipeImage';
import RecipeDescription from '../components/Description';
import { resetSelected } from '../actions/index';
import {
  getImg, getArea, getIntructions, getIngredient, getName, categoryName, getProductsPending,
} from '../config/index';
import '../assets/styles/itemDetails.css';

const MealDetails = (props) => {
  const {
    img, area, ingredients, match, fetchMeal, name, category, pending, resetSelected,
  } = props;
  const { id } = match.params;
  useEffect(() => {
    fetchMeal(id);
  }, [fetchMeal, id]);

  const shouldComponentRender = () => {
    if (name === undefined || pending === true) return false;
    return true;
  };

  if (!shouldComponentRender()) {
    return (<Loading />);
  }

  return (
    <div className="itemDetails">
      <div className="flex itemContents">
        <Image className="itemImages" src={img} name={name} />
        <div className="w-50">
          <RecipeDescription category={category} area={area} ingredients={ingredients} />
          <div className="itemsBtn mt-5 w-50 mx-auto">
            <Link to={`/category/${category}`}>
              <button className="btn btn-outline-secondary btn-lg btn-block mb-2 btnLink" type="button" onClick={resetSelected}>Back</button>
            </Link>
            <Link to="/">
              <button className="btn btn-outline-dark btn-lg btn-block btnLink" type="button" onClick={resetSelected}>Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { singleMeal } = state;
  const { details } = singleMeal;
  return (
    {
      img: getImg(details),
      area: getArea(details),
      intructions: getIntructions(details),
      ingredients: getIngredient(details),
      name: getName(details),
      category: categoryName(details),
      pending: getProductsPending(details),
    }
  );
};

const mapDispatchToProps = {
  fetchMeal,
  resetSelected,
};

MealDetails.defaultProps = {
  img: '',
  pending: false,
  name: '',
  category: '',
  area: '',
  ingredients: [''],
};

MealDetails.propTypes = {
  img: PropTypes.string,
  area: PropTypes.string,
  pending: PropTypes.bool,
  fetchMeal: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(String),
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  name: PropTypes.string,
  category: PropTypes.string,
  resetSelected: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealDetails);
