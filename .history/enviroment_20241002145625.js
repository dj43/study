function fetchData(callback) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = "Hello World";
      callback(null, data);
    }, 1000);
  });
}

fetchData((_, data) => {
  console.log("dsfd", data);
});
