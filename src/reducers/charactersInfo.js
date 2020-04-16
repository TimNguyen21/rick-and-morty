export const charactersInfo = (state = [], action) => {
  switch(action.type) {
    case 'GET_CHARACTERS_INFO':
      return action.charactersInfo
    default:
      return state;
  }
}
