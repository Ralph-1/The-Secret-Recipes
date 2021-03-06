import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CategoryFilter from '../../components/CategoriesFilter';

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<CategoryFilter value="test" onChange={() => 'testing with jest'} />);
  return component;
};

describe('Header Component', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<CategoryFilter value="test" onChange={() => 'testing with jest'} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should have one span', () => {
    expect(component.find('select').length).toBe(1);
  });

  it('should not render two spans', () => {
    expect(component.find('select').length).not.toBe(2);
  });
});
