// =========================Array Destructuring Q/A s==========================

/*
?01 Extract the first two elements from the array
?02 Get only the third element from the array
?03 Get the first element and store the rest in a new array
?04 Destructure array with default values for missing elements
?05 Extract the second element from the first sub-array
?06 Swap x and y using destructuring
?07 Function Return Values
?08 Extract 3 and 6 from the nested structure
?09 Transform into objects using destructuring in map
?10 Extract specific numbers and the function
*/

// ==========================Ans=====================
//*01
const fruits = ['apple', 'banana', 'orange', 'grape'];
const [firstFruit, secondFruit] = fruits //* done

//*02
const colors = ['red', 'blue', 'green', 'yellow'];
const [,,thirdColor] = colors //* done

//* 03
const numbers = [1, 2, 3, 4, 5];
const [firstNum, ...restNum] = numbers //* done

//* 04 
const settings = ['dark'];
const [theme1, theme2 = "light"] = settings //* done

//* 05
const matrix = [[1, 2], [3, 4], [5, 6]];
const [,secondElem] = matrix[0] //* done

//* 06
let x = 5;
let y = 10;
[x, y] = [y, x] //* done

//* 07
function getCoordinates() {
    return [50, 100];
}
const [xCordinate, yCordinate] = getCoordinates() //* done

//* 08 
const data = [1, [2, 3], 4, [5, [6, 7]]];
const [, [, elem1], , [, [elem2]]] = data //* done

//* 09 
const users = [
    ['John', 'Doe', 30],
    ['Jane', 'Smith', 25],
];
const formattedUsers = users.map(([firstName, lastName, age]) => ({
    firstName,
    lastName,
    age
})); //* done

//* 10
function processData() {
    return [
        [[1, 2], [3, 4]],
        [[5, 6], [7, 8]],
        function(a, b) { return a + b; }
    ];
}
const [
    [[,num2], [,num4]], 
    [,[,num8]], 
    addFunc
] = processData() //* done