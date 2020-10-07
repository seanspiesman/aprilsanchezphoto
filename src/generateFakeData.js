const faker = require("faker");
const fs = require("fs");

function seedFakeData(n) {
  let imageObj = {};
  for (let i = 0; i < n; i++) {
    imageObj[i] = faker.image.image();
  }
  console.log(JSON.stringify(imageObj));
  fs.writeFile("data.json", JSON.stringify(imageObj), (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

console.log(seedFakeData(10));
