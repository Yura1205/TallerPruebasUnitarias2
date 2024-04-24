import { anything, anything1 } from './string';

test("Test if 'anything' contains 'UN'", () => {
    expect(anything).toContain("UN");
});

test("Test if 'anything' does not contain 'P'", () => {
    expect(anything).not.toContain("P");
});

test("Test if 'anything1' contains the letter 'n'", () => {
    expect(anything1).toContain("n");
});
 
