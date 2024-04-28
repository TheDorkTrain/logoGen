const { Circle } = require("../shapes");

describe("Circle", () => {
  test("should render svg for a green circle element", () => {
    const expectedSvg = `<circle cx="150" cy="100" stroke="${this.borderColor}" stroke-width="6" r="95" fill="green" />`;
    const circle = new Circle();
    circle.backgroundColor("green");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
  test("should accept a fillColor param", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="95" fill="blue" />';
    const circle = new Circle();
    circle.backgroundColor("blue");
    const actualSvg = circle.render();
    expect(actualSvg).toEqual(expectedSvg);
  });
});
