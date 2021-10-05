exports.snakeToCamel = str => {
  let result = '', i = 0, uppercaseNext = false;
  
  while (i < str.length) {
    const char = str[i];

    if (char === '_') {
      uppercaseNext = true;
    } else if (uppercaseNext) {
      result += char.toUpperCase();
      uppercaseNext = false;
    } else {
      result += char;
    }
    
    i++;
  }
  
  return result;
};

exports.camelToSnake = str => {
  let result = '', i = 0;
  
  while (i < str.length) {
    const char = str[i];

    if (char === char.toUpperCase()) {
      result += `_${char.toLowerCase()}`;
    } else {
      result += char;
    }
    
    i++;
  }
  
  return result;
};