import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import AllCategories from '../../containers/Home';
import store from '../../reducers/index';

Enzyme.configure({ adapter: new Adapter() });
const setup = () => {
  const component = shallow(<Provider store={store}><AllCategories /></Provider>);
  return component;
};

describe('should not be visible on app loading', () => {
  it('should match the snapshot', () => {
    const tree = renderer.create(<Provider store={store}><AllCategories /></Provider>);

    expect(tree).toMatchSnapshot();
  });

  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should not render the page any div content', () => {
    expect(component.find('div').length).toBe(0);
  });

  it('should not render the page any div content', () => {
    expect(component.find('div').length).not.toBe(1);
  });

  it('should not render any header elements', () => {
    expect(component.find('h1').length).toBe(0);
  });

  it('should not render any header elements', () => {
    expect(component.find('h1').length).not.toBe(1);
  });

  it('should not render any span element', () => {
    expect(component.find('span').length).toBe(0);
  });

  it('should not render any span element', () => {
    expect(component.find('span').length).not.toBe(1);
  });
});
