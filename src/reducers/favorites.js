export const favorites = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, {id: action.id}];
    case 'REMOVE_FAVORITES':
      return state.filter(character => character.id !== action.id);
    default:
      return state;
  }
}
