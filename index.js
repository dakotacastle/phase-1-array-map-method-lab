const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function upperCase(str) {
  const x = str.charAt(0).toUpperCase() + str.slice(1);
  return x;
}

 const titleCased = () => {
const newArray = tutorials.map(strings => {
  let words = [];
  words += strings.split(' ').map(upperCase).join(' ');
  return words;
})
return newArray;
 }

 console.log(titleCased);

