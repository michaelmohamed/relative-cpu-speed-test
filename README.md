# relative-cpu-speed-test

## Description
An async script that can be used to test CPU speed from a browser without blocking.

## Usage
```js
try {
  const {testSeed, timeMs} = await testRelativeSpeed({testSeed: 8, testMs: 70});
  console.log(`The CPU speed test passed. It took ${timeMs} milliseconds to process test seed ${testSeed}.`);
} catch ({testSeed, timeMs}) {
  console.log(`The CPU speed test failed. It took ${timeMs} milliseconds to process test seed ${testSeed}.`);
}
```

## Example Use (with & without throttling)

```sh
# No CPU throttling
The CPU test passed. It took 89 milliseconds to process test seed 8.

# 4x CPU throttling (slow down)
The CPU test failed. It took 359 milliseconds to process test seed 8.

# 6x CPU throttling (slow down)
The CPU test failed. It took 536 milliseconds to process test seed 8.
```
