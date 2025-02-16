function fetchData(callback) {
  setTimeout(() => {
    const data = "Hello World";
    callback(null, data);
  }, 1000);
}

fetchData(() => {
  console.log("dsfd");
});
