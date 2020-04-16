const BASE_URL = 'https://rickandmortyapi.com/api/character/';

export const getCharacterInfo = async (character) => {
  return await fetch(BASE_URL + character)
    .then(response => response.json())
}
