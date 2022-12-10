// 1 masala

// function arr(num) {
//   let manfiy = [];
//   let sum = 0;

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] > 0) {
//       manfiy.push(num[i]);
//     } else {
//       sum += num[i];
//     }
//   }

//   console.log(manfiy);

//   return sum;
// }

// let arr2 = arr([1, 2, 3, 4, 5, -2, 23, -1, -13, 10, -52]);

// console.log(arr2);

// 2 masala

function checkPalindromeNumbers(str) {
  let palindrome = str.split("").reverse().join("");
  if (str === palindrome) {
    return true;
  } else {
    return false;
  }
}

result = checkPalindromeNumbers("121");
if (result == true) {
  console.log("bu palindrome son");
} else {
  console.log("bu palindrome son emas");
}

// 3 masala

// 4 masala
// let arr = [-1, -2, -3, 5, 6, 1];

// let resultArr = [];

// arr.forEach(function (numbers) {
//   if (numbers < 0) {
//     resultArr.push(numbers);
//   }
// });

// console.log(resultArr);
