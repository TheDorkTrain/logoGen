const { Circle, Triangle, Square } = require("../shapes");

describe("Circle", () => {
  test("should accept a new color params for background and color and render them", () => {
    const color = 'blue';
    const borderColor = 'green';
    const circle = new Circle({backgroundColor:color, borderColor:borderColor});
    expect(circle.render).toBe(`<circle cx="150" cy="100" r="95" stroke="${borderColor}" stroke-width="6" fill="${color}"/>`);

  });

});

describe("Triangle", () => {
  test("should accept a new color params for background and color and render them", () => {
    const color = 'blue';
    const borderColor = 'green';
    const triangle = new Triangle({backgroundColor:color, borderColor:borderColor});
    expect(triangle.render).toBe(`<polygon points="50,50 250,50 150,175" stroke="${borderColor}" stroke-width="6" fill="${color}" />`);

  });
});

describe("Square", () => {
  test("should accept a new color params for background and color and render them", () => {
    const color = 'blue';
    const borderColor = 'green';
    const square = new Square({backgroundColor:color, borderColor:borderColor});
    expect(square.render).toBe(`<rect width="100" height="100" x="100" y="50" stroke="${borderColor}" stroke-width="6" fill="${color}"/>`);

  });

})

