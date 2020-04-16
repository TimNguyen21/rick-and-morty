export const currentCharacter = (state = {}, action) => {
  switch(action.type) {
    case 'SET_CURRENT_CHARACTERS_INFO':
      return action.currentCharacterInfo
    default:
      return state;
  }
}
