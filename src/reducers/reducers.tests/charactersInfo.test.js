import { charactersInfo } from '../charactersInfo'

describe("charactersInfo", () => {
  it("should return intial state", () => {
    const expectedResult = []
    const result = charactersInfo(undefined, {})

    expect(result).toEqual(expectedResult)
  })

  it("when receiving GET_CHARACTERS_INFO, should return an updated characters array", () => {
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

    const action = {type:"GET_CHARACTERS_INFO", characterInfo: characterInfo}
    const expectedResult = [characterInfo]
    const result = charactersInfo(undefined, action)

    expect(result).toEqual(expectedResult)
  })

  it("when receiving GET_CHARACTERS_INFO, should return an updated characters array of 2 characters", () => {
    const characterInfo1 =
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

    const characterInfo2 =
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
    }

    const action = {type:"GET_CHARACTERS_INFO", characterInfo: characterInfo2}
    const expectedResult = [characterInfo1, characterInfo2]
    const result = charactersInfo([characterInfo1], action)

    expect(result).toEqual(expectedResult)
  })

})
