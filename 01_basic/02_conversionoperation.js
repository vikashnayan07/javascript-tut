const score = null   // yadi koi mix value("30abc") ka conversion number m
                        // me kare toh uska output "Nan" aayeaga 
                        // null ==> 0
                        // undefined ==> NaN
                        // boolean ==> 1,2;
// console.log(typeof score);
// console.log(typeof(score));
let  valueInNumber = Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

//****************Operational******************//
let str1 = "Namaste";
let str2 = " Bharat";
console.log(str1 + str2);
console.log(1+ "2");
console.log("1" + 2);
console.log(1+ 2+ "2");
console.log("1" + 2 + 2);
console.log(1 + "2" + 2);