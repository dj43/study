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
