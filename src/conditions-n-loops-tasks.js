/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 */
function getMaxNumber(a, b, c) {
  let max = a;
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 */
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 */
function isIsoscelesTriangle(a, b, c) {
  return a === b || b === c || a === c;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 */
function convertToRomanNumerals(num) {
  const romanMap = [
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let result = '';
  let currentNum = num;

  romanMap.forEach(([value, symbol]) => {
    while (currentNum >= value) {
      result += symbol;
      currentNum -= value;
    }
  });

  return result;
}

/**
 * Determines whether a string is a palindrome.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i += 1) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}
/**
 * Checks if a number contains a specific digit.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 */
function isContainNumber(num, digit) {
  let currentNum = num; // Копируем значение параметра в локальную переменную
  while (currentNum > 0) {
    if (currentNum % 10 === digit) {
      return true;
    }
    currentNum = Math.floor(currentNum / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < i; j += 1) {
      leftSum += arr[j];
    }

    for (let k = i + 1; k < arr.length; k += 1) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}
/**
 * Sorts an array of numbers in ascending order in place.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 */
function sortByAsc(arr) {
  const result = [...arr];
  for (let i = 0; i < result.length - 1; i += 1) {
    for (let j = 0; j < result.length - i - 1; j += 1) {
      if (result[j] > result[j + 1]) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result; // Возвращаем отсортированную копию массива
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  isPalindrome,
  isContainNumber,
  getBalanceIndex,
  sortByAsc,
};
