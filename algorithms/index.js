const sumOfPairs = require('./sumOfPairs');

console.log(`sumOfPairs(8, [2, 3, 4, 5, 6, 5, 4])
${sumOfPairs(8, [2, 3, 4, 5, 6, 5, 4]).join(', ')}`);


function calculateExp(base, exp) {
  if (exp === 0) {
    return 1;
  }

  return base * calculateExp(base, exp - 1);
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

function fibtail(n, a, b) {
  if (n === 0) return a;
  if (n === 1) return b;
  return fibtail(n - 1, b, (a + b));
}

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

// using acculumating helper
function countChars(str, char) {
  return count(str, char, str.length);

  function count(str, char, maxChars) {
    if (maxChars < 0) return 0;
    if (str[maxChars] === char) {
      return 1 + count(str, char, maxChars - 1);
    }
    return count(str, char, maxChars - 1);
  }
}

function arraySum(arr) {
  return sum(arr, 0);

  function sum(arr, idx) {
    if (idx === arr.length - 1) {
      return arr[arr.length - 1];
    }

    return arr[idx] + sum(arr, idx + 1);
  }
}

console.log(arraySum([1, 2, 3]));

function isPalindrome(str) {
  if (str.length === 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.substr(1, str.length - 2));
}

console.log(isPalindrome('racecar'));
