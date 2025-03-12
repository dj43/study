// of(...) → Emits provided values in sequence.
of(1, 2, 3).subscribe(console.log); // 1, 2, 3

// 1. Map → Fetch users and return only names atrribute
// getUserNames(): Observable<string[]> {
//   return this.http.get<any[]>(`${this.API_URL}/users`).pipe(
//     map(users => users.map(user => user.name))
//   );
// }

// 2. Filter → Fetch users and return those whose name starts with 'C'
// getFilteredUsers(): Observable<any[]> {
//   return this.http.get<any[]>(`${this.API_URL}/users`).pipe(
//     map(users => users.filter(user => user.name.startsWith('C')))
//   );
// }

// 3. Take → Fetch posts but only take the first 3
// getLimitedPosts(): Observable<any[]> {
//   return this.http.get<any[]>(`${this.API_URL}/posts`).pipe(take(3));
// }

// 4. Merge → Fetch users and posts simultaneously
// getUsersAndPosts(): Observable<any> {
//   const users$ = this.http.get(`${this.API_URL}/users`);
//   const posts$ = this.http.get(`${this.API_URL}/posts`);
//   return merge(users$, posts$);
// }

// 5. Concat → First login, then fetch user details
// loginAndGetUser(): Observable<any> {
//   const login$ = this.http.post(`${this.API_URL}/posts`, { username: 'test' });
//   const userDetails$ = this.http.get(`${this.API_URL}/users/1`);
//   return concat(login$, userDetails$);
// }

// 1. switchMap → Cancels previous request if a new one starts
// searchUser(userId: number): Observable<any> {
//   return this.http.get(`${this.API_URL}/users/${userId}`).pipe(
//     switchMap(user => this.http.get(`${this.API_URL}/posts?userId=${userId}`)) // Fetch posts of the searched user
//   );
// }

// 2. mergeMap → Runs multiple API calls in parallel
// getUserPostsParallel(userIds: number[]): Observable<any> {
//   return this.http.get<any[]>(`${this.API_URL}/users`).pipe(
//     mergeMap(users => {
//       const requests = userIds.map(id => this.http.get(`${this.API_URL}/posts?userId=${id}`));
//       return requests.length ? requests[0] : [];
//     })
//   );
// }

// 3. concatMap → Runs API calls sequentially
// getUserPostsSequential(userIds: number[]): Observable<any> {
//   return this.http.get<any[]>(`${this.API_URL}/users`).pipe(
//     concatMap(users => {
//       const requests = userIds.map(id => this.http.get(`${this.API_URL}/posts?userId=${id}`).pipe(delay(1000))); // Simulating delay
//       return requests.length ? requests[0] : [];
//     })
//   );
// }

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

//Lazy loading
loadComponent: () =>
  import("./lazy/lazy.component").then((m) => m.LazyComponent);

// Encapsulation Type	Behavior	                                                    Use Case
// Emulated (Default)	Styles are scoped to the component using attribute selectors	✅ Best for most cases (prevents leakage, but allows global styles)
// ShadowDom	        Uses native Shadow DOM, fully isolating styles	                ✅ Best for web components and full style encapsulation
// None	                No encapsulation, styles apply globally	                        ⚠️ Can cause style conflicts in large app

// Pure pipes are only re-evaluated when the input value changes (immutable data).
// Impure pipes are re-evaluated on every change detection cycle (mutable data).

//Guard	Use Case
// ✅ canActivate	    Prevents navigation to a route if the user is unauthorized.
// ✅ canActivateChild	Prevents navigation to child routes based on roles.
// ✅ canLoad	        Prevents unauthorized users from even downloading lazy-loaded modules.
// ✅ canMatch	        Dynamically enable/disable routes based on conditions (feature flags).
// ✅ canDeactivate     	Prevents users from leaving a page with unsaved changes.
