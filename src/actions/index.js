export const getCharactersInfo = (characterInfo) => ({
  type: "GET_CHARACTERS_INFO",
  characterInfo
})

export const setCurrentCharactersInfo = (currentCharacterInfo) => ({
  type: "SET_CURRENT_CHARACTERS_INFO",
  currentCharacterInfo
})

export const addFavorite = (id) => ({
  type: 'ADD_TO_FAVORITES',
  id
})

export const removeFavorite = (id) => ({
  type: 'REMOVE_FAVORITES',
  id
})
