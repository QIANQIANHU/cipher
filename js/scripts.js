var sentence = prompt("sentence");
var convert = sentence.charAt(0).toUpperCase();

var letter = sentence.slice(-1).toUpperCase();

var newString = convert + letter;

var splitString = newString.split("");

var reverseString = splitString.reverse();

var backToString = reverseString.join("");
console.log(backToString);
