
function isPalindrome(word){

    var re = /[\W_]/g;
    var lowRegStr = word.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;

}
console.log(isPalindrome('kasur ini rUsab'));//true