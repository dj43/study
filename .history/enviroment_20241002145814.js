function fetchData(callback) {
  setTimeout(() => {
    const data = "Hello World";
    callback(null, data);
  }, 1000);
}

function fetchPromise() {
  return new Promise((res, rej) => {});
}

fetchData((_, data) => {
  console.log("dsfd", data);
});
