//coding challenge
//https://www.codewars.com/kata/54ff3102c1bad923760001f3
// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//my 3 solutions

function getVowels (str) {
  let vowelsCount = 0;
  let arr = str.split('');
  for (i = 0; i < arr.length; i++){ 
    if (arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u'){
      vowelsCount += 1
    }
  }
  return vowelsCount
}
getVowels ("abcdevo")


function getVowels(str) {
  let vowelsCount = 0;
  //loop through the string
  for (i = 0; i < str.length; i++) {
  //if a vowel, add to vowel count
    if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u") {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
getVowels ("abcdevo")


function getVowels(str) {
  let vowelsCount = 0;
  str.split('').forEach(function (k) {
    if (k == "a" | k == "e" || k == "i" || k == "o" || k == "u") {
      vowelsCount += 1;
    }
  });
  return vowelsCount;
  }
getVowels ("abcdevo")