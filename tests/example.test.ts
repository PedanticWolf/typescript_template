import { returnBob } from "../src/example"

test("Validate returnBob", () => {
    expect(returnBob()).toBe("Bob")
})
