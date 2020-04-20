import React from 'react';
import App from './App.js';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers/index';

describe('App', () => {
  let testWrapper;

  beforeEach(() => {
    const testStore = createStore(rootReducer);
    testWrapper = <Provider store={testStore}>
      <Router>
        <App />
      </Router>
    </Provider>;
  })

  it('should display characters', async () => {
    const { getByText } = render(testWrapper);

    const characterName1 = await waitForElement(() => getByText("Alan Rails"))
    const characterName2 = await waitForElement(() => getByText("Annie"))

    expect(characterName1).toBeInTheDocument();
    expect(characterName2).toBeInTheDocument();
  })

  it('should display characters based on search', async () => {
    const { getByText, getByPlaceholderText } = render(testWrapper);

    const characterName1 = await waitForElement(() => getByText("Alan Rails"))
    const characterName2 = await waitForElement(() => getByText("Annie"))
    const searchInput = getByPlaceholderText('Enter Character Name')
    const searchButton = getByText('Search')

    expect(characterName1).toBeInTheDocument();
    expect(characterName2).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();

    fireEvent.change(searchInput, {target: {value:'Alan Rails'}});
    fireEvent.click(searchButton)

    expect(characterName1).toBeInTheDocument();
    expect(characterName2).not.toBeInTheDocument();
  })

  it('should display no results based on non-matching search', async () => {
    const { getByText, getByPlaceholderText } = render(testWrapper);

    const characterName = await waitForElement(() => getByText("Annie"))
    const searchInput = getByPlaceholderText('Enter Character Name')
    const searchButton = getByText('Search')

    expect(characterName).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();

    fireEvent.change(searchInput, {target: {value:'lololo'}});
    fireEvent.click(searchButton)

    expect(characterName).not.toBeInTheDocument();
  })

  it('should reset search to default when Reset Result button is fired', async () => {
    const { getByText, getByPlaceholderText } = render(testWrapper);

    const characterName = await waitForElement(() => getByText("Annie"))
    const searchInput = getByPlaceholderText('Enter Character Name')
    const searchButton = getByText('Search')
    const resetSearchButton = getByText('Reset Results')

    expect(characterName).toBeInTheDocument();
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    expect(resetSearchButton).toBeInTheDocument();

    fireEvent.change(searchInput, {target: {value:'lololo'}});
    fireEvent.click(searchButton)

    expect(characterName).not.toBeInTheDocument();

    fireEvent.click(resetSearchButton)

    const resetCharacterName = await waitForElement(() => getByText("Annie"))
    expect(resetCharacterName).toBeInTheDocument();
  })

  it('should display no favorites', () => {
    const { getByText } = render(testWrapper);

    const favoriteButton = getByText('View Favorites')
    expect(favoriteButton).toBeInTheDocument();

    fireEvent.click(favoriteButton)

    const favoriteStatusMessage = getByText('There are no favorites!')
    expect(favoriteStatusMessage).toBeInTheDocument();
  })

})
