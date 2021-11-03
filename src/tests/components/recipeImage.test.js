import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Image from '../../components/RecipeImage';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<Image src="jest" name="testing" />);
  return component;
};

describe('Header Component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Image src="jest" name="testing" />)

    expect(tree).toMatchSnapshot()
  });

  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should display one image', () => {
    expect(component.find('img').hasClass('recipeImage')).toBe(true);
  });

  it('should should not display any image', () => {
    expect(component.find('img').hasClass('rcp-image')).toBe(false);
  });

  it('should display one header', () => {
    expect(component.find('h3').length).toBe(1);
  });

  it('should not display header ', () => {
    expect(component.find('h1').length).toBe(0);
  });
});
