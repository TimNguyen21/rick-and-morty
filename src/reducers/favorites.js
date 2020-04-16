export const favorites = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_FAVORITES':
      return [...state, {id: action.id}]
    default:
      return state;
  }
}
