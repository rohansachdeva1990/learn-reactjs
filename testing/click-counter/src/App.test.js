import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test c1scoL0ve!
 */
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

describe('Counter App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  describe('Initial Render', () => {
    test('render without error', () => {
      const appComponent = findByTestAttr(wrapper, 'component-app');

      expect(appComponent.length).toBe(1);
    });

    test('renders counter display', () => {
      const counterDisplay = findByTestAttr(wrapper, 'counter-display');

      expect(counterDisplay.length).toBe(1);
    });

    test('counter starts at 0', () => {
      const count = findByTestAttr(wrapper, 'count').text();
      expect(count).toBe('0');
    });

    test('renders increment button', () => {
      const button = findByTestAttr(wrapper, 'increment-button');

      expect(button.length).toBe(1);
    });

    test('renders decrement button', () => {
      const button = findByTestAttr(wrapper, 'decrement-button');

      expect(button.length).toBe(1);
    });

    test('displays no error message initially.', () => {
      const errorDiv = findByTestAttr(wrapper, 'error-message');

      const errorHasHiddenClass = errorDiv.hasClass('hidden');
      //console.log(wrapper.debug());
      expect(errorHasHiddenClass).toBe(true);
    });
  });

  describe('Increment', () => {
    test('counter increments when increment button is clicked', () => {
      // Find the button
      const button = findByTestAttr(wrapper, 'increment-button');

      // click the button
      button.simulate('click');

      // find the display and test the number has been incrementd
      const count = findByTestAttr(wrapper, 'count').text();
      expect(count).toBe('1');
    });
  });

  describe('Decrement', () => {
    test('when counter is greater than 0, counter decrements when decrement button is clicked', () => {
      const incrementButton = findByTestAttr(wrapper, 'increment-button');
      incrementButton.simulate('click');

      const decrementButton = findByTestAttr(wrapper, 'decrement-button');
      decrementButton.simulate('click');

      const count = findByTestAttr(wrapper, 'count').text();
      expect(count).toBe('0');
    });

    describe('when counter is 0 and decrement button is clicked', () => {
      beforeEach(() => {
        const decButton = findByTestAttr(wrapper, 'decrement-button');
        decButton.simulate('click');
      });

      test('error is shown', () => {
        const errorDiv = findByTestAttr(wrapper, 'error-message');
        const errorHasHiddenClass = errorDiv.hasClass('hidden');

        expect(errorHasHiddenClass).toBe(false);
      });

      test('counter still displays 0', () => {
        const count = findByTestAttr(wrapper, 'count').text();
        expect(count).toBe('0');
      });

      test('clicking increment clears error', () => {
        const incButton = findByTestAttr(wrapper, 'increment-button');
        incButton.simulate('click');

        const errorDiv = findByTestAttr(wrapper, 'error-message');
        const errorHasHiddenClass = errorDiv.hasClass('hidden');
        expect(errorHasHiddenClass).toBe(true);
      });

      test('clicking increment, increase the counter by 1', () => {
        const incButton = findByTestAttr(wrapper, 'increment-button');
        incButton.simulate('click');

        const count = findByTestAttr(wrapper, 'count').text();
        expect(count).toBe('1');
      });
    });
  });
});
