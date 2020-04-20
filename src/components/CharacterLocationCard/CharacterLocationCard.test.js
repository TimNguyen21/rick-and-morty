import React from 'react';
import CharacterLocationCard from './CharacterLocationCard.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('CharacterLocationCard', () => {
  it('should display CharacterLocationCard info', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
      <Router>
        <CharacterLocationCard
        key={1}
        id={1}
        name={"Rick Sanchez"}
        image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
        />
      </Router>
    </Provider>;
    const { getByText, getByRole, getByAltText } = render(testWrapper);

    const charcterAltText = getByAltText("image of Rick Sanchez")

    expect(charcterAltText).toBeInTheDocument();
  })

})
