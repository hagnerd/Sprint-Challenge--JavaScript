// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
  constructor(attrs) {
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  }

  volume() {
    return this.length * this.width * this.height
  }
  surfaceArea() {
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
  constructor(attrs) {
    super(attrs);
    this.measurement = attrs.measurement;
  }

  volume() {
    let volume = this.length * this.width * this.height;
    return `${volume}${this.measurement}^2`;
  }

  surfaceArea() {
    let surfaceArea = 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
    return `${surfaceArea}${this.measurement}^3`;
  }
}

const cube = new CubeMaker({
  length: 5,
  width: 5,
  height: 5,
  measurement: 'cm',
});

console.log(cube.volume());
console.log(cube.surfaceArea());
