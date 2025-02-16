function debounce(func, wait) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(args);
    }, wait);
  };
}

// convert a normal funtion to a curried one
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...nextArgs) => curried(...args, ...nextArgs);
    }
  };
}

function curryExample() {
  // Example function for API requests
  function apiRequest(method, url, data) {
    return fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  // convert normal apirequest funtion to curried api request funtion
  const curriedApiRequest = curry(apiRequest);

  // Pre-set GET and POST requests
  const getRequest = curriedApiRequest("GET");
  const postRequest = curriedApiRequest("POST");
}

// flatten a array where depth is provided
function flat(arr, depth = 1) {
  if (depth > 0) {
    let temp = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        temp.push(...flat(item, depth - 1));
      } else {
        temp.push(item);
      }
    });
    return temp;
  } else return arr;
}

function cookies() {
  //   Session Cookies - Session cookies do not contain an expiration date. Instead, they are stored only as long as the
  //   browser or tab is open
  //   Persistent cookies  - do have an expiration date.These cookies are stored on the user’s disk until the expiration
  //   date and then permanently deleted
  //   a cookie is shared across tabs for the same domain in a browser.
}

function Promise() {
  // .then(): Handles the fulfilled state of a promise.
  // .catch(): Handles the rejected state of a promise.
  // .finally(): Executes after the promise settles, regardless of the outcome.
  // Promise.all(): Waits for all promises to fulfill or for any to reject. returns array of results
  // Promise.race(): Resolves or rejects as soon as the first promise settles.returns first settled promise
  // Promise.allSettled(): Waits for all promises to settle and returns an array of results. array of object of results {status,value }
  // Promise.any(): Resolves as soon as any promise fulfills or returns an error if all are rejected
  // any vs race.png
}

function scriptLoading() {
  // defer Attribute: Loads the script alongside HTML parsing but executes it after the DOM is ready.
  // Useful for non-blocking and sequential execution.
  // async Attribute: Loads and executes the script as soon as it is downloaded, regardless of HTML parsing state.
  // Useful for scripts that are independent of DOM content.
}

function events() {
  // Click: triggered when mousedown and mouseup are triggered in sequence
}

function classesVsInterfaces() {
  // both classes and interfaces are used to define the structure of an object
  // Key Differences:
  // Implementation: Classes can have actual code (method implementations), while interfaces only define the structure.
  // Instantiation: Classes can be instantiated to create objects, whereas interfaces cannot.
  // Inheritance: Both can be extended, but a class can implement multiple interfaces.
  // Access Modifiers: Interfaces do not support access modifiers (public, private, etc.), while classes do.
  // In summary:
  // Use interfaces when you want to define the structure or contract for objects and ensure that other classes
  // implement those properties/methods.
  // Use classes when you want to define the structure as well as the behavior (i.e., actual implementations of methods).
}

function polyfills() {
  //Map
  Array.prototype.myMap = function (callback, thisArg) {
    // Check if the callback is indeed a function
    if (typeof callback !== "function") {
      throw new Error("Callback must be a function");
    }
    // Get the length of the array
    const length = this.length;
    // Create a new array to hold the results
    const result = new Array(length);
    // Iterate over the array and apply the callback
    for (let i = 0; i < length; i++) {
      // Ensure the callback is called with the right context (thisArg) and correct parameters
      result[i] = callback.call(thisArg, this[i], i, this);
    }
    // Return the resulting array
    return result;
  };

  //Reduce
  Array.prototype.myReduce = function (callback, initialValue) {
    // Check if callback is a function
    if (typeof callback !== "function") {
      throw new Error("not function"); // Error for invalid callback
    }
    // Check if `this` is an array
    if (!Array.isArray(this)) {
      throw new Error("not array"); // Error for invalid context
    }
    const length = this.length;
    let startIndex = 0;
    // Check if initialValue is undefined
    if (initialValue === undefined) {
      // If the array is empty and no initialValue is provided
      if (length === 0) {
        throw new Error("initial value required with empty array"); // Error for empty array
      }
      // Use the first element of the array as initialValue
      initialValue = this[0];
      startIndex = 1; // Start from the second element
    }
    // Iterate over the array starting from the determined index
    for (let i = startIndex; i < length; i++) {
      initialValue = callback(initialValue, this[i], i, this);
    }
    return initialValue; // Return the final accumulated value
  };

  //filter
  Array.prototype.myFilter = function (callback, thisArgs) {
    // Check if the provided callback is a function
    if (typeof callback !== "function") {
      throw new Error("not function"); // Throw an error if the callback is not a function
    }
    // Ensure that the context (`this`) is an array
    if (!Array.isArray(this)) {
      throw new Error("not array"); // Throw an error if `this` is not an array
    }
    const length = this.length; // Store the length of the array
    const result = []; // Initialize an empty array to store filtered results
    // Iterate through each element of the array
    for (let i = 0; i < length; i++) {
      // Call the callback with the correct `this` context (thisArgs),
      // passing the current element (this[i]), the index (i), and the full array (this)
      if (callback.call(thisArgs, this[i], i, this)) {
        result.push(this[i]); // If the callback returns true, add the element to the result array
      }
    }
    return result; // Return the filtered result array
  };
}

