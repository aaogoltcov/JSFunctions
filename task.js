'use strict';

// Task 1
function getSolutions(a, b, c) {
    let D = (Math.pow(b, 2) - (4 * a * c));
    if (D > 0) {
        return {'D': D, 'roots': [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)]};
    } else if (D === 0) {
        return {'D': D, 'roots': [(-b + Math.sqrt(D)) / (2 * a)]};
    } else {
        return {'D': D, 'roots': []};
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result['D']}`);
    if (result['roots'].length === 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result['roots'].length === 1) {
        console.log(`Уравнение имеет один корень X₁ = ${result['roots'][0]}`);
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result['roots'][0]}, X₂ = ${result['roots'][1]}`);
    }
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// Task 2
function getAverageMark(marks) {
    if (marks.length > 0) {
        return marks.reduce((previousValue, currentValue) => currentValue += previousValue) / marks.length;
    } else {
        return 0;
    }
};

function getAverageScore(data) {
    if (Object.keys(data).length > 0 || data.length > 0) {
        let newArray = {}
        let averageScore = 0
        let sum = 0
        let array =  Object.entries(data).reduce(function(previousValue, currentValue) {
                    averageScore = getAverageMark(currentValue[1]);
                    sum += averageScore;
                    return newArray[Object.values(currentValue)[0]] = averageScore;
                },
            0);
        newArray['average'] = (sum / Object.keys(newArray).length)
        return newArray;
    } else if (Object.keys(data).length == 0) {
        return {'average': 0}
    } else {
        return 0;
    }
};

let data = {
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4],
};

console.log(getAverageScore(data));
console.log(getAverageScore([]));
console.log(getAverageScore({}));

// Task 3
function getDecodedValue(secret) {
    if (parseInt(secret) === 1) {
        return 'Эмильо';
    } else {
        return 'Родриго';
    };
};

function getDecodedName(name) {
    if (name === 'aaa') {
        return 'firstName';
    } else {
        return 'lastName';
    };
};

function getPersonData(secretData) {
    let newArray = {}
    let array = Object.entries(secretData).reduce(function(previousValue, currentValue) {
        return newArray[getDecodedName((currentValue)[0])] = getDecodedValue(currentValue[1]);
        }, 0);
    return newArray;
}

let secret_data = {
    aaa: 0,
    bbb: 0,
};

console.log(getPersonData({
                  aaa: 0,
                  bbb: 0,
              }));
console.log(getPersonData({
                  aaa: 1,
                  bbb: 0,
              }));
console.log(getPersonData({
                  aaa: 0,
                  bbb: 1,
              }));
console.log(getPersonData({
                  aaa: 1,
                  bbb: 1,
              }));