function truncateString(letter, num){
let long = letter.length;
if(long>num){

let sliced = letter.slice(num,);
let sliced1 = letter.slice(0,num)

let replaced = sliced.replaceAll(sliced,".");
let repeated = replaced.repeat(3)
return `${sliced1}${repeated}`;}

else {
  return letter;
}

}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))