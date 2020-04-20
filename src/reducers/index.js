import { combineReducers } from 'redux';
import { charactersInfo } from './charactersInfo';
import { currentCharacter } from './currentCharacter';
import { favorites } from './favorites';
import { currentQuery } from './currentQuery';

export const rootReducer = combineReducers({
  charactersInfo,
  currentCharacter,
  favorites,
  currentQuery
})
