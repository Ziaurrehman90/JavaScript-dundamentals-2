function generateOtp(){
// setting minimum number 
let minimum=1000
// setting maximum number 
let maximum=9999
const otp=Math.floor(Math.random()*(maximum-minimum+1))+minimum;
return otp.toString();
}
console.log("Here is your otp : ",generateOtp());