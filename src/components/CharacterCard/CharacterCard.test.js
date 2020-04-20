import React from 'react';
import CharacterCard from './CharacterCard.js';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('CharacterCard', () => {
  it('should display CharacterCard info', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
      <Router>
        <CharacterCard
        id={1}
        key={1}
        img={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
        name={"Rick Sanchez"}
        />
      </Router>
    </Provider>;
    const { getByText, getByAltText } = render(testWrapper);

    const nameLabel = getByText("Rick Sanchez")
    const characterAltText = getByAltText("image of Rick Sanchez")

    expect(nameLabel).toBeInTheDocument();
    expect(characterAltText).toBeInTheDocument();
  })

})
