import { charactersInfo } from '../charactersInfo'

describe("charactersInfo", () => {
  it("should return intial state", () => {
    const expectedResult = []

    const result = charactersInfo(undefined, {})

    expect(result).toEqual(expectedResult)

  })
})
