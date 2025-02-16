function fetchData(callback) {
  setTimeout(() => {
    const data = "Hello World";
    callback(null, data);
  }, 1000);
}

function fetchPromise() {}

fetchData((_, data) => {
  console.log("dsfd", data);
});
