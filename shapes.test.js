// lib/shapes.test.js

const { Triangle, Circle, Square } = require('./shapes');

test('Triangle renders correctly', () => {
  const triangle = new Triangle('red');
  expect(triangle.render()).toBe('<polygon points="150,20 280,200 20,200" fill="red" />');
});

test('Circle renders correctly', () => {
  const circle = new Circle('blue');
  expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="blue" />');
});

test('Square renders correctly', () => {
  const square = new Square('green');
  expect(square.render()).toBe('<rect x="70" y="20" width="160" height="160" fill="green" />');
});
