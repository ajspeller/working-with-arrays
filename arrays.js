var divider = '-----------------------------------';

/////////////// forEach method
var forEach = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i, arr);
  }
};

console.log(`implement the forEach method`);
forEach([1, 2, 3], (v, i, a) => {
  console.log(v + 1);
});

var doubleValues = arr => {
  let newArray = [];
  arr.forEach((val, idx, array) => {
    newArray.push(val * 2);
  });
  return newArray;
};

console.log(`double values`);
console.log(doubleValues([10, 11, 12]));
console.log(divider);

var onlyEvenValues = arr => {
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
console.log(onlyEvenValues([10, 11, 12, 13, 14]));
console.log(divider);

let showFirstAndLast = arr => {
  let firstAndLast = [];
  arr.forEach((val, idx, array) => {
    let characters = val.split('');
    if (characters.length === 1) {
      firstAndLast.push(val);
    } else {
      let firstChar = characters[0];
      let lastChar = characters[characters.length - 1];
      firstAndLast.push(`${firstChar}${lastChar}`);
    }
  });
  return firstAndLast;
};

console.log(`show first and last`);
console.log(
  showFirstAndLast([
    'b',
    'aj',
    'cole',
    'mickal',
    'alfred',
    'shanta',
    'amir',
    'keira'
  ])
);
console.log(divider);

let addKeyAndValue = (arr, newKey, newValue) => {
  let newArray = [];
  arr.forEach((val, idx, array) => {
    let newObj = Object.assign({}, val);
    newObj[newKey] = newValue;
    newArray.push(newObj);
  });
  return newArray;
};

console.log(`addKeyAndValue`);
console.log(
  addKeyAndValue(
    [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }],
    'title',
    'instructor'
  )
);
console.log(divider);

let vowelCount = str => {
  let results = {};
  let vowels = `aeiou`;
  let characters = str.split('');
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
console.log(divider);
/////////////////////////////////////////////////////////////// map method
/// user for transformation
/// always returns a new arry of the same length

console.log(`map implementation`);

let map = (arr, callback) => {
  let newArray = [];
  for (let idx = 0; idx < arr.length; idx++) {
    newArray.push(callback(arr[idx], idx, arr));
  }
  return newArray;
};

console.log(
  map([1, 2, 3], x => {
    return x * 10;
  })
);
console.log(divider);

var doubleValuesMap = arr => {
  return arr.map((element, idx, arr) => {
    return element * 2;
  });
};

console.log(`doubleValuesMap`);
console.log(doubleValuesMap([19, 45, 88]));
console.log(divider);

var valTimesIndex = arr => {
  return arr.map((element, idx, arr) => {
    return element * idx;
  });
};
console.log(`valTimesIndex`);
console.log(valTimesIndex([1, -2, -3]));
console.log(divider);

var extractKey = (arr, key) => {
  return arr.map((val, idx, arr) => {
    return val[key];
  });
};

console.log(`extractKey`);
console.log(
  extractKey(
    [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }],
    'name'
  )
);
console.log(divider);

let extractFullName = arr => {
  return arr.map((val, idx, arr) => {
    return `${val.first} ${val.last}`;
  });
};

console.log(`extractFullName`);
console.log(
  extractFullName([
    { first: 'Elie', last: 'Schoppik' },
    { first: 'Tim', last: 'Garcia' },
    { first: 'Matt', last: 'Lane' },
    { first: 'Colt', last: 'Steele' }
  ])
);
console.log(divider);
////////////////////////////////////////////////////
////// filter method
let filter = (arr, callback) => {
  let newArray = [];
  for (let idx = 0; idx < arr.length; idx++) {
    if (callback(arr[idx], idx, arr)) {
      newArray.push(arr[idx]);
    }
  }
  return newArray;
};

console.log(
  filter(['aj', 'cole', 'ab', 'mk'], name => {
    return name === 'cole';
  })
);
console.log(divider);

let filterByValue = (arr, key) => {
  return arr.filter((element, idx, arr) => {
    return element[key];
  });
};
console.log(`filterByValue`);
console.log(
  filterByValue(
    [
      { first: 'Elie', last: 'Schoppik' },
      { first: 'Tim', last: 'Garcia', isCatOwner: true },
      { first: 'Matt', last: 'Lane' },
      { first: 'Colt', last: 'Steele', isCatOwner: true }
    ],
    'isCatOwner'
  )
);
console.log(divider);

