import allMealsReducer from '../../reducers/Recipes';

const initialState = {
  pending: false,
  products: [],
  error: undefined,
  category: undefined,
};

describe('update category', () => {
  it('should be able to change category', () => {
    expect(allMealsReducer(initialState, { type: 'FETCH_PRODUCTS_PENDING' })).toEqual({ ...initialState, pending: true });
  });
  it('should be not be able to change category', () => {
    expect(allMealsReducer(initialState, { type: 'FETCH_PRODUCTS_PENDING' })).not.toEqual({ ...initialState, pending: false });
  });
  it('should update the current state of products', () => {
    expect(allMealsReducer(initialState, { type: 'FETCH_PRODUCTS_SUCCESS', products: ['beef', 'chicken'] })).toEqual({ ...initialState, pending: false, products: ['beef', 'chicken'] });
  });
  it('shouldnot update the current state of products', () => {
    expect(allMealsReducer(initialState, { type: 'FETCH_PRODUCTS_SUCCESS', products: ['beef', 'chicken'] })).not.toEqual({ ...initialState, pending: true, products: ['vegetarian', 'chicken'] });
  });
});
