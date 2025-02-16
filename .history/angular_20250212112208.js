// of(...) → Emits provided values in sequence.
of(1, 2, 3).subscribe(console.log); // 1, 2, 3

// map(x => y) → Transforms values emitted by an Observable.
of(2, 4, 6)
  .pipe(map((x) => x * 2))
  .subscribe(console.log); // 4, 8, 12

//   filter(predicate) → Emits only values that pass a condition.
of(1, 2, 3, 4)
  .pipe(filter((x) => x % 2 === 0))
  .subscribe(console.log); // 2, 4

// take(n) → Takes the first n values and completes.

// merge() → Merges multiple Observables concurrently.
merge(of(1, 2), of(3, 4)).subscribe(console.log); // 1, 2, 3, 4

// concat() → Concatenates Observables sequentially.
concat(of(1, 2), of(3, 4)).subscribe(console.log); // 1, 2, 3, 4

// 🚨 Difference Between switchMap(), mergeMap(), and concatMap()
// Operator	        Cancels Previous	Concurrent Requests     	Use Case
// switchMap()            ✅ Yes	        ❌ No	                  Search, API calls
// mergeMap()	          ❌ No	        ✅ Yes	                  Multiple parallel requests
// concatMap()	          ❌ No	        ❌ No (Sequential)	      Order-sensitive tasks

// No, pipe() is not strictly required if you're using just one operator because some operators
// can be used directly on an Observable.
// However, it's recommended to always use pipe() for consistency and maintainability.
// also required for chaining

// Type	                Behavior	                                                                Use Cases
// Cold Observable	    Starts emitting only when subscribed (separate execution per subscriber)	HTTP Requests, Database Queries
// Hot Observable	    Emits values even without subscribers	                                    Click Events, WebSockets
// Unicast Observable   Each subscriber gets a separate execution	                                Regular Observables (like HTTP)
// Multicast            Observable	Multiple subscribers share the same execution	                WebSockets, Event Streams
// BehaviorSubject	    Stores & replays the latest value to new subscribers	                    State Management, User Settings
