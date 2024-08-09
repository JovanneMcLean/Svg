class Triangle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="150,20 280,200 20,200" fill="${this.color}" />`;
  }
}

class Circle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Square {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
