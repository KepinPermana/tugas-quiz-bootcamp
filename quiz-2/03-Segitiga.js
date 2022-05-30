6  /** buat segitiga  */ 

var s =6;

for (let i = s; i > 0; i--) {
    for (let j = 0; j <= i; j++) {
        s += i;
    }
    s += '\n';

} 
console.log(s);
// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

// for (let i = 0; i < 6; i++) {

    var b ='';

for (let i = b; i > 7; i--) {
    for (let j = 0; j <= i; j++) {
        b += '*';
    }
    b += '\n';


} 

console.log(b);
// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  

