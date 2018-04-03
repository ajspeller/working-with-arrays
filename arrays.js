var divider = "-----------------------------------";

/////////////// forEach method
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
console.log(divider);

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
console.log(divider);


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
console.log(divider);


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
console.log(divider);


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
console.log(divider);
/////////////////////////////////////////////////////////////// map method
/// user for transformation
/// always returns a new arry of the same length

console.log(`map implementation`);

let map = (arr, callback) => {
  let newArray = [];
  for(let idx=0; idx<arr.length; idx++) {
    newArray.push(callback(arr[idx], idx, arr));
  }
  return newArray;
}

console.log(map([1,2,3], (x) => { return x * 10;}));
console.log(divider);

var doubleValuesMap = (arr) => {
  return arr.map((element, idx, arr) => {
    return element * 2;
  });
};

console.log(`doubleValuesMap`);
console.log(doubleValuesMap([19,45,88]));
console.log(divider);

var valTimesIndex = (arr) => {
  return arr.map((element, idx, arr) => {
    return element * idx;
  });
}
console.log(`valTimesIndex`);
console.log(valTimesIndex([1,-2,-3]));
console.log(divider);

var extractKey = (arr,key) => {
  return arr.map((val, idx, arr) => {
    return val[key];
  });
};

console.log(`extractKey`);
console.log(extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name'));
console.log(divider);

let extractFullName = (arr) => {
  return arr.map((val, idx, arr) => {
    return `${val.first} ${val.last}`;
  });
};

console.log(`extractFullName`);
console.log(extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]));
console.log(divider);
////////////////////////////////////////////////////
////// filter method
let filter = (arr, callback) => {
  let newArray = [];
  for(let idx=0; idx < arr.length; idx++) {
    if (callback(arr[idx], idx, arr)) {
      newArray.push(arr[idx]);
    }
  }
  return newArray;
}

console.log(filter(['aj','cole','ab','mk'], (name) => { return name === 'cole'}));
console.log(divider);

let filterByValue = (arr, key) => {
  return arr.filter((element, idx, arr) => {
    return element[key];
  });
}
console.log(`filterByValue`);
console.log(filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner'));
console.log(divider);

let find = (arr, valToFind) => {
  let newArray = arr.filter((element, idx, arr) => {
    return valToFind === element;
  })
  if (newArray.length === 0) {
    return undefined;
  }
  return newArray;
};

console.log(`find`);
console.log(find([1,2,3,4,5],10));
console.log(divider);

let find2 = (arr, valToFind) => {
  return arr.filter((element, idx, arr) => {
    return valToFind === element;
  })[0];
};

console.log(`find2`);
console.log(find2([1,2,3,4,5],10));
console.log(divider);

let findInObj = (arr, someKey, someValue) => {
  return arr.filter((element, idx, arr) => {
    return element[someKey] === someValue;
  })[0];
};

console.log(`findInObj`);
console.log(findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true));
console.log(divider);

let removeVowels = (str) => {
  let vowels = `aeiou`;
  let characters = str.split("");
  return characters.filter((char, idx, characters) => {
    return vowels.indexOf(char.toLowerCase()) === -1;
  }).join("");
}
console.log(`removeVowels`);
console.log(removeVowels('Alfred Cole'));
console.log(divider);

let doubleOddNumbers = (arr) => {
  return arr.filter((number, idx, arr) => {
    return number % 2 !== 0
  }).map((number) => {
    return number + number;
  });
}
console.log(`doubleOddNumbers`);
console.log(doubleOddNumbers([1,2,3,4,5]));
console.log(doubleOddNumbers([4,4,4,4,4]));
console.log(divider);

////////////////////////////////////////////////////////////
///// some & every method

// my implementation of the some method
var some = (arr, callback) => {
  for(let idx=0; idx<arr.length; idx++){
    if (callback(arr[idx],idx,arr)) {
      return true;
    }
  }
  return false;
}

// my implementation of the very method
var every = (arr, callback) => {
  for(let idx=0;idx<arr.length; idx++){
    if (!callback(arr[idx], idx, arr)) {
      return false;
    }
    return true;
  }
}

var hasOddNumber = (arr) => {
  return arr.some((val, idx, arr) => {
    if (val % 2 !== 0) {
      return true;
    }
    return false;
  });
};
console.log(`hasOddNumber([1,2,2,2,2,2,4])`);
console.log(hasOddNumber([1,2,2,2,2,2,4]));
console.log(`hasOddNumber([2,2,2,2,2,2,4])`);
console.log(hasOddNumber([2,2,2,2,2,2,4]));
console.log(divider);



var hasAZero = (numbers) => {
  let characters = numbers.toString().split("");
  return characters.some((val, idx)=>{
    return val === '0';
  });
}
console.log(`hasAZero(3332123213101232321)`);
console.log(hasAZero(3332123213101232321));
console.log(`hasAZero(1212121)`);
console.log(hasAZero(1212121));
console.log(divider);

var hasOnlyOddNumbers = (arr) => {
  return arr.every((val, idx, arr) => {
    return val % 2 !== 0;
  });
}

console.log(`hasOnlyOddNumbers([1,3,5,7])`);
console.log(hasOnlyOddNumbers([1,3,5,7]));
console.log(`hasOnlyOddNumbers([1,2,3,5,7])`);
console.log(hasOnlyOddNumbers([1,2,3,5,7]));
console.log(divider);

var hasNoDuplicates = (arr) => {
  return arr.every((val, idx, arr) => {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

console.log(`hasNoDuplicates([1,2,3,1])`);
console.log(hasNoDuplicates([1,2,3,1]));
console.log(`hasNoDuplicates([1,2,3])`);
console.log(hasNoDuplicates([1,2,3]));
console.log(divider);

var arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]
var hasCertainKey = (arr, key) => {
  return arr.every((val,idx,arr) => {
    return val[key];
  });
}
console.log(`hasCertainKey(arr,'first')`);
console.log(hasCertainKey(arr,'first'));
console.log(`hasCertainKey(arr,'isCatOwner')`);
console.log(hasCertainKey(arr,'isCatOwner'));
console.log(divider);

var hasCertainKey2 = (arr, key) => {
  return arr.every((obj, idx, arr) => {
    return key in obj;
  });
}
console.log(`key in obj`);
console.log(`hasCertainKey2(arr,'first')`);
console.log(hasCertainKey2(arr,'first'));
console.log(`hasCertainKey2(arr,'isCatOwner')`);
console.log(hasCertainKey2(arr,'isCatOwner'));
console.log(divider);

var arr1 = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
]
var hasCertainValue = (arr1, key, match) => {
  return arr1.every((val, idx, arr) => {
    return val[key] === match;
  });
};

console.log(`hasCertainValue(arr1,'title','Instructor')`);
console.log(hasCertainValue(arr1,'title','Instructor'));
console.log(`hasCertainValue(arr1,'first','Elie')`);
console.log(hasCertainValue(arr1,'first','Elie'));
console.log(divider);
