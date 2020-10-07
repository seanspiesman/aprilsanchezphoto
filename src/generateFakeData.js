const faker = require("faker");

function seedFakeData(n) {
  let imageObj = {};
  for (let i = 0; i < n; i++) {
    imageObj[i] = faker.image.image();
  }
  return imageObj;
}

console.log(seedFakeData(10));

module.exports = { seedFakeData };
