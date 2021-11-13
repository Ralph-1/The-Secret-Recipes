const intiState = {
  pending: false,
  categories: [],
  error: '',
};

const CatgoriesReducer = (state = intiState, action) => {
  const { type, categories } = action;

  switch (type) {
    case 'FETCH_PRODUCTS_PENDING':
      return {
        ...state,
        pending: true,
      };
    case 'FETCH_CATEGORIES_SUCCESS':
      return {
        ...state,
        pending: false,
        categories,
      };
    case 'FETCH_PRODUCTS_ERROR':
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default CatgoriesReducer;
