import { sum } from './sum';

test('La suma de dos valores es mayor a 10', () => {
    expect(sum(6, 5)).toBeGreaterThan(10);
});

test('La suma de dos valores es mayor o igual a 20', () => {
    expect(sum(10, 10)).toBeGreaterThanOrEqual(20);
});

test('La suma de dos valores es menor o igual a 8', () => {
    expect(sum(3, 4)).toBeLessThanOrEqual(8);
});

test('La suma de dos valores es menor a 12', () => {
    expect(sum(5, 6)).toBeLessThan(12);
});

test('La suma de dos valores es igual a 9', () => {
    expect(sum(4, 5)).toEqual(9);
});