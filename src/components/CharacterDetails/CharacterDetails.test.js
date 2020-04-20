import React from 'react';
import CharacterDetails from './CharacterDetails.js';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('CharacterDetails', () => {
  it('should display CharacterDetails labels', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
      <Router>
        <CharacterDetails
          match={"1"}
        />
      </Router>
    </Provider>;
    const { getByText } = render(testWrapper);

    const statusLabel = getByText("Status:")
    const speciesLabel = getByText("Species:")
    const genderLabel = getByText("Gender:")
    const originLabel = getByText("Origin:")
    const locationLabel = getByText("Location:")

    expect(statusLabel).toBeInTheDocument();
    expect(speciesLabel).toBeInTheDocument();
    expect(genderLabel).toBeInTheDocument();
    expect(originLabel).toBeInTheDocument();
    expect(locationLabel).toBeInTheDocument();
  })

  it('should display CharacterDetails info', async () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
      <Router>
        <CharacterDetails
          match={"1"}
        />
      </Router>
    </Provider>;
    const { getByText } = render(testWrapper);

    const characterName = await waitForElement(() => getByText("Rick Sanchez"))
    const characterStatus = await waitForElement(() => getByText("Alive"))
    const characterSpecies = await waitForElement(() => getByText("Human"))
    const characterGender = await waitForElement(() => getByText("Male"))
    const characterOrigin = await waitForElement(() => getByText("Earth (C-137)"))
    const characterLocation = await waitForElement(() => getByText("Earth (Replacement Dimension)"))

    expect(characterName).toBeInTheDocument();
    expect(characterStatus).toBeInTheDocument();
    expect(characterSpecies).toBeInTheDocument();
    expect(characterGender).toBeInTheDocument();
    expect(characterOrigin).toBeInTheDocument();
    expect(characterLocation).toBeInTheDocument();
  })

})
