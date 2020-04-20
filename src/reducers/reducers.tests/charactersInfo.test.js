import { charactersInfo } from '../charactersInfo'

describe("charactersInfo", () => {
  let characterInfo1, characterInfo2

  beforeEach(() => {
    characterInfo1 =
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

    characterInfo2 =
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
  })

  it("should return intial state", () => {
    const expectedResult = []
    const result = charactersInfo(undefined, {})

    expect(result).toEqual(expectedResult)
  })

  it("when receiving GET_CHARACTERS_INFO, should return an updated characters array", () => {
    const action = {type:"GET_CHARACTERS_INFO", characterInfo: characterInfo1}
    const expectedResult = [characterInfo1]
    const result = charactersInfo(undefined, action)

    expect(result).toEqual(expectedResult)
  })

  it("when receiving GET_CHARACTERS_INFO, should return an updated characters array of 2 characters", () => {
    const action = {type:"GET_CHARACTERS_INFO", characterInfo: characterInfo2}
    const expectedResult = [characterInfo1, characterInfo2]
    const result = charactersInfo([characterInfo1], action)

    expect(result).toEqual(expectedResult)
  })

})
