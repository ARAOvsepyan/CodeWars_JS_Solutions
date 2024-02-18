function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}

const firstNonRepeatingLetter = (s) => {
  let dict = new Map();
  s = s.split('')
  
  s.map((x) => dict.set(x, s.filter(item => item === x).length))

  for (item of dict.keys()) {
    if (isLetter(item)) {
      if (!(dict.has(item.toLowerCase()) && dict.has(item.toUpperCase()))) {
        if (dict.get(item) == 1) {
          return item;
        }
      }
    } else {
      if (dict.get(item) == 1) {
        return item;
      }
    }
    
  }
  
  return ''
}



console.log(firstNonRepeatingLetter(',,,.'))