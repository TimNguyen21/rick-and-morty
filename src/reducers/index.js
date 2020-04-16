import { combineReducers } from 'redux';
import { charactersInfo } from './charactersInfo';
import { currentCharacter } from './currentCharacter';
import { favorites } from './favorites';

export const rootReducer = combineReducers({
  charactersInfo,
  currentCharacter,
  favorites
})
