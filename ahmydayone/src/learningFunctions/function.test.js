
import firstFn from './mathFunctions'

describe("firstFn test", () => {

    test("firstFn works as expected", () => {
        let result = firstFn(1,2)
        expect(result).toBe(3)
    })
})
