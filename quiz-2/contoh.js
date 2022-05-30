var retStr = '';

var jump = 1;
var currNum = 1;
for(var i=0;i<10;i++){
    for(var j=0;j<3;j++){
        retStr  = retStr + (currNum++);
    }
    currNum += jump++;
}
console.log(retStr);