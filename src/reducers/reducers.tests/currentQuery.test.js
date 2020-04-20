import { currentQuery } from '../currentQuery'

describe("currentQuery", () => {
  it("should return intial state", () => {
    const expectedResult = []

    const result = currentQuery(undefined, [])

    expect(result).toEqual(expectedResult)

  })
})
