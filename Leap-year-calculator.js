let result 
let output
function isLeapYear(num){
if ( num % 400 === 0) {
  output = `${num} is a leap year.`;
}
else if (num % 4 === 0 && num % 100 !== 0) {
 output = `${num} is a leap year.`;
}
else {
  output =`${num} is not a leap year.`;
}
 return output 
}
let year = 2024;
 result = isLeapYear(year);
 console.log(result);