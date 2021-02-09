const createTestCafe = require('testcafe');

const browsers = [
  ['lambdatest:Chrome@74.0:Windows 10', 'lambdatest:Chrome@75.0:Windows 10'],
  ['lambdatest:Chrome@76.0:Windows 8', 'lambdatest:Chrome@77.0:Windows 8'],
];
const runTest = async browser => {
  console.log('starting tests');
  await createTestCafe('localhost', 1337)
    .then(tc => {
      testcafe = tc;
      const runner = testcafe.createRunner();
      return runner
        .src(['test.js'])
        .browsers(browser)
        .run();
    })
    .then(async failedCount => {
      console.log('Tests failed: ' + failedCount);
      await testcafe.close();
      return;
    });
}
const runAllBrowsers = async () => {
  for (const browser of browsers) {
    await runTest(browser);
  }
}
runAllBrowsers();