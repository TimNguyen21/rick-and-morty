import React from 'react';
import Nav from './Nav.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('Nav', () => {
  it('should display Nav buttons', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}><Router><Nav /></Router></Provider>;
    const { getByRole } = render(testWrapper);

    const homeButton = getByRole("button", {name: "Home"})
    const viewFavoritesButton = getByRole("button", {name: "View Favorites"})

    expect(homeButton).toBeInTheDocument();
    expect(viewFavoritesButton).toBeInTheDocument();
  })

})
