export const currentLocationResidents = (state = [], action) => {
  switch(action.type) {
    case 'UPDATE_LOCATION_RESIDENTS':
      return action.charactersId
    default:
      return state;
  }
}
