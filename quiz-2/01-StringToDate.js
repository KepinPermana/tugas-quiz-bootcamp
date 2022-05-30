/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){

    
    var parsedDate = Date.parse(s);

    if (isNaN(s) && !isNaN(parsedDate)) {
        return Date(s);
    }else{
        return"bad format date";
    }



    // var now= new Date (s)
    // return now;
    
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date