import * as actions from './index';

describe("action creators", () => {
  it("should have a type of GET_CHARACTERS_INFO", () => {
    const characterInfo =
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      },
    }

    const expectedAction = {
      type: "GET_CHARACTERS_INFO",
      characterInfo: characterInfo
    };

    const result = actions.getCharactersInfo(characterInfo);

    expect(result).toEqual(expectedAction)
  })

  it("should have a type of SET_CURRENT_CHARACTERS_INFO", () => {
    const characterInfo =
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      },
    }

    const expectedAction = {
      type: "SET_CURRENT_CHARACTERS_INFO",
      currentCharacterInfo: characterInfo
    };

    const result = actions.setCurrentCharactersInfo(characterInfo);

    expect(result).toEqual(expectedAction)
  })

  it("should have a type of ADD_TO_FAVORITES", () => {
    const expectedAction = {
      type: "ADD_TO_FAVORITES",
      id: 1
    };

    const result1 = actions.addFavorite(1);
    const result2 = actions.addFavorite(2);

    expect(result1).toEqual(expectedAction)
    expect(result2).not.toEqual(expectedAction)
  })

  it("should have a type of REMOVE_FAVORITES", () => {
    const expectedAction = {
      type: "REMOVE_FAVORITES",
      id: 1
    };

    const result1 = actions.removeFavorite(1);
    const result2 = actions.removeFavorite(2);

    expect(result1).toEqual(expectedAction)
    expect(result2).not.toEqual(expectedAction)
  })

  it("should have a type of UPDATE_QUERY", () => {
    const charactersInfo =
    [{
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      },
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      }
    }]

    const expectedAction = {
      type: "UPDATE_QUERY",
      characters: charactersInfo
    };

    const result = actions.updateQuery(charactersInfo);

    expect(result).toEqual(expectedAction)
  })

  // it("should have a type of UPDATE_LOCATION_RESIDENTS", () => {
  //   const expectedAction = {
  //     type: "UPDATE_LOCATION_RESIDENTS",
  //     charactersId: 1
  //   };
  //
  //   const result1 = actions.updateLocationResidents(1);
  //   const result2 = actions.updateLocationResidents(2);
  //
  //   expect(result1).toEqual(expectedAction)
  //   expect(result2).not.toEqual(expectedAction)
  // })

})
