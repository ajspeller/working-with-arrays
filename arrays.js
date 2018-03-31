var forEach = (arr, fn) => {
  for(let i=0; i < arr.length; i++){
    fn(arr[i], i, arr);
  }
}

console.log(`implement the forEach method`);
forEach([1,2,3], (v, i, a) => { console.log(v + 1)});

var doubleValues = (arr) => {
  let newArray = [];
  arr.forEach((val, idx, array) => {
    newArray.push(val*2);
  });
  return newArray;
}

console.log(`double values`);
console.log(doubleValues([10,11,12]));

var onlyEvenValues = (arr) => {
  let newArray = [];
  arr.forEach((val, idx, array) => {
    if (val % 2 === 0) {
      // console.log(`I found an even value ${val}`);
      newArray.push(val);
    } else {
      // console.log(`I did not find an even value ${val}`);
    }
  });
  return newArray;
};

console.log(`only even values`);
console.log(onlyEvenValues([10,11,12,13,14]));


let showFirstAndLast = (arr) => {
  let firstAndLast = [];
  arr.forEach((val, idx, array) => {
    let characters = val.split("");
    if (characters.length === 1) {
      firstAndLast.push(val);
    } else {
      let firstChar = characters[0];
      let lastChar = characters[characters.length-1];
      firstAndLast.push(`${firstChar}${lastChar}`);
    }
  });
  return firstAndLast;
};

console.log(`show first and last`);
console.log(showFirstAndLast(['b','aj','cole','mickal','alfred','shanta','amir','keira']));


let addKeyAndValue = (arr, newKey, newValue) => {
  let newArray = [];
  arr.forEach((val, idx, array) => {
    let newObj = Object.assign({}, val);
    newObj[newKey] = newValue;
    newArray.push(newObj);
  });
  return newArray;
}

console.log(`addKeyAndValue`);
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));


let vowelCount = (str) => {
  let results = {};
  let vowels = `aeiou`;
  let characters = str.split("");
  characters.forEach((chr, idx, arr) => {
    if (vowels.indexOf(chr.toLowerCase()) > -1) {
      if (results[chr] === undefined) {
        results[chr] = 1;
      } else {
        results[chr] += 1;
      }
    }
  });
  return results;
};

console.log(`vowelCount`);
console.log(vowelCount('Alfred Speller'));
