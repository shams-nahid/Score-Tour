var fs = require('fs');

fs.readFile('districts.txt', 'utf8', function (err, data) {
  if (err) throw err;
  const arrayData = data.split('\n').filter(letter => letter !== ' ');
  console.log(arrayData);
  let districtObjects = [];
  for (let index = 0; index < arrayData.length; index++) {
    
  }
  // fs.writeFile('output.json', JSON.stringify(placeObjects), 'utf8', function (
  //   err
  // ) {
  //   if (err) {
  //     console.log('An error occured while writing JSON Object to File.');
  //     return console.log(err);
  //   }

  //   console.log('JSON file has been saved.');
  // });
});
