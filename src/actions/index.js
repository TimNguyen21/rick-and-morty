export const getCharactersInfo = (characterInfo) => ({
  type: "GET_CHARACTERS_INFO",
  characterInfo
})

export const setCurrentCharactersInfo = (currentCharacterInfo) => ({
  type: "SET_CURRENT_CHARACTERS_INFO",
  currentCharacterInfo
})
