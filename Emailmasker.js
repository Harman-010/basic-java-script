function maskEmail(email){
let index = email.indexOf("@");
let sliced=email.slice(1,index-1);
let sliced1= email.slice(0,1);
let sliced3= email.slice(index-1,);
let long = sliced.length;
let replaced = sliced.replaceAll(sliced,"*");
let redu = replaced.repeat(long);
return (`${sliced1}${redu}${sliced3}`);

}
let email = "Preet@example.com"
console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"))
console.log(maskEmail("freecodecamp@example.com"))
console.log(maskEmail("info@test.dev"))
console.log(maskEmail("user@domain.org"))