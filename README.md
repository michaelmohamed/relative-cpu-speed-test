# relative-cpu-speed-test

```js
try {
  const {testSeed, timeMs} = await testRelativeSpeed({testSeed: 8, testMs: 70});
  console.log(`The CPU speed test passed. It took ${timeMs} milliseconds to process test seed ${testSeed}.`);
} catch ({testSeed, timeMs}) {
  console.log(`The CPU speed test failed. It took ${timeMs} milliseconds to process test seed ${testSeed}.`);
}
```
