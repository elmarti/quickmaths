const { abs, ceil, min, max, init } = require('./dist');
const Benchmark = require('benchmark');

const testValues = [
  -10.987, -10.5, -10.123, -10, -5.678, -5.5, -5.321, -5, -1.111, -1, 0, 1,
  1.111, 5, 5.321, 5.5, 5.678, 10, 10.123, 10.5, 10.987,
];
const runBenchmark = async () => { 
  await init();

const absSuite = new Benchmark.Suite();

absSuite
  .add('abs: custom', () => {
    testValues.forEach((value) => {
      abs(value);
    });
  })
  .add('abs: native', () => {
    testValues.forEach((value) => {
      Math.abs(value);
    });
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
const ceilSuite = new Benchmark.Suite();

ceilSuite
  .add('ceil: custom', () => {
    testValues.forEach((value) => {
      ceil(value);
    });
  })
  .add('ceil: native', () => {
    testValues.forEach((value) => {
      Math.ceil(value);
    });
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })

  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
const minSuite = new Benchmark.Suite();

minSuite
  .add('min: custom', () => {
    testValues.forEach((value) => {
      min(value, Math.random());
    });
  })
  .add('min: native', () => {
    testValues.forEach((value) => {
      Math.min(value, Math.random());
    });
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();
const maxSuite = new Benchmark.Suite();

maxSuite
  .add('max: custom', () => {
    testValues.forEach((value) => {
      max(value, Math.random());
    });
  })
  .add('max: native', () => {
    testValues.forEach((value) => {
      Math.max(value, Math.random());
    });
  })
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run();

};
runBenchmark();