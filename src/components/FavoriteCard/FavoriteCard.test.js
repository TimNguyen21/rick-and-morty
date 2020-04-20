import React from 'react';
import FavoriteCard from './FavoriteCard.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('FavoriteCard', () => {
  it('should display FavoriteCard info', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
      <Router>
        <FavoriteCard
        key={1}
        id={1}
        name={"Rick Sanchez"}
        image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
        />
      </Router>
    </Provider>;
    const { getByText, getByRole, getByAltText } = render(testWrapper);

    const characterLabel = getByText("Rick Sanchez")
    const charcterAltText = getByAltText("image of Rick Sanchez")
    const viewDetailsButton = getByRole("button", {name: "View Details"})
    const removeFavoriteButton = getByRole("button", {name: "Remove Favorite"})

    expect(characterLabel).toBeInTheDocument();
    expect(charcterAltText).toBeInTheDocument();
    expect(viewDetailsButton).toBeInTheDocument();
    expect(removeFavoriteButton).toBeInTheDocument();
  })

})
