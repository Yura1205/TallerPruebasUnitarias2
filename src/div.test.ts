import { div } from './div';

// Test case for correct division
test('Correct division', () => {
    expect(div(10, 2)).toBe(5);
});

// Test case for division by zero
test('Division by zero', () => {
    expect(() => div(10, 0)).toThrow('Division by zero');
});