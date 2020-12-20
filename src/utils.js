import $ from 'jquery';

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

const shuffleArray = (arr) => {
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

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

export const constructSortedArray = (n) => {
  var arr = new Array(n * n).fill(0).map((_, i) => i);
  const newArr = [];
  while (arr.length) newArr.push(arr.splice(0, n));

  return newArr;
}

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

export const isSorted = (arr) => {
  const spread = arr.reduce((prev, cur) => prev.concat(cur), []);
  const sorted = [...arr].sort((a, b) => a - b);

  return JSON.stringify(sorted) === JSON.stringify(spread);
}

export const getFromStorageOrDefault = (key) => {
  var value = localStorage.getItem(key);
  if (value === null || !value) {
    value = DEFAULTS[key];
  }
  return value;
}

export const setMainColor = (mainColor) => {
  localStorage.setItem("main-color", mainColor);
  $(":root").css("--main-color", mainColor);
}