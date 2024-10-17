function capitalize(string) {  
    const firstLetter = string.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = string.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
}

// console.log(capitalize('beyond'));  //to run in terminal: node app.js
  
// module.exports = capitalize;

function reverse(string) {
    return string.split("").reverse().join("");
}
// console.log(reverse("olleH"));

const calculator = {
  
    subtract: function(a, b) {return a - b},
    add: function(a, b) {return a + b},
    multiply: function(a, b) {return a * b},
    divide: function(a, b) {return a / b},

};

// console.log(calculator.add(2, 1));

// Caesar cipher 
const caesarCipher = function (string, shift) {
    return string
      .split("")
      .map((char) => shiftChar(char, shift))
      .join("");
  };
  
  const codeSet = (code) => (code < 97 ? 65 : 97);
  
  // function so that % works with negative numbers:
 
  const mod = (n, m) => ((n % m) + m) % m;
  
  const shiftChar = (char, shift) => {
    const code = char.charCodeAt();
  
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
      return String.fromCharCode(
        mod(code + shift - codeSet(code), 26) + codeSet(code)
      );
    }
    return char;
  };

// console.log(caesarCipher('Hello, World!', 3));

// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

const analyzeArray = {
  
  add: function(a, b) {return a + b},
  average: function(arr) {return arr.reduce((a, b) => a + b) / arr.length},
  min: function(arr) {return Math.min(...arr)},
  max: function(arr) {return Math.max(...arr)},
  length: function(arr) {return arr.length},

};

// console.log(analyzeArray.length([1, 2, 3, 4, 5, 6, 7]))

// const object = new AnalyzeArray([1, 2, 33, 4, 55]);
// console.log(object);

module.exports.firstPlace = capitalize;
module.exports.secondPlace = reverse;
module.exports.thirdPlace = calculator;
module.exports.fourthPlace = caesarCipher;
module.exports.fifthPlace = caesarCipher;
module.exports.sixthPlace = caesarCipher;
module.exports.seventhPlace = analyzeArray;