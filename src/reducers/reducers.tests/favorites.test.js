import { favorites } from '../favorites'

describe("currentQuery", () => {
  it("should return intial state", () => {
    const expectedResult = []

    const result = favorites(undefined, "")

    expect(result).toEqual(expectedResult)

  })
})
