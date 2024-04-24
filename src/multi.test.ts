import { n, number, notTrue, notFalse } from './multi';

describe('multi.ts', () => {
    test('should verify that n is null', () => {
        expect(n).toBeNull();
    });

    test('should verify that n is defined', () => {
        expect(n).toBeDefined();
    });

    test('should verify that number is equal to 0', () => {
        expect(number).toBe(0);
    });

    test('should verify that notTrue is false', () => {
        expect(notTrue).toBe(false);
    });

    test('should verify that notFalse is true', () => {
        expect(notFalse).toBe(true);
    });
});