
const bundle = require('./assignment-1');

test('capitalize toto to TOTO', () => {
  expect(bundle.capitalize('toto')).toBe('TOTO');
});


test('reverse toto to otot', () => {
  expect(bundle.reverseString('toto')).toBe('otot');
});

test('A calculator object that contains the basic operations: add, subtract, divide, and multiply.', () => {
    let calculator = bundle.createCalculator();
    expect(calculator.sum(1,2)).toBe(3);
    expect(calculator.sub(5,1)).toBe(4);
    expect(calculator.div(4,2)).toBe(2);
    expect(calculator.mul(3,2)).toBe(6);
});

test('caesar-cypher toto with shift 1 => upup', () => {
    expect(bundle.caesar('toto',1)).toBe('upup');
  });

test('caesar-cypher toto with shift 7 => avav', () => {
    expect(bundle.caesar('toto',7)).toBe('avav');
  });

test('caesar-cypher TOto with shift 2 => VQvq', () => {
    expect(bundle.caesar('TOto',2)).toBe('VQvq');
  });


test('analysis of [1,4,3,5] = {1,5,4}', () => {
expect(bundle.analyzeArray([1,4,3,5])).toEqual({min: 1, max: 5, length: 4});
});