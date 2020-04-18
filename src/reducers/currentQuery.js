export const currentQuery = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_QUERY':
      return action.characters
    default:
      return state;
  }
}
