import React from 'react';
import Query from './Query.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('Query', () => {
  it('should display Query Search components', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}><Query /></Provider>;
    const { getByText, getByRole, getByPlaceholderText } = render(testWrapper);

    const searchLabel = getByText("Search Character:")
    const searchInput = getByPlaceholderText("Enter Character Name")
    const searchButton = getByRole("button", {name: "Search"})
    const resetSearchButton = getByRole("button", {name: "Reset Results"})

    expect(searchLabel).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(resetSearchButton).toBeInTheDocument();
  })

  it('should display Query Filter Status components', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}><Query /></Provider>;
    const { getByText, getByRole } = render(testWrapper);

    const filterLabel = getByText("Filter Status:")
    const selectDefaultLabel = getByText("--Select a Status--")
    const filterStatusButton = getByRole("button", {name: "Filter Status"})

    expect(filterLabel).toBeInTheDocument();
    expect(selectDefaultLabel).toBeInTheDocument();
    expect(filterStatusButton).toBeInTheDocument();
  })

  it('should display Query Filter Species components', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}><Query /></Provider>;
    const { getByText, getByRole } = render(testWrapper);

    const filterLabel = getByText("Filter Species:")
    const selectDefaultLabel = getByText("--Select a Species--")
    const filterSpeciesButton = getByRole("button", {name: "Filter Species"})

    expect(filterLabel).toBeInTheDocument();
    expect(selectDefaultLabel).toBeInTheDocument();
    expect(filterSpeciesButton).toBeInTheDocument();
  })

})
