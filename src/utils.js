export const DIR = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
}

const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const isEvenPermutation = (array) => {
    var inversions = 0;
    const n = array.length;
    for (var i = 0; i < n * n; i++) {
        const [x, y] = [Math.floor(i / n), i % n];
        const current = array[x][y];
        if (current === 0) {
            inversions += x;
            continue;
        }
        for (var j = i + 1; j < n * n; j++) {
            const [x2, y2] = [Math.floor(j / n), j % n];
            const toCheck = array[x2][y2];
            if (toCheck === 0) continue;
            console.log(current, toCheck);
            if (current > toCheck) inversions++;
        }
    }
    return (inversions % 2) === 0;
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
        temp = arr[0][n-1];
        arr[0][n-1] = arr[1][0];
        arr[1][0] = temp;
    }

    return arr;
}