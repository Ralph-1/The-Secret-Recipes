import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecipeDescription from '../../components/Description';
import renderer from 'react-test-renderer';

const initial = {
  category: 'test',
  area: 'jest',
  ingredients: ['react', 'redux'],
  className: 'component',
};

const {
  ingredients, category, area, className,
} = initial;

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(
    <RecipeDescription
      ingredients={ingredients}
      category={category}
      area={area}
      className={className}
    />,
  );
  return component;
};

describe('Header Component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<RecipeDescription
      ingredients={ingredients}
      category={category}
      area={area}
      className={className}
     />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render one div', () => {
    expect(component.find('div').length).toBe(2);
  });

  it('should render 6 span element', () => {
    expect(component.find('span').length).toBe(6);
  });
});
