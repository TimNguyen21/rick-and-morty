import React from 'react';
import BadRoute from './404Page.js';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('BadRoute', () => {
  it('should display BadRoute info', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
      <Router>
        <BadRoute />
      </Router>
    </Provider>;
    const { getByText, getByRole } = render(testWrapper);

    const wrongPageMessage = getByText("Looks Like You Are Lost!")
    const homeButton = getByRole("button", {name: "Go To Home Page"})

    expect(wrongPageMessage).toBeInTheDocument();
    expect(homeButton).toBeInTheDocument();
  })

})