let find = (arr, valToFind) => {
  let newArray = arr.filter((element, idx, arr) => {
    return valToFind === element;
  });
  if (newArray.length === 0) {
    return undefined;
  }
  return newArray;
};

console.log(`find`);
console.log(find([1, 2, 3, 4, 5], 10));
console.log(divider);

let find2 = (arr, valToFind) => {
  return arr.filter((element, idx, arr) => {
    return valToFind === element;
  })[0];
};

console.log(`find2`);
console.log(find2([1, 2, 3, 4, 5], 10));
console.log(divider);

let findInObj = (arr, someKey, someValue) => {
  return arr.filter((element, idx, arr) => {
    return element[someKey] === someValue;
  })[0];
};

console.log(`findInObj`);
console.log(
  findInObj(
    [
      { first: 'Elie', last: 'Schoppik' },
      { first: 'Tim', last: 'Garcia', isCatOwner: true },
      { first: 'Matt', last: 'Lane' },
      { first: 'Colt', last: 'Steele', isCatOwner: true }
    ],
    'isCatOwner',
    true
  )
);
console.log(divider);

let removeVowels = str => {
  let vowels = `aeiou`;
  let characters = str.split('');
  return characters
    .filter((char, idx, characters) => {
      return vowels.indexOf(char.toLowerCase()) === -1;
    })
    .join('');
};
console.log(`removeVowels`);
console.log(removeVowels('Alfred Cole'));
console.log(divider);

let doubleOddNumbers = arr => {
  return arr
    .filter((number, idx, arr) => {
      return number % 2 !== 0;
    })
    .map(number => {
      return number + number;
    });
};
console.log(`doubleOddNumbers`);
console.log(doubleOddNumbers([1, 2, 3, 4, 5]));
console.log(doubleOddNumbers([4, 4, 4, 4, 4]));
console.log(divider);

////////////////////////////////////////////////////////////
///// some & every method

// my implementation of the some method
var some = (arr, callback) => {
  for (let idx = 0; idx < arr.length; idx++) {
    if (callback(arr[idx], idx, arr)) {
      return true;
    }
  }
  return false;
};

// my implementation of the very method
var every = (arr, callback) => {
  for (let idx = 0; idx < arr.length; idx++) {
    if (!callback(arr[idx], idx, arr)) {
      return false;
    }
    return true;
  }
};

var hasOddNumber = arr => {
  return arr.some((val, idx, arr) => {
    if (val % 2 !== 0) {
      return true;
    }
    return false;
  });
};
console.log(`hasOddNumber([1,2,2,2,2,2,4])`);
console.log(hasOddNumber([1, 2, 2, 2, 2, 2, 4]));
console.log(`hasOddNumber([2,2,2,2,2,2,4])`);
console.log(hasOddNumber([2, 2, 2, 2, 2, 2, 4]));
console.log(divider);

var hasAZero = numbers => {
  let characters = numbers.toString().split('');
  return characters.some((val, idx) => {
    return val === '0';
  });
};
console.log(`hasAZero(3332123213101232321)`);
console.log(hasAZero(3332123213101232321));
console.log(`hasAZero(1212121)`);
console.log(hasAZero(1212121));
console.log(divider);

var hasOnlyOddNumbers = arr => {
  return arr.every((val, idx, arr) => {
    return val % 2 !== 0;
  });
};

console.log(`hasOnlyOddNumbers([1,3,5,7])`);
console.log(hasOnlyOddNumbers([1, 3, 5, 7]));
console.log(`hasOnlyOddNumbers([1,2,3,5,7])`);
console.log(hasOnlyOddNumbers([1, 2, 3, 5, 7]));
console.log(divider);

