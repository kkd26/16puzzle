import $ from 'jquery';

/**
 * Array of direction arrow key values.
 */
export const DIR = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
}

const DEFAULTS = {
  "main-color": "#61DAFB",
  "board-size": 4
}

/**
 * Shuffle an array randomly in place.
 * @param {Array<Array<Number>>} arr 
 */
const shuffleArray = (arr) => {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

/**
 * Check if the permutation of an array is even.
 * @param {Array<Array<Number>>} arr 
 */
const isEvenPermutation = (arr) => {
  var inversions = 0;
  const n = arr.length;
  for (var i = 0; i < n * n; i++) {
    const [x, y] = [Math.floor(i / n), i % n];
    const current = arr[x][y];
    if (current === 0) {
      inversions += x;
      continue;
    }
    for (var j = i + 1; j < n * n; j++) {
      const [x2, y2] = [Math.floor(j / n), j % n];
      const toCheck = arr[x2][y2];
      if (toCheck === 0) continue;
      if (current > toCheck) inversions++;
    }
  }
  return (inversions % 2) === 0;
}

/**
 * Returns a deep copy of a two-dimensional array
 * @param {Array<Array<Number>>} arr 
 */
export const copy = (arr) => {
  return arr.map(x => x.slice());
}

/**
 * Constructs a two-dimensional array with dimensions n x n which is sorted and contains numbers from 0 to n^2-1.
 * @param {Number} n 
 */
export const constructSortedArray = (n) => {
  var arr = new Array(n * n).fill(0).map((_, i) => i);
  const newArr = [];
  while (arr.length) newArr.push(arr.splice(0, n));

  return newArr;
}

/**
 * Constructs a two-dimensional array with dimensions n x n which is solvable for the puzzle.
 * @param {Number} n 
 */
export const constructCorrectArray = (n) => {
  var arr = new Array(n * n).fill(0).map((_, i) => i);
  shuffleArray(arr);
  const newArr = [];
  while (arr.length) newArr.push(arr.splice(0, n));
  arr = newArr;
  var x, y;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (arr[i][j] === 0) {
        x = i;
        y = j;
      }
    }
  }
  var temp = arr[0][0];
  arr[0][0] = arr[x][y];
  arr[x][y] = temp;
  if (!isEvenPermutation(arr)) {
    temp = arr[0][n - 1];
    arr[0][n - 1] = arr[1][0];
    arr[1][0] = temp;
  }

  return arr;
}

/**
 * Checks that the numbers in a two-dimensional array are sorted in ascending order
 * @param {Array<Array<Number>>} arr 
 */
export const isSorted = (arr) => {
  var tempArr = [...arr];
  tempArr = tempArr.reduce((prev, cur) => prev.concat(cur), []);
  var sorted = [...tempArr].sort((a, b) => a - b);

  return JSON.stringify(sorted) === JSON.stringify(tempArr);
}

/**
 * Gets a value at the key from the local storage. If the value is not present then returns default.
 * @param {String} key 
 */
export const getFromStorageOrDefault = (key) => {
  var value = localStorage.getItem(key);
  if (value === null || !value) {
    value = DEFAULTS[key];
  }
  return value;
}

/**
 * Changes the main color to specified.
 * @param {String} mainColor hex value of a color to be set
 */
export const setMainColor = (mainColor) => {
  localStorage.setItem("main-color", mainColor);
  $(":root").css("--main-color", mainColor);
}