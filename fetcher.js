const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error(error)
  }
  if (response.statusCode !== 200) {
    console.log(`Error : Recieved status code ${response.statusCode}`);
    return;
  }
  fs.writeFile(filePath, body, (error) => {
    if (error) {
      console.error(error)
      return;
    }
const fileSize = body.length;

console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`)

});

});
