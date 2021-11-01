import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CategoryFilter from '../../components/CategoriesFilter';

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<CategoryFilter value="test" onChange={() => 'testing with jest'} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should have one span', () => {
    expect(component.find('select').length).toBe(1);
  });
});
