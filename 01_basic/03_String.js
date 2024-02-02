const name = " vikash nayan";
let age = 20;
// console.log(`My name is ${name} And my age is ${age}`);

// String Declaration 
const myname = new String('vikash nayan');
// console.log(typeof myname);
// console.log(myname[0]);
// console.log(myname.length)
// console.log(myname.toUpperCase())
// console.log(myname.charAt(1));
// console.log(myname.indexOf('k'));
const newstring = myname.substring(2,-1)
// console.log(newstring);
const Anothernewstring = myname.slice(2,-2)
// console.log(Anothernewstring);
const str = "    vikash    "
// console.log(str)
// console.log(str.trim())    Trim used for remove extra space

const url = "http://vikashnyan.com/profile%vikash=nayan";
console.log(url.replace('=','replace kr diya gya hai'));
console.log(url.includes('profile'))
console.log(myname.split('-'))





