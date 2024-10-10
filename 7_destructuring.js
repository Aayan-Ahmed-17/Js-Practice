// =========================Array Destructuring Q/A s==========================

/*
?01 Extract the first two elements from the array
?02 Get only the third element from the array
?03 Get the first element and store the rest in a new array
?04 Destructure array with default values for missing elements
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
const [theme1, theme2 = "light"] = settings
console.log(theme1, theme2)
