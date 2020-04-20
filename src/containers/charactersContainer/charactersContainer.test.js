import React from 'react';
import CharactersContainer from './charactersContainer.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('CharactersContainer', () => {
  it('should display CharactersContainer components', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}><CharactersContainer /></Provider>;
    const { getByText, getByRole } = render(testWrapper);

    const charactersLabel = getByText("Characters")
    const noResultsLabel = getByText("There are no results")
    const resetButton = getByRole("button", {name: "Reset Search"})

    expect(charactersLabel).toBeInTheDocument();
    expect(noResultsLabel).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
  })

})
