/* eslint-disable prettier/prettier */
import { init, abs, ceil, min, max, floor, round } from './';

describe('Bitwise Math functions', () => {
  beforeAll(async () => {
   await init();
  });

  test('abs', () => {
    expect(abs(5)).toBe(5);
    expect(abs(-5)).toBe(5);
    expect(abs(0)).toBe(0);
  });
  test('round', () => {
    expect(round(5.6)).toBe(6);
    expect(round(-5.6)).toBe(-6);
    expect(round(0)).toBe(0);
    expect(round(5)).toBe(5);
    expect(round(-5)).toBe(-5);
    expect(round(5.4)).toBe(5);
    expect(round(-5.4)).toBe(-5);
    expect(round(5.5)).toBe(6);
    expect(round(-5.5)).toBe(-5);
  });

  test('min', () => {
    expect(min(3, 5)).toBe(3);
    expect(min(-3, -5)).toBe(-5);
    expect(min(0, 0)).toBe(0);
  });

  test('max', () => {
    expect(max(3, 5)).toBe(5);
    expect(max(-3, -5)).toBe(-3);
    expect(max(0, 0)).toBe(0);
  });
  test('floor', () => {
    expect(floor(5.6)).toBe(5);
    expect(floor(-5.6)).toBe(-6);
    expect(floor(0)).toBe(0);
    expect(floor(5)).toBe(5);
    expect(floor(-5)).toBe(-5);
    expect(floor(5.9999)).toBe(5);
    expect(floor(-5.0001)).toBe(-6);
  });

  test('ceil', () => {
    expect(ceil(5.6)).toBe(6);
    expect(ceil(-5.6)).toBe(-5);
    expect(ceil(0)).toBe(0);
    expect(ceil(5)).toBe(5);
    expect(ceil(-5)).toBe(-5);
    expect(ceil(5.0001)).toBe(6);
    expect(ceil(-5.9999)).toBe(-5);
  });
});

describe('Quick Math functions vs. Standard Math functions', () => {
  beforeAll(async () => {
    await init();
   });
  const testValues = [
    -10.987, -10.5, -10.123, -10, -5.678, -5.5, -5.321, -5, -1.111, -1, 0, 1, 1.111,
    5, 5.321, 5.5, 5.678, 10, 10.123, 10.5, 10.987,
  ];
 

 

  testValues.forEach((value) => {
    test('abs', () => {
        expect(abs(value)).toBe(Math.abs(value));
    });
    test(`floor: custom vs native for ${value}`, () => {
      expect(floor(value)).toBe(Math.floor(value));
    });

    test(`ceil: custom vs native for ${value}`, () => {
      expect(ceil(value)).toBe(Math.ceil(value));
    });

    test(`round: custom vs native for ${value}`, () => {
      expect(round(value)).toBe(Math.round(value));
    });
  });

  test('min', () => {
    for (let i = 0; i < testValues.length; i++) {
      for (let j = 0; j < testValues.length; j++) {
        //@ts-ignore
        expect(min(testValues[i], testValues[j])).toBe(
          //@ts-ignore
          Math.min(testValues[i], testValues[j]),
        );
      }
    }
  });

  test('max', () => {
    for (let i = 0; i < testValues.length; i++) {
      for (let j = 0; j < testValues.length; j++) {
        //@ts-ignore
        expect(max(testValues[i], testValues[j])).toBe(
          //@ts-ignore
          Math.max(testValues[i], testValues[j]),
        );
      }
    }
  });
});
