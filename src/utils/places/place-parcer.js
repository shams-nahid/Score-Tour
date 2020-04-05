var fs = require('fs');

fs.readFile('places.txt', 'utf8', function(err, data) {
  if (err) throw err;
  const arrayData = data.split('').filter(letter => letter !== ' ');
  let placeNames = [];
  let placeName = '';
  let isUnderPlaceName = false;
  let scores = [];
  console.log(arrayData);
  for (let index = 0; index < arrayData.length; index++) {
    const letter = arrayData[index];
    if (letter === ' ') continue;
    if (letter === '.') {
      isUnderPlaceName = true;
      continue;
    }
    if (isUnderPlaceName && letter !== '-') {
      placeName += letter;
    }
    if (letter === '-') {
      scores.push(arrayData[index + 1]);
      isUnderPlaceName = false;
      placeNames.push(placeName.trim());
      placeName = '';
    }
  }

  let placeObjects = [];
  for (let index = 0; index < placeNames.length; index++) {
    placeObjects.push({
      name: placeNames[index],
      id: index,
      score: scores[index]
    });
  }

  fs.writeFile('output.json', JSON.stringify(placeObjects), 'utf8', function(
    err
  ) {
    if (err) {
      console.log('An error occured while writing JSON Object to File.');
      return console.log(err);
    }

    console.log('JSON file has been saved.');
  });
});
