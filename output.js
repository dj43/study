var a = 10;
function myFunction() {
  var a = 11;
  console.log(this.a);
}
myFunction();
// output undefined in strict mode
// if we use let still undefined as let does not attach to global object
function flatten(obj, currKey = "", result = {}) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = currKey ? currKey + "." + key : key;
      if (typeof obj[key] === "object" && Array.isArray(obj.key)) {
        flatten(obj[key], newKey, result);
      } else {
        console.log(result);
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}
