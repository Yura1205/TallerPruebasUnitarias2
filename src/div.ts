/*export function div(a: number, b:number): number {
    return a/b;
}*/
export function div(a: number, b: number): number | undefined {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}