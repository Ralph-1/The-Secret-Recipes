import categoriesReducer from '../../reducers/Categories';

const initialState = {
  pending: false,
  categories: [],
  error: undefined,
};

describe('update category', () => {
  it('should fetch the categories', () => {
    expect(categoriesReducer(initialState, { type: 'FETCH_CATEGORIES_SUCCESS', categories: ['beef', 'chicken'] })).toEqual({ ...initialState, categories: ['beef', 'chicken'] });
  });
});
