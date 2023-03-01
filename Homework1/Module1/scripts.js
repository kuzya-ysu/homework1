export function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase(); 
}

export function correctSpaces(str) {
  let array = str.split('');
  for (let i = 0; i < array.length; i++) {
    switch (array[i]) {
      case ',':
      case '.':
      case '!':
      case '?':
        if (array[i + 1] != ' ') {
          array.splice(i + 1, 0, ' ');
          break;
        }
        
      case ' ':
        if (array[i + 1] === ' ') {
          array.splice(i + 1, 1);
          i--;
          break;
        }

        else if (array[i + 1] === ','
        || array[i + 1] === '.'
        || array[i + 1] === '!'
        || array[i + 1] === '?') {
          array.splice(i, 1);
          i--;
          break;
        }

        else break;

      default:
        break;
    }
  }

  return array.join('');
}

export function wordsCount(str) {
  let array = str.split(/[\s,]+/);
  return array.length;
}

export function uniqueWordsCount(str) {
  let array = str.split(/[\s,]+/);

  let map = new Map();

  for (let word of array) {

    if (map.has(word)) {
      let value = map.get(word) + 1;
      map.set(word, value);
      continue;
    }
      
    map.set(word, 1);
  }

  return map;
}