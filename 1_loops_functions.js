/*
*Loops Questions:

?01 Write a for loop that prints the numbers from 1 to 10.
?02 Create a while loop that prints the even numbers between 0 and 20.
?03 Implement a do-while loop that calculates the sum of the first 5 positive integers.
?04 Write a for-of loop that iterates over an array of fruits and logs each fruit to the console.
?05 Use a for-in loop to iterate over the properties of a simple object and print the key-value pairs.
?06 Explain the purpose of the break statement in a loop and provide an example of when you would use it.

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