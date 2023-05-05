# relative-cpu-speed-test

```js
try {
  const [testSeed, timeMs] = await testRelativeSpeed(8, 70);
  console.log(`The CPU speed test passed. It took ${timeMs} milliseconds to process test seed ${testSeed}.`);
} catch ([testSeed, timeMs]) {
  console.log(`The CPU speed test failed. It took ${timeMs} milliseconds to process test seed ${testSeed}.`);
}
```
