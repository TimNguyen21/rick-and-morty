import { currentQuery } from '../currentQuery'

describe("currentQuery", () => {
  let characterInfo1, characterInfo2, characterInfo3

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

    characterInfo3 =
    {
      id: 3,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      }
    }
  })

  it("should return intial state", () => {
    const expectedResult = []
    const result = currentQuery(undefined, [])

    expect(result).toEqual(expectedResult)
  })

  it("when receiving UPDATE_QUERY, should return an updated characters array of 2 characters", () => {
    const action = {type:"UPDATE_QUERY", characters: [characterInfo1, characterInfo2]}
    const expectedResult = [characterInfo1, characterInfo2]
    const result = currentQuery(undefined, action)

    expect(result).toEqual(expectedResult)
  })

  it("when receiving UPDATE_QUERY, should return an updated current state", () => {
    const action = {type:"UPDATE_QUERY", characters: [characterInfo2, characterInfo3]}
    const expectedResult = [characterInfo2, characterInfo3]
    const result = currentQuery([characterInfo1], action)

    expect(result).toEqual(expectedResult)
  })
})
