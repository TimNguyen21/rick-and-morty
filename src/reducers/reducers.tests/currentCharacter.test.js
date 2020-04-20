import { currentCharacter } from '../currentCharacter'

describe("currentCharacter", () => {
  it("should return intial state", () => {
    const expectedResult = {}

    const result = currentCharacter(undefined, {})

    expect(result).toEqual(expectedResult)

  })
})
