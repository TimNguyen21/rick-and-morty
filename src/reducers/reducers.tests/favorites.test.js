import { favorites } from '../favorites'

describe("currentQuery", () => {
  it("should return intial state", () => {
    const expectedResult = []
    const result = favorites(undefined, "")

    expect(result).toEqual(expectedResult)
  })

  it("when receiving ADD_TO_FAVORITES, should return a favorite array", () => {
    const action = {type:"ADD_TO_FAVORITES", id: 1}
    const expectedResult = [{id: 1}]
    const result = favorites(undefined, action)

    expect(result).toEqual(expectedResult)
  })

  it("when receiving ADD_TO_FAVORITES, should return an updated favorite array with the new addition", () => {
    const action = {type:"ADD_TO_FAVORITES", id: 3}
    const expectedResult = [{id: 1}, {id: 2}, {id: 3}]
    const result = favorites([{id:1}, {id:2}], action)

    expect(result).toEqual(expectedResult)
  })

  it("when receiving REMOVE_FAVORITES, should return an updated favorite array with the id removal", () => {
    const action = {type:"REMOVE_FAVORITES", id: 2}
    const expectedResult = [{id: 1}, {id: 3}]
    const result = favorites([{id: 1}, {id: 2}, {id: 3}], action)

    expect(result).toEqual(expectedResult)
  })

})
