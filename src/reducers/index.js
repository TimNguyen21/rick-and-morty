import { combineReducers } from 'redux';
import { charactersInfo } from './charactersInfo';
import { currentCharacter } from './currentCharacter';
import { favorites } from './favorites';
import { currentQuery } from './currentQuery';
// import { currentLocationResidents } from './currentLocationResidents';

export const rootReducer = combineReducers({
  charactersInfo,
  currentCharacter,
  favorites,
  currentQuery,
  // currentLocationResidents
})
