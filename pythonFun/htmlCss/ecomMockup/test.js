let tempObj = {};
tempObj["Name"] = "john";
tempObj["Admin"] = "Name";
tempObj["value"] = 1;
console.log(tempObj);
console.log(tempObj["value"]);

// let n = 5
// for (let i=1; i<=n; i++){
//     for (let j=1; j<=n-i; j++){
//         document.write(' ')
//     }
//     for (let k=0; k<2*i-1; k++){
//             document.write(' * ')
//         }
//     console.log()
// }

function twosum(num, target) {
  let array = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        array.push(i);
        array.push(j);
      }
    }
  }

  return array;
}
console.log(twosum([1, 2, 3, 4, 5, 6], 9));

// problem -2
function rev(num, temp) {
  if (num === 0) return temp;
  temp = temp * 10 + (num % 10);
  return rev(num / 10, temp);
}
num = 122;
temp = rev(num, 0);
if (temp === num) {
  console.log("palindrome");
} else {
  console.log("Not palindrome");
}
// using string for checking palindrome

function checkPalindrome(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
const string = prompt("Enter a string: ");
const value = checkPalindrome(string);
console.log(value);

// * problem-3

function roman_to_integer(str1) {
  if (str1 == null) return -1;
  var num = char_to_integer(str1.charAt(0));
  var pre, curr;

  for (var i = 1; i < str1.length; i++) {
    curr = char_to_integer(str1.charAt(i));
    pre = char_to_integer(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
}

function char_to_integer(c) {
  switch (c) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    default:
      return -1;
  }
}
console.log(roman_to_integer("IVX"));
console.log(roman_to_integer("IVX"));
