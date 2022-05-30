function isCharsUnique(string){

   var huruf = string;
   if  (string.length === 7 && string.match(/[a-z]/i)) {
       return 'true';
   } else {
       return 'false';
   }

}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false