import React from 'react';
import FavoritesContainer from './favoritesContainer.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('FavoritesContainer', () => {
  it('should display mesage of no favorites', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}><FavoritesContainer /></Provider>;
    const { getByText } = render(testWrapper);
    const textElement = getByText("There are no favorites!")

    expect(textElement).toBeInTheDocument();
  })

})
