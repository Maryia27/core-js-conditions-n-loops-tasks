function isPositive(number) {
  return number >= 0;
}
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
function canQueenCaptureKing(queen, king) {
  return (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  );
}

function isIsoscelesTriangle(a, b, c) {
  return a === b || b === c || a === c;
}

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

function isPalindrome(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i += 1) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}

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
