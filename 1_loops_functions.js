/*
*Loops Questions:

?01 Write a for loop that prints the numbers from 1 to 10.
?02 Create a while loop that prints the even numbers between 0 and 20.
?03 Implement a do-while loop that calculates the sum of the first 5 positive integers.
?04 Write a for-of loop that iterates over an array of fruits and logs each fruit to the console.
?05 Use a for-in loop to iterate over the properties of a simple object and print the key-value pairs.
?06 Explain the purpose of the break statement in a loop and provide an example of when you would use it.
?07 Describe the continue statement and demonstrate its usage in a loop.
?08 Write a nested for loop that creates a 3x3 multiplication table.
?09 Create a loop that iterates from 1 to 20 and prints "Fizz" if the number is divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5.
?10 Implement a loop that generates the first 10 Fibonacci numbers and stores them in an array.
?11 Write a loop that reverses the order of the elements in an array.
?12 Use a for-of loop to iterate over the characters in a string and log each character to the console.
?13 Implement a loop that iterates over an array of objects, and for each object, print its properties to the console.

*/

//---------------Loops Ans----------------

//* 01
for (let i = 1; i <= 10; i++) {
    //console.log(i)
}

//* 02
let num = 1;
while (num <= 20) {
    if (!(num % 2)) {
        // console.log(num)
    }
    num++;
}

//* 03
let i = 1;
let sum = 0;
do {
    sum = sum + i;
    // console.log(sum)
    i++;
} while (i <= 5);

//* 04
const fruits = ["apple", "banana", "orange", "grape", "strawberry", "mango", "pineapple", "kiwi", "peach", "pear"];
for (const fruit of fruits) {
    // console.log(fruit)
}

//* 05
const user = {
    name: "Aayan Ahmed",
    age: 18,
    id: 55516,
    course: "Web dev",
};
for (const key in user) {
    // console.log(key, user[key]);
}

//* 06
//*example purpose: we have an array of ages of eligible person with one ineligible we have to fund that one person. If that person found stop searchin
const findInEligible = [24, 23, 20, 18, 40, 34, 16, 19, 30];
for (const age of findInEligible) {
    if (age < 18) {
        // console.log(age)
        break;
    }
}

//* 07
//purpose: we are going to sum of all the elem of an array but there also elem with different data type which can effect our code will run unexpectedly
// so we are making a logic using continue keyword that if the type of an elem is not a number then skip that elem to avoid unexpected outputs
let rndmNum = [13, 35, 46, 65, "75", 66, undefined, 22, 1, 4, 6, null, 77, 56];
// let sum = 0;
for (const num of rndmNum) {
    if (typeof num != "number") {
        continue;
    }
    // sum += num;
    // console.log(sum);
}

//* 08
for (let i = 1; i <= 3; i++) {
    let row = ""; //will create row 3 times
    for (let j = 1; j <= 3; j++) {
        row += i * j + " "; //" " to add space between nums
    }
    //   console.log(row.trim()); //Will remove last space of row string
}

//* 09
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        // console.log("Fizz");
    } else if (i % 5 === 0) {
        // console.log("Buzz");
    } else {
        // console.log(i);
    }
}

//* 10
let fibonacciSeries = [0, 1];
for (let i = 0; i <= 7; i++){
    fibonacciSeries.push(fibonacciSeries[i] + fibonacciSeries[i + 1])
}
// console.log(fibonacciSeries)

//*11
function reverseOrder(...n) {
    let arrLen = n.length - 1;
    let output = [];
    for (let i = arrLen; i >= 0; i--) {
      output.push(n[i]);
    }
    return output;
  }
  console.log(reverseOrder("ahzam", "aayan", "owais", "umais", "annas"))

//* 12

let vowels = "aeiou";
for (const char of vowels) {
  console.log(char)
}

//* 13
const arrOfObj = [
  {
    name: "Aayan Ahmed",
    age: 18,
    id: 55516,
  },
  {
    name: "Usama",
    age: 19,
    id: 42347,
  },
  {
    name: "Omais",
    age: 21,
    id: 39906,
  },
  {
    name: "Annas Ahmed",
    age: 22,
    id: 36807,
  },
];
for (const obj of arrOfObj) {
  for (let value in obj) {
    console.log(value, obj[value], typeof value, typeof obj[value])
  }
}