/*
==> Problem-02: OTP Validation for Zapshift
*/
function validOtp(otp) {
  // Your code here
  if (typeof otp !== "string") {
    return "Invalid";
  }
  
  if (otp.length === 8 && otp.startsWith("ph-")) {
    return true;
  }else{
    return false;
  }
  
}

console.log(validOtp("ph-10985"));      // true (valid)
console.log(validOtp("ph-1234"));       // false (length != 8)
console.log(validOtp("abc-12345"));     // false (doesn't start with "ph-")
console.log(validOtp(["ph-10985"]));    // "Invalid" (not a string)
console.log(validOtp(12345678));        // "Invalid" (not a string)
console.log(validOtp(null));            // "Invalid" (not a string)