var hasNoDuplicates = arr => {
  return arr.every((val, idx, arr) => {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
};

console.log(`hasNoDuplicates([1,2,3,1])`);
console.log(hasNoDuplicates([1, 2, 3, 1]));
console.log(`hasNoDuplicates([1,2,3])`);
console.log(hasNoDuplicates([1, 2, 3]));
console.log(divider);

var arr = [
  { title: 'Instructor', first: 'Elie', last: 'Schoppik' },
  { title: 'Instructor', first: 'Tim', last: 'Garcia', isCatOwner: true },
  { title: 'Instructor', first: 'Matt', last: 'Lane' },
  { title: 'Instructor', first: 'Colt', last: 'Steele', isCatOwner: true }
];
var hasCertainKey = (arr, key) => {
  return arr.every((val, idx, arr) => {
    return val[key];
  });
};
console.log(`hasCertainKey(arr,'first')`);
console.log(hasCertainKey(arr, 'first'));
console.log(`hasCertainKey(arr,'isCatOwner')`);
console.log(hasCertainKey(arr, 'isCatOwner'));
console.log(divider);

var hasCertainKey2 = (arr, key) => {
  return arr.every((obj, idx, arr) => {
    return key in obj;
  });
};
console.log(`key in obj`);
console.log(`hasCertainKey2(arr,'first')`);
console.log(hasCertainKey2(arr, 'first'));
console.log(`hasCertainKey2(arr,'isCatOwner')`);
console.log(hasCertainKey2(arr, 'isCatOwner'));
console.log(divider);

var arr1 = [
  { title: 'Instructor', first: 'Elie', last: 'Schoppik' },
  { title: 'Instructor', first: 'Tim', last: 'Garcia', isCatOwner: true },
  { title: 'Instructor', first: 'Matt', last: 'Lane' },
  { title: 'Instructor', first: 'Colt', last: 'Steele', isCatOwner: true }
];
var hasCertainValue = (arr1, key, match) => {
  return arr1.every((val, idx, arr) => {
    return val[key] === match;
  });
};

console.log(`hasCertainValue(arr1,'title','Instructor')`);
console.log(hasCertainValue(arr1, 'title', 'Instructor'));
console.log(`hasCertainValue(arr1,'first','Elie')`);
console.log(hasCertainValue(arr1, 'first', 'Elie'));
console.log(divider);

/////////////////////////////////////////////////////////
//// reduce method

// Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

var extractValue = (arr, key) => {
  return arr.reduce((acc, val, idx, arr) => {
    acc.push(val[key]);
    return acc;
  }, []);
};

console.log(
  `extractValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}],'name')`
);
console.log(
  extractValue(
    [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }],
    'name'
  )
);
console.log(divider);

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

var vowelCountReduce = str => {
  const vowels = `aeiou`;
  let characters = str.toLowerCase().split('');
  console.table(characters);
  return characters.reduce((acc, val, idx, characters) => {
    if (vowels.indexOf(val) !== -1) {
      if (acc[val] !== undefined) {
        acc[val] += 1;
      } else {
        acc[val] = 1;
      }
    }
    return acc;
  }, {});
};

console.log(`vowelCountReduce('Elie')`);
console.table(vowelCountReduce('Elie'));
console.log(`vowelCountReduce('Tim')`);
console.table(vowelCountReduce('Tim'));
console.log(`vowelCountReduce('Alfred J Speller')`);
console.table(vowelCountReduce('Alfred J Speller'));
console.table(vowelCountReduce('Mickal K Speller'));
console.table(vowelCountReduce('Shanta L Speller'));
console.table(vowelCountReduce('Sheila A Speller'));
console.table(vowelCountReduce('Alfred B Speller'));
console.table(vowelCountReduce('Cole B Speller'));
console.log(divider);

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

var addKeyAndValueReducer = (arr, key, value) => {
  return arr.reduce((acc, nextItem, idx, arr) => {
    nextItem[key] = value;
    acc.push(nextItem);
    return acc;
  }, []);
};

console.table(
  addKeyAndValueReducer(
    [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }],
    'title',
    'Instructor'
  )
);
console.log(divider);

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    var arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

var partition = (arr, callback) => {
  return arr.reduce(
    (acc, nextItem, idx, arr) => {
      if (callback(nextItem)) {
        acc[0].push(nextItem);
      } else {
        acc[1].push(nextItem);
      }
      return acc;
    },
    [[], []]
  );
};

function isEven1(val) {
  return val % 2 === 0;
}

console.table(partition([1, 2, 3, 4, 5, 6, 7, 8], isEven1)); // [[2,4,6,8], [1,3,5,7]];

function isLongerThanThreeCharacters(val) {
  return val.length > 3;
}

console.table(
  partition(['Elie', 'Colt', 'Tim', 'Matt'], isLongerThanThreeCharacters)
); // [['Elie', 'Colt', 'Matt'], ['Tim']]
