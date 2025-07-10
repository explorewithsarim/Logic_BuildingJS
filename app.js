//  Q reverse Array Elements
// let arr = [1, 2, 3, 4, 5]
// let reverseElements = arr.reverse()
// console.log(reverseElements);

// Q-------> find Maximum Number
// let findLargest = [1, 2, 4, 8, 10]
// let findNOW = Math.max(...findLargest)
// console.log(findNOW);

// Q Total Multiplication OF Array ELemets
// let arr = [1, 2, 4]
// let sumOfElements= arr.reduce((total, index) => total * index )
// console.log(reduce);

//  Q Total Sum OF Array ELemets

// let arr = [1, 2, 3, 4, 5]
// let sumOFArray = arr.reduce((total, index) => total + index, 0)
// console.log(sumOFArray);

//Q print 1 to 100 counting

// for (let index = 0; index <= 100; index++) {
//     console.log(index);

// }

// Q Find VOwels ADVANCE method
// let vowels = ["a", "e", "i", "o", "u"]
// let findVowels = "javascript"

// let found = findVowels.split("").filter((findMax) => vowels.includes(findMax))
// console.log(found);
// console.log(found.length);

//  Q beginner Mewthod
// let countVowels = [];
// for (let i = 0; i < findVowels.length; i++) {
//     const element = findVowels[i];
//     if (element === "a" || element === "e" || element === "i" || element === "o" || element === "o")
//         countVowels.push(element)

// }
// console.log(countVowels.length);

// Q Facorial ADvance Method

// const factorial = (n) => {

//     if (n == 0 || n == 1) {
//         return 1

//     }
//     else {
//         return n * factorial(n - 1)

//     }
// }
// let res = factorial(5)
// console.log(res);

//  Q 2nd method of factorial
// function factorial(num) {
//     if (num == 1) {
//         return 1
//     }

//     else {

//         return num = num * (factorial(num - 1))
//     }

// }
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(factorial(6));

// Q FInd largest num 
// let arr = [1, 2, 4, 5, 6]
// let findMax = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     if (findMax < arr[i]) {
//         findMax = arr[i]
//     }
// }
// console.log(findMax);

//  Q Find lowest num 
// let arr = [1, 2, 4, 5, 6]
// let findlowest = arr[4]

// for (let i = 0; i < arr.length; i++) {
//     if (findlowest > arr[i]) {
//         findlowest = arr[i]
//     }
// }
// console.log(findlowest);

// Q find missing num

// let findMissing = [1, 2, 4, 5]
// let final = []
// let checked = []
// findMissing.map((val) => {
//     checked.push(val)
//     if (val[i] == val + val[i])
// }
// )
// console.log(checked);

//  Q CHCK EVEN OR ADD NUMBER

// const checkEvenOrOdd = (val) => {
//     if (val % 2 === 0) {
//         console.log("even");
//     }
// else    {
//         console.log("odd ha bhai");

//     }
// }
// checkEvenOrOdd(44)
// checkEvenOrOdd(33)
// checkEvenOrOdd(2)

//   Q CHECK PALINDROME WORD 

// let checkPalindrome = "civic"

// let res = checkPalindrome.split("").reverse().join("")

// if (res === checkPalindrome) {

//     console.log("palindrome Word");
// }
// else {
//     console.log("Not A Palindrome Word");
// }

// Q  CAPITALIZE FIRST LETTER OF EACH WORD

// let str = "i am frontend web developer "
// let capitalizeEachWord = str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
// console.log(capitalizeEachWord);


// Q CHECK ANAGRAM WORD

// let input1 = "silent"
// let input2 = "listen"
// let sorted1 = input1.toLowerCase().split("").sort().join("")
// let sorted2 = input2.toLowerCase().split("").sort().join("")
// if (sorted1 === sorted2) {
//     console.log("Anagram");
// }
// else {
//     console.log("Not an Anagram");
// }
