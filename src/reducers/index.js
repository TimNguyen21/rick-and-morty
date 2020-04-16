import { combineReducers } from 'redux';
import { charactersInfo } from './charactersInfo';
import { currentCharacter } from './currentCharacter';

export const rootReducer = combineReducers({
  charactersInfo,
  currentCharacter
})
