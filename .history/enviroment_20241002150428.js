function fetchData() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const data = "Hello World";
      res(data);
    }, 1000);
  });
}

function fetchPromise() {}

fetchData().then((data) => console.log(data));