function intersectionObserver() {
  //It is commonly used for lazy loading images and infinite scrolling
  const lazyLoad = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const placeholder = entry.target;
        const imgSrc = placeholder.getAttribute("data-src");

        // Create an image element to replace the placeholder
        const img = document.createElement("img");
        img.src = imgSrc;

        // Replace placeholder with actual image
        placeholder.appendChild(img);

        // Stop observing the element once it's loaded
        observer.unobserve(placeholder);
      }
    });
  };
  // IntersectionObserver options
  const options = {
    root: null, // default is the viewport
    rootMargin: "0px", // no margin
    threshold: 0.1, // image loads when 10% of the placeholder is in view
  };
  // Create an instance of IntersectionObserver
  const observer = new IntersectionObserver(lazyLoad, options);

  // Select all placeholder elements
  const placeholders = document.querySelectorAll(".image-placeholder");

  // Observe each placeholder element
  placeholders.forEach((placeholder) => {
    observer.observe(placeholder);
  });
}

function addEventListener() {
  // for the third arguement of event listener we can pass a arguement object
  // element.addEventListener(eventType, eventHandler, {
  //   capture: true / false, default: false
  //   once: true / false,
  //   passive: true / false, When true, it indicates that the event listener will never call event.preventDefault().
  //   This improves performance, especially for scroll events, because the browser can assume it doesn't need
  //   to block broswer deafult behviour to handle actions like scrolling to wait for preventDefault()
  //   signal: AbortSignal,
  //      const controller = new AbortController();
  //      const signal = controller.signal;
  //      signal.abort();
  // });
}

function flattenObject() {
  function flattenObject(obj, prefix = "", result = {}) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (
          typeof obj[key] === "object" &&
          obj[key] !== null &&
          !Array.isArray(obj[key])
        ) {
          flattenObject(obj[key], newKey, result); // Recursively flatten
        } else {
          result[newKey] = obj[key]; // Assign value to the flattened key
        }
      }
    }
    return result;
  }
}
function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const results = new Array(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach(async (item, index) => {
      try {
        const value = await item;
        results[index] = value;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results);
        }
      } catch (err) {
        reject(err);
      }
    });
  });
}

// Asynchronous Generator for Pagination
async function* fetchPaginatedData(baseUrl) {
  let page = 1; // Start with the first page

  while (true) {
    // Fetch data from the API
    const response = await fetch(`${baseUrl}?page=${page}`);
    const data = await response.json();
    if (data.results.length === 0) break; // Stop if no more data
    yield data.results; // Yield the results of the current page
    page++; // Increment the page number
  }
}
// Using the Generator
(async function () {
  const baseUrl = "https://api.example.com/data";
  // Iterate over the generator with for-await-of
  for await (const results of fetchPaginatedData(baseUrl)) {
    console.log("Fetched Page:", results); // Process each page of data
  }
})();

//deep copy alternate
structuredClone;

function undefinedToNull(arg) {
  // Use a custom replacer to replace undefined with null
  const a = JSON.stringify(arg, (key, value) =>
    value === undefined ? null : value
  );
  return JSON.parse(a); // Parse back into an object
}
