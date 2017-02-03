var utils = require("../controllers/utils");

// add
describe("add two numbers", () => {
  it("shoud be 1 + 1 = 2", () => {
    expect(utils.add(1, 1)).toBe(2);
  });
  it("shoud be -1 + 1 = 0", () => {
    expect(utils.add(-1, 1)).toBe(0);
  });
  it("shoud be 0 + 0 = 0", () => {
    expect(utils.add(0, 0)).toBe(0);
  });
  it("shoud be 1.5 + 1 = 2.5", () => {
    expect(utils.add(1.5, 1)).toBe(2.5);
  });
  it("shoud be -1 + -1 = -2", () => {
    expect(utils.add(-1, -1)).toBe(-2);
  });
});

// divide
describe("divide two numbers", () => {
  it("shoud be 1 / 1 = 1", () => {
    expect(utils.divide(1, 1)).toBe(1);
  });
  it("shoud be -1 / 1 = -1", () => {
    expect(utils.divide(-1, 1)).toBe(-1);
  });
  it("shoud be 1.5 / 1 = 1.5", () => {
    expect(utils.divide(1.5, 1)).toBe(1.5);
  });
  it("shoud be -1 / -1 = 1", () => {
    expect(utils.divide(-1, -1)).toBe(1);
  });
});

// multiply
describe("multiply two numbers", () => {
  it("shoud be 1 * 1 = 1", () => {
    expect(utils.multiply(1, 1)).toBe(1);
  });
  it("shoud be -1 * 1 = -1", () => {
    expect(utils.multiply(-1, 1)).toBe(-1);
  });
  it("shoud be 0 * 0 = 0", () => {
    expect(utils.multiply(0, 0)).toBe(0);
  });
  it("shoud be 1.5 * 1.5 = 2.25", () => {
    expect(utils.multiply(1.5, 1.5)).toBe(2.25);
  });
  it("shoud be -1 * -1 = 1", () => {
    expect(utils.multiply(-1, -1)).toBe(1);
  });
});

// subtract
describe("subtract two numbers", () => {
  it("shoud be 1 - 1 = 0", () => {
    expect(utils.subtract(1, 1)).toBe(0);
  });
  it("shoud be -1 - 1 = -2", () => {
    expect(utils.subtract(-1, 1)).toBe(-2);
  });
  it("shoud be 0 - 0 = 0", () => {
    expect(utils.subtract(0, 0)).toBe(0);
  });
  it("shoud be 1.5 - 1 = .5", () => {
    expect(utils.subtract(1.5, 1)).toBe(.5);
  });
  it("shoud be -1 - -1 = 0", () => {
    expect(utils.subtract(-1, -1)).toBe(0);
  });
});
