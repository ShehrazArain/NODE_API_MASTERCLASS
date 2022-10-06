const reverseString = (str) => {
  let str2arr = str.split('');
  let strReverse = str2arr.reverse();
  let result = strReverse.join('');
  return result;
};

const result = reverseString('CodeClicks');
console.log(result);

// Algoritham
//  Convert String into Array .
//  Reverse with array
//  convert array into String
