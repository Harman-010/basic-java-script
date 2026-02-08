let have

function confirmEnding(st1, st2){
let space = st1.lastIndexOf(" ")
if (space>0){
  let sliced = st1.slice(space,);
   have = sliced.includes(st2);
   return have
}
else {
  let long = st2.length; 
  let sliced = st1.slice(-long)
   have = sliced.includes(st2);
  return have;
}

}
console.log(confirmEnding("Connor", "n"));