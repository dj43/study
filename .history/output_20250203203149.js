var a = 10;
function myFunction() {
  var a = 11;
  console.log(this.a);
}
myFunction();
// output undefined in strict mode
// if we use let still undefined as let does not attach to global object
