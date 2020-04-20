import { currentCharacter } from '../currentCharacter'

describe("currentCharacter", () => {
  let characterInfo;

  beforeEach(() => {
    characterInfo =
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
  })

  it("should return intial state", () => {
    const expectedResult = {}
    const result = currentCharacter(undefined, {})

    expect(result).toEqual(expectedResult)
  })

  it("when receiving SET_CURRENT_CHARACTERS_INFO, should return an object of current character", () => {
    const action = {type:"SET_CURRENT_CHARACTERS_INFO", currentCharacterInfo: characterInfo}
    const expectedResult = characterInfo
    const result = currentCharacter(undefined, action)

    expect(result).toEqual(expectedResult)
  })

})
