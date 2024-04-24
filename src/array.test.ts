import { arrayContainsValue, arrayNotContainsValue, array } from './array';

describe('arrayContainsValue', () => {
    it('should return true if the array contains the value', () => {
        const value = 'value1';
        const result = arrayContainsValue(array, value);
        expect(result).toBe(true);
    });
    it('should return true if the array contains the value', () => {
        const value = 'value3';
        const result = arrayContainsValue(array, value);
        expect(result).toBe(true);
    });


});

describe('arrayNotContainsValue', () => {
    it('should return true if the array does not contain the value', () => {
        const value = 'UNAC';
        const result = arrayNotContainsValue(array, value);
        expect(result).toBe(true);
    });
});
