export const charactersInfo = (state = [], action) => {
  switch(action.type) {
    case 'GET_CHARACTERS_INFO':
      return [...state, action.characterInfo]
    default:
      return state;
  }
}
