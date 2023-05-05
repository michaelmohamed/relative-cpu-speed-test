function testRelativeSpeed(options) {
  const { testSeed, testMs } = options;
  return new Promise((resolve, reject) => {
    const start = performance.now();
    let result = 0;
    for (let i = Math.pow(testSeed, 7); i >= 0; i--) {
      result += Math.atan(i) * Math.tan(i);
    }
    const end = performance.now();
    const timeMs = Math.round(end - start);
    const passed = timeMs <= testMs;
    console.log(`The CPU Speed is ${timeMs} milliseconds.`)
    passed ? resolve({testSeed, timeMs}) : reject({testSeed, timeMs});
  });
}
