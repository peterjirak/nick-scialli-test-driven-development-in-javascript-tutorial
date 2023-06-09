const adder = require("./adder");

describe(
    "adder",
    () => {
        it("should add two numbers",
            () => {
                expect(adder(1, 2)).toBe(3)
            }
        );
        it("should be able to handle a sole input",
            () => {
                expect(adder(5)).toBe(5)
            }
        );
        it("should add three numbers",
            () => {
                expect(adder(1, 2, 3)).toBe(6)
            }
        );
        it ("should return 0 if it is invoked with no inputs",
            () => {
                expect().toBe(0)
            }
        );
    }
)
